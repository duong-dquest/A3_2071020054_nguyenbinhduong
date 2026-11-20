(function () {
  var root = document.documentElement;
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var pick = function (l) { return l[Math.floor(Math.random() * l.length)]; };
  var F = function () { return window.Fairy; };
  function load(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; }
  function say(t, mood, ms) { var f = F(); if (!f) return; if (mood) f.mood(mood, ms || 3200); f.say(t, ms || 3200); }
  function burst(n) { var f = F(); if (f) { var c = f.center(); f.spark(c.cx, c.cy, n || 10, 90); } }

  // ---- Âm thanh (mặc định tắt) ----
  var snd = { on: load('sound', false), ctx: null };
  function tone(f1, f2, dur, type, vol) {
    if (!snd.on) return;
    try {
      snd.ctx = snd.ctx || new (window.AudioContext || window.webkitAudioContext)();
      var c = snd.ctx, o = c.createOscillator(), g = c.createGain(), t = c.currentTime;
      o.type = type || 'sine';
      o.frequency.setValueAtTime(f1, t); o.frequency.exponentialRampToValueAtTime(f2, t + dur);
      g.gain.setValueAtTime(vol || 0.08, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + dur);
    } catch (e) {}
  }
  var pop = function () { tone(520, 1100, 0.09); };
  var meow = function () { tone(520, 880, 0.18, 'sawtooth', 0.05); window.setTimeout(function () { tone(880, 420, 0.28, 'sawtooth', 0.05); }, 170); };
  window.Sound = { tone: tone, pop: pop, meow: meow };

  // ---- Giao diện chung: dock, bảng, thông báo ----
  var dock = document.querySelector('.dock');
  if (!dock) return;
  var toastEl = el('div', 'toast'); toastEl.setAttribute('role', 'status'); toastEl.setAttribute('aria-live', 'polite'); document.body.appendChild(toastEl);
  var toastTimer;
  function toast(msg) {
    toastEl.textContent = msg; toastEl.classList.add('show');
    window.clearTimeout(toastTimer); toastTimer = window.setTimeout(function () { toastEl.classList.remove('show'); }, 3600);
  }
  var panels = {};
  function panel(name, html) { var p = el('section', 'panel', html); p.hidden = true; p.setAttribute('aria-label', name); document.body.appendChild(p); panels[name] = p; return p; }
  function toggle(name) { Object.keys(panels).forEach(function (k) { panels[k].hidden = k !== name || !panels[k].hidden; }); }

  // ---- Huy hiệu ----
  var BADGES = {
    catch10: ['🎯', 'Thợ săn tinh linh', 'Bắt tinh linh 10 lần'], wake: ['⏰', 'Kẻ phá giấc ngủ', 'Đánh thức tinh linh đang ngủ'],
    treat: ['🐟', 'Người nuôi mèo', 'Thả cá cho tinh linh ăn'], projects: ['🧭', 'Nhà thám hiểm', 'Mở cả hai dự án'],
    egg: ['🥚', 'Thợ săn bí mật', 'Tìm một easter egg'], play: ['🏎️', 'Tay đua mới', 'Chơi thử NITRO DASH'],
    score: ['🥷', 'Né như ninja', 'Đạt 500 điểm ở NITRO DASH'], night: ['🌙', 'Cú đêm', 'Bật chế độ đêm'],
    dont: ['⚠️', 'Cấm bấm mà vẫn bấm', 'Bấm nút Đừng bấm'], tour: ['🎫', 'Khách VIP', 'Đi hết tour cùng tinh linh'],
    swarm: ['🐱', 'Chúa tể bầy mèo', 'Nhân bản tinh linh'], ask: ['💬', 'Phóng viên', 'Hỏi tinh linh một câu']
  };
  var ids = Object.keys(BADGES), owned = load('badges', {});
  var bp = panel('badges', '<h3>Huy hiệu</h3><ul class="badge-list"></ul>');
  function renderBadges() {
    bp.querySelector('ul').innerHTML = ids.map(function (id) {
      var b = BADGES[id], got = owned[id];
      return '<li class="' + (got ? 'got' : 'locked') + '"><span aria-hidden="true">' + (got ? b[0] : '🔒') + '</span><span><b>' + b[1] + '</b><small>' + b[2] + '</small></span></li>';
    }).join('');
    dock.querySelector('[data-badge-count]').textContent = Object.keys(owned).length + '/' + ids.length;
  }
  function award(id) {
    if (owned[id] || !BADGES[id]) return;
    owned[id] = 1; save('badges', owned); renderBadges();
    toast('🏆 Huy hiệu mới: ' + BADGES[id][1]); pop(); burst(12);
    if (Object.keys(owned).length === ids.length) say('Đủ huy hiệu rồi! Cậu là huyền thoại!', 'quay', 4200);
  }
  renderBadges();

  // ---- Ngày / đêm ----
  var nightBtn = dock.querySelector('[data-dock="night"]'), hour = new Date().getHours();
  var fireflies = document.querySelector('.star-field');
  for (var i = 0; i < 12 && fireflies; i++) {
    var ff = el('span', 'firefly');
    ff.style.cssText = 'left:' + (Math.random() * 96).toFixed(0) + '%;top:' + (30 + Math.random() * 65).toFixed(0) + '%;animation-delay:-' + (Math.random() * 9).toFixed(1) + 's;animation-duration:' + (7 + Math.random() * 6).toFixed(1) + 's';
    fireflies.appendChild(ff);
  }
  function setNight(on, manual) {
    root.classList.toggle('night', on);
    nightBtn.setAttribute('aria-pressed', String(on)); nightBtn.textContent = on ? '☀️' : '🌙';
    nightBtn.setAttribute('aria-label', on ? 'Chuyển sang ban ngày' : 'Chuyển sang ban đêm');
    if (manual) { save('night', on); if (on) award('night'); }
  }
  setNight(load('night', hour >= 19 || hour < 5), false);

  // ---- Hiệu ứng ban ngày: mặt trời, mây, bướm, phấn hoa; ban đêm: mặt trăng ----
  var sky = el('div', 'sky'), skyDay = el('div', 'sky-day'), flutter = el('div', 'flutter');
  sky.setAttribute('aria-hidden', 'true'); flutter.setAttribute('aria-hidden', 'true');
  skyDay.appendChild(el('span', 'sun'));
  for (var n1 = 0; n1 < 4; n1++) {
    var sCloud = el('span', 'cloud');
    sCloud.style.cssText = '--y:' + (6 + n1 * 13) + '%;--s:' + (0.7 + Math.random() * 0.8).toFixed(2) + ';--o:' + (0.5 + Math.random() * 0.3).toFixed(2) + ';--t:' + (90 + Math.random() * 70).toFixed(0) + 's;--d:-' + (Math.random() * 90).toFixed(0) + 's';
    skyDay.appendChild(sCloud);
  }
  sky.appendChild(skyDay); sky.appendChild(el('span', 'moon')); document.body.insertBefore(sky, document.body.firstChild);
  for (var n2 = 0; n2 < 14; n2++) {
    var sMote = el('span', 'mote');
    sMote.style.cssText = '--x:' + (Math.random() * 98).toFixed(0) + '%;--s:' + (4 + Math.random() * 5).toFixed(1) + 'px;--t:' + (14 + Math.random() * 14).toFixed(0) + 's;--d:-' + (Math.random() * 20).toFixed(0) + 's';
    flutter.appendChild(sMote);
  }
  (document.querySelector('.star-field') || document.body).appendChild(flutter);
  // Bướm: vẽ bằng SVG nhìn từ trên xuống, bay lượn tự nhiên, đôi lúc lượn không vỗ cánh và né con trỏ
  var BF_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><g class="wing"><ellipse cx="6.5" cy="8" rx="6" ry="5" transform="rotate(-25 6.5 8)" style="fill:var(--c1)"/><ellipse cx="7.5" cy="16" rx="4.2" ry="4" transform="rotate(20 7.5 16)" style="fill:var(--c2)"/><circle cx="5" cy="8" r="1.4" fill="#fff" opacity=".7"/></g><g class="wing"><ellipse cx="17.5" cy="8" rx="6" ry="5" transform="rotate(25 17.5 8)" style="fill:var(--c1)"/><ellipse cx="16.5" cy="16" rx="4.2" ry="4" transform="rotate(-20 16.5 16)" style="fill:var(--c2)"/><circle cx="19" cy="8" r="1.4" fill="#fff" opacity=".7"/></g><rect x="11.1" y="4.5" width="1.8" height="14.5" rx=".9" fill="#3b2a26"/><path d="M12 5.5 L9.6 1.6 M12 5.5 L14.4 1.6" stroke="#3b2a26" stroke-width=".7" stroke-linecap="round" fill="none"/></svg>';
  var bflies = [], mx = -999, my = -999, TAU = Math.PI * 2;
  window.addEventListener('pointermove', function (e) { mx = e.clientX; my = e.clientY; }, { passive: true });
  if (!reduced) {
    [['#f08a4b', '#f6c453'], ['#5f9fe6', '#b9d8f7'], ['#e57fa8', '#f6b6cf']].forEach(function (c, i) {
      var b = el('span', 'bfly', BF_SVG), sz = 14 + i * 2;
      b.style.cssText = '--c1:' + c[0] + ';--c2:' + c[1] + ';--f:' + (0.22 + i * 0.03) + 's;width:' + sz + 'px;height:' + sz + 'px';
      flutter.appendChild(b);
      bflies.push({ el: b, x: Math.random() * window.innerWidth, y: window.innerHeight * (0.2 + Math.random() * 0.6), h: Math.random() * TAU, s: 0.8 + Math.random() * 0.5, p: Math.random() * 100, glEnd: 0 });
    });
    var bl = performance.now();
    (function bloop(t) {
      var dt = Math.min(48, t - bl) / 16.7; bl = t;
      if (!document.hidden && !root.classList.contains('night')) {
        var vw = window.innerWidth, vh = window.innerHeight;
        bflies.forEach(function (o) {
          o.p += dt * 0.012;
          o.h = (((o.h + (Math.sin(o.p * 1.3) * 0.04 + Math.sin(o.p * 0.41) * 0.035) * dt) % TAU) + TAU) % TAU;
          var steer = null, near = Math.hypot(o.x - mx, o.y - my) < 110;
          if (o.x < 30 || o.x > vw - 30 || o.y < 30 || o.y > vh - 30) steer = Math.atan2(vh / 2 - o.y, vw / 2 - o.x);
          if (near) steer = Math.atan2(o.y - my, o.x - mx);
          if (steer !== null) o.h += ((((steer - o.h + Math.PI * 3) % TAU) - Math.PI)) * 0.06 * dt;
          if (t > o.glEnd && Math.random() < 0.003 * dt) { o.glEnd = t + 900; o.el.classList.add('glide'); }
          else if (o.glEnd && t > o.glEnd) { o.glEnd = 0; o.el.classList.remove('glide'); }
          var sp = o.s * (1 + Math.sin(o.p * 2.6) * 0.5) * (o.glEnd ? 0.45 : 1) * (near ? 2.2 : 1);
          o.x += Math.cos(o.h) * sp * dt; o.y += (Math.sin(o.h) * sp + Math.sin(o.p * 6) * 0.3) * dt;
          o.el.style.transform = 'translate3d(' + o.x.toFixed(1) + 'px,' + o.y.toFixed(1) + 'px,0) rotate(' + (o.h * 57.2958 + 90).toFixed(0) + 'deg)';
        });
      }
      window.requestAnimationFrame(bloop);
    })(bl);
  }

  // ---- Chuyển cảnh ngày/đêm ----
  var flash = el('div', 'sky-flash'); document.body.appendChild(flash);
  function swapTheme(on, manual, from) {
    var done = function () {
      if (!manual || !F()) return;
      burst(10);
      say(on ? pick(['Đêm rồi! Sao lên kìa ✨', 'Tối rồi, đom đóm vào ca đêm!']) : pick(['Trời sáng rồi! Cà phê đâu?', 'Nắng lên rồi, bướm ra chơi kìa!']), on ? 'pop-cat' : 'quay', 3200);
    };
    if (reduced) { setNight(on, manual); done(); return; }
    if (document.startViewTransition && from) {
      var r = from.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      var rad = Math.ceil(Math.hypot(Math.max(cx, window.innerWidth - cx), Math.max(cy, window.innerHeight - cy)));
      var vt = document.startViewTransition(function () { setNight(on, manual); });
      vt.ready.then(function () {
        root.animate({ clipPath: ['circle(0px at ' + cx + 'px ' + cy + 'px)', 'circle(' + rad + 'px at ' + cx + 'px ' + cy + 'px)'] },
          { duration: 950, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' });
      }).catch(function () {});
      vt.finished.then(done, done);
    } else {
      flash.className = 'sky-flash on' + (on ? '' : ' day');
      window.setTimeout(function () { setNight(on, manual); flash.classList.remove('on'); done(); }, 400);
    }
  }
  // Chưa chọn tay thì tự đổi ngày/đêm đúng giờ ngay cả khi đang mở trang
  window.setInterval(function () {
    if (load('night', null) !== null) return;
    var hh = new Date().getHours(), want = hh >= 19 || hh < 5;
    if (want !== root.classList.contains('night')) swapTheme(want, false, nightBtn);
  }, 60000);

  // ---- Tour ----
  var touring = false;
  var TOUR = [['top', 'Đây là chủ nhà. Trông hiền nhưng code dữ lắm.'], ['about', 'Sở thích, kỹ năng, mục tiêu… mà không có mục “ngủ”. Đáng ngờ!'],
    ['projects', 'Ba ý tưởng game, một cái chơi thử được. Đỉnh của chóp!'], ['contact', 'Hết tour! Nhớ bấm GitHub nha, tip cho hướng dẫn viên là một con cá.']];
  function tour(step) {
    var f = F(); if (!f) return;
    touring = true;
    if (step >= TOUR.length) { touring = false; say('Cảm ơn đã đi tour cùng tớ ✨', 'quay', 3200); award('tour'); return; }
    var target = document.getElementById(TOUR[step][0]);
    if (target) target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    window.setTimeout(function () {
      f.flyTo(window.innerWidth * (step % 2 ? 0.74 : 0.8), window.innerHeight * 0.5, function () {
        say(TOUR[step][1], step === 2 ? 'vui' : 'suy-tu', 3600);
        window.setTimeout(function () { tour(step + 1); }, 4000);
      });
    }, reduced ? 100 : 900);
  }

  // ---- Hỏi tinh linh (offline, theo từ khóa) ----
  var ask = panel('ask', '<h3>Hỏi tinh linh</h3><div class="ask-log" aria-live="polite"><p>Hỏi tớ về “dự án”, “game”, “sở thích” hoặc “liên hệ” nhé!</p></div><div class="ask-row"><input type="text" maxlength="80" aria-label="Câu hỏi" placeholder="Gõ câu hỏi…"><button type="button">Gửi</button></div>');
  var KB = [
    [['truong', 'dai nam', 'hoc o dau', 'nam may', 'nam nhat', 'sinh vien', 'nganh'], 'Chủ nhà là sinh viên năm nhất ngành Công nghệ thông tin tại Đại học Đại Nam.'],
    [['ky nang', 'biet gi', 'lam duoc gi', 'skill', 'vpn', 'ping', 'lap trinh', 'mang may'], 'Kỹ năng hiện có: lập trình Web cơ bản, kiến thức máy tính và mạng, từng thực hành kết nối VPN và kiểm tra mạng bằng Ping, biết lên ý tưởng cơ chế game và tự học qua hướng dẫn.'],
    [['muc tieu', 'tuong lai', 'uoc mo', 'dinh huong', 'sau nay', 'kiem tien', 'thu nhap'], 'Mục tiêu của chủ nhà: nâng cao kỹ năng lập trình, học thêm công nghệ game, tự hoàn thiện một game của riêng mình và làm sản phẩm có người dùng thật, nếu được thì tạo thu nhập từ đó.'],
    [['ban sung', 'hanh dong', 'shooter', '2d'], 'Game bắn súng 2D mới ở giai đoạn ý tưởng hành động, chưa có chi tiết để khoe đâu!'],
    [['du an', 'project', 'nitro', 'avatar', 'parade', 'lai xe', 'dua xe'], 'Cậu ấy có ba ý tưởng game: AVATAR PARADE (Roblox × TikTok LIVE), NITRO DASH (đua xe vô tận, chơi thử ngay ở mục Dự án) và một game bắn súng 2D.'],
    [['game', 'roblox', 'studio'], 'Chủ nhà mê làm game, nhất là Roblox Studio: nghĩ luật chơi, dựng thế giới và tạo tương tác.'],
    [['so thich', 'thich', 'dam me'], 'Sáu thứ cậu ấy mê: phát triển game, Roblox Studio, TikTok LIVE, công nghệ, khởi nghiệp online và nghe nhạc.'],
    [['lien he', 'github', 'email', 'mail'], 'Liên hệ qua GitHub: github.com/duong-dquest. Email thì chưa có, đừng hỏi khó tớ.'],
    [['la ai', 'ten', 'duong', 'gioi thieu'], 'Chủ nhà là Nguyễn Bình Dương, sinh viên Công nghệ Thông tin.'],
    [['tuoi', 'bao nhieu', 'luong', 'dia chi', 'so dien thoai'], 'Mấy chuyện đó tớ không biết và cũng không dám bịa. Hỏi chủ nhà qua GitHub nha!'],
    [['tinh linh', 'meo', 'ban la', 'may la'], 'Tớ là tinh linh AI, nghề chính lấp lánh, nghề phụ ăn cá.'],
    [['chao', 'hello'], 'Chào cậu! Hôm nay muốn bắt tớ hay muốn hỏi tớ?']
  ];
  var plain = function (s) { return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd'); };
  function reply(q) {
    var n = plain(q), r = 'Câu đó khó quá, tớ chỉ biết về chủ nhà thôi. Thử hỏi “dự án”, “game” hoặc “liên hệ” nhé!';
    KB.some(function (row) { return row[0].some(function (k) { if (n.indexOf(k) >= 0) { r = row[1]; return true; } }); });
    return r;
  }
  var askInput = ask.querySelector('input'), askLog = ask.querySelector('.ask-log');
  function sendAsk() {
    var q = askInput.value.trim(); if (!q) return;
    askInput.value = '';
    askLog.appendChild(el('p', 'me')).textContent = q;
    var a = reply(q); askLog.appendChild(el('p')).textContent = a;
    askLog.scrollTop = askLog.scrollHeight; meow(); award('ask');
    var f = F(); if (f) f.mood('vui', 2200);
  }
  ask.querySelector('button').addEventListener('click', sendAsk);
  askInput.addEventListener('keydown', function (e) { if (e.key === 'Enter') sendAsk(); });

  // ---- Easter egg ----
  function rainbow() { root.classList.add('rainbow'); window.setTimeout(function () { root.classList.remove('rainbow'); }, 9000); say('Konami code! Cậu đúng là dân chơi!', 'quay', 4000); burst(18); award('egg'); }
  function sigma() { root.classList.add('sigma'); window.setTimeout(function () { root.classList.remove('sigma'); }, 7000); say('Sigma mode: BẬT. Không cảm xúc, chỉ lấp lánh.', 'sigma', 4200); award('egg'); }
  function fishRain() {
    if (reduced) return;
    for (var i = 0; i < 24; i++) {
      var f = el('span', 'fish', '🐟');
      f.style.cssText = 'left:' + (Math.random() * 96).toFixed(0) + '%;--t:' + (2 + Math.random() * 2).toFixed(1) + 's;--r:' + Math.round(Math.random() * 540 - 270) + 'deg;animation-delay:' + (Math.random() * 0.9).toFixed(2) + 's';
      f.addEventListener('animationend', function () { this.remove(); });
      document.body.appendChild(f);
    }
    say('MƯA CÁ! Tớ mơ cả đời rồi!', 'dang-an', 3600); award('egg');
  }
  var seq = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], pos = 0, typed = '';
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { Object.keys(panels).forEach(function (k) { panels[k].hidden = true; }); if (!restoreBtn.hidden) restore(); return; }
    if (/INPUT|TEXTAREA/.test(e.target.tagName)) return;
    pos = e.keyCode === seq[pos] ? pos + 1 : (e.keyCode === seq[0] ? 1 : 0);
    if (pos === seq.length) { pos = 0; rainbow(); }
    typed = (typed + (e.key || '')).toLowerCase().slice(-5);
    if (typed === 'sigma') { typed = ''; sigma(); }
  });
  document.addEventListener('dblclick', function (e) {
    if (e.target.closest('a, button, input, canvas, .panel, .dock, .sprite-fairy, summary')) return;
    fishRain();
  });
  document.addEventListener('click', function () { pop(); });

  // ---- Nút Đừng bấm ----
  var restoreBtn = el('button', 'restore-btn', 'Khôi phục trang'); restoreBtn.type = 'button'; restoreBtn.hidden = true; document.body.appendChild(restoreBtn);
  function chaosTargets() { return [].slice.call(document.querySelectorAll('.interest-card, .project-card, .contact')); }
  function chaos() {
    award('dont'); restoreBtn.hidden = false; restoreBtn.focus({ preventScroll: true });
    root.classList.add('chaos'); window.setTimeout(function () { root.classList.remove('chaos'); }, 3600);
    say('Tớ đã bảo ĐỪNG BẤM mà!', 'tuc-gian', 2600); meow();
    var cards = [].slice.call(document.querySelectorAll('.interest-card')), victim = pick(cards);
    victim.scrollIntoView({ block: 'center', behavior: reduced ? 'auto' : 'smooth' });
    window.setTimeout(function () {
      var r = victim.getBoundingClientRect();
      F().flyTo(r.right - 24, r.top + 30, function () { victim.classList.add('nibbled'); say('Nyam nyam! Thẻ này vị… emoji.', 'dang-an', 3200); tone(200, 90, 0.2, 'square'); });
    }, 800);
    window.setTimeout(function () {
      chaosTargets().forEach(function (c) {
        c.style.setProperty('--fx', Math.round(Math.random() * 30 - 15) + 'px');
        c.style.setProperty('--fy', Math.round(30 + Math.random() * 90) + 'px');
        c.style.setProperty('--fr', (Math.random() * 12 - 6).toFixed(1) + 'deg');
        c.classList.add('fallen');
      });
    }, 2000);
  }
  function restore() {
    root.classList.remove('chaos'); restoreBtn.hidden = true;
    chaosTargets().forEach(function (c) { c.classList.remove('fallen', 'nibbled'); });
    say('Phù, trang sạch bong. Tớ không làm gì hết nha.', 'vui', 3200);
  }
  restoreBtn.addEventListener('click', restore);

  // ---- Bầy tinh linh ----
  var clones = [];
  function swarm() {
    if (reduced || clones.length || !F()) return;
    award('swarm'); say('Tớ nhân bản rồi! Bắt hết đi nào!', 'quay', 3600);
    ['vui', 'siuuu', 'meme-sigma'].forEach(function (m, i) {
      var im = el('img', 'clone'), c = F().center(), o = { el: im, x: c.cx, y: c.cy };
      im.src = 'assets/fairy/' + m + '.webp?v=23'; im.alt = ''; im.draggable = false; document.body.appendChild(im); clones.push(o);
      im.addEventListener('click', function (e) {
        e.stopPropagation(); F().spark(o.x, o.y, 8, 60); pop(); im.remove(); clones.splice(clones.indexOf(o), 1);
        if (!clones.length) say('Hết bầy rồi… buồn ghê.', 'buon-ba', 3000);
      });
    });
    (function loop(t) {
      if (!clones.length) return;
      var lead = F().center();
      clones.forEach(function (o, k) {
        var tx = (k ? clones[k - 1].x : lead.cx) + Math.cos(t / 700 + k * 2.1) * 80, ty = (k ? clones[k - 1].y : lead.cy) + Math.sin(t / 600 + k * 2.1) * 50;
        o.x += (tx - o.x) * 0.03; o.y += (ty - o.y) * 0.03;
        o.el.style.transform = 'translate3d(' + Math.round(o.x - 45) + 'px,' + Math.round(o.y - 55) + 'px,0)';
      });
      window.requestAnimationFrame(loop);
    })(0);
  }

  // ---- Sự kiện từ tinh linh và game ----
  var projOpen = {};
  document.querySelectorAll('.project-details').forEach(function (d, i) {
    d.addEventListener('toggle', function () { if (d.open) { projOpen[i] = 1; if (projOpen[0] && projOpen[1]) award('projects'); } });
  });
  document.addEventListener('fairy', function (e) {
    var t = e.detail.type, n = e.detail.n;
    if (t === 'catch') { meow(); if (n === 10) award('catch10'); if (n === 15) swarm(); }
    if (t === 'wake') award('wake');
    if (t === 'treat') { award('treat'); tone(300, 160, 0.12, 'square'); }
  });
  document.addEventListener('nitro', function (e) {
    var t = e.detail.type;
    if (t === 'start') { award('play'); say('Lái xe cẩn thận! Tớ ngồi ghế phụ nha.', 'vui', 2600); }
    if (t === 'score') { award('score'); say('500 điểm! Né như ninja luôn!', 'quay', 3200); }
    if (t === 'over') say(pick(['Tông rồi! Tớ gọi cảnh sát đây.', 'Bằng lái cậu để ở đâu rồi?', 'Lần sau né sớm hơn nha, xe có cảm xúc đó!']), 'buon-ba', 3400);
    if (t === 'record') { say('KỶ LỤC MỚI! Gét gô!', 'quay', 3600); burst(14); }
  });

  // ---- Phản ứng theo ngữ cảnh ----
  var ly = window.scrollY, lt = performance.now(), cd = 0;
  window.addEventListener('scroll', function () {
    var n = performance.now(), v = Math.abs(window.scrollY - ly) / Math.max(1, n - lt);
    ly = window.scrollY; lt = n;
    if (v > 3.2 && n > cd && !touring) { cd = n + 9000; say('Chậm thôi! Tớ say xe rồi…', 'so-hai', 2800); }
  }, { passive: true });
  var hoverCd = 0;
  document.querySelectorAll('.interest-card').forEach(function (c) {
    var h = c.querySelector('h3').textContent;
    var line = h === 'Nghe nhạc' ? ['Có nhạc kìa! Quẩy thôi!', 'quay'] : h === 'Phát triển game' ? ['Game dev đây! Nhớ chơi thử NITRO DASH nha.', 'vui'] : null;
    if (line) c.addEventListener('mouseenter', function () {
      var n = performance.now(); if (n < hoverCd || touring) return; hoverCd = n + 15000;
      say(line[0], line[1], 3000); if (line[1] === 'quay' && F()) F().trick('spin', 900);
    });
  });
  if (hour >= 23 || hour < 5) window.setTimeout(function () { say('Khuya rồi mà còn thức? Ngáp… 😴', 'pop-cat', 4200); }, 9000);
  var oldTitle = document.title;
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { oldTitle = document.title; document.title = 'Tinh linh nhớ cậu 🥺'; }
    else { document.title = oldTitle; say('Cậu về rồi! Tớ đợi mòn cả cánh!', 'vui', 3200); }
  });

  // ---- Dock ----
  dock.addEventListener('click', function (e) {
    var b = e.target.closest('[data-dock]'); if (!b) return;
    var k = b.getAttribute('data-dock');
    if (k === 'badges' || k === 'ask') { toggle(k); if (k === 'ask' && !panels.ask.hidden) askInput.focus(); }
    else if (k === 'tour') { Object.keys(panels).forEach(function (p) { panels[p].hidden = true; }); if (!touring) tour(0); }
    else if (k === 'night') swapTheme(!root.classList.contains('night'), true, b);
    else if (k === 'sound') {
      snd.on = !snd.on; save('sound', snd.on);
      b.setAttribute('aria-pressed', String(snd.on)); b.textContent = snd.on ? '🔊' : '🔇';
      if (snd.on) meow();
    }
    else if (k === 'chaos') chaos();
  });
  var sb = dock.querySelector('[data-dock="sound"]');
  sb.setAttribute('aria-pressed', String(snd.on)); sb.textContent = snd.on ? '🔊' : '🔇';
})();
