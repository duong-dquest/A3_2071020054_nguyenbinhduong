(function () {
  var fairy = document.querySelector('.sprite-fairy');
  var field = document.querySelector('.star-field');
  var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  var reduced = mq ? mq.matches : false;
  if (mq) {
    var onMq = function (e) { reduced = e.matches; };
    if (mq.addEventListener) mq.addEventListener('change', onMq); else if (mq.addListener) mq.addListener(onMq);
  }
  var rand = function (a, b) { return a + Math.random() * (b - a); };
  var pick = function (list) { return list[Math.floor(Math.random() * list.length)]; };
  var COLORS = ['#f3c969', '#fff3b8', '#f2a285', '#9fd3b0', '#bcd9f5'];

  // ---- Hạt sáng ----
  function spark(x, y, n, spread) {
    if (reduced || document.querySelectorAll('.spark').length > 60) return;
    for (var i = 0; i < n; i++) {
      var s = document.createElement('span');
      var a = Math.random() * Math.PI * 2, d = rand(spread * 0.4, spread);
      s.className = 'spark';
      s.textContent = Math.random() < 0.5 ? '✦' : '✧';
      s.style.setProperty('--x', Math.round(x) + 'px');
      s.style.setProperty('--y', Math.round(y) + 'px');
      s.style.setProperty('--dx', Math.round(Math.cos(a) * d) + 'px');
      s.style.setProperty('--dy', Math.round(Math.sin(a) * d + 12) + 'px');
      s.style.setProperty('--sz', Math.round(rand(10, 20)) + 'px');
      s.style.setProperty('--rot', Math.round(rand(-200, 200)) + 'deg');
      s.style.setProperty('--t', Math.round(rand(700, 1200)) + 'ms');
      s.style.setProperty('--c', pick(COLORS));
      s.addEventListener('animationend', function () { this.remove(); });
      document.body.appendChild(s);
    }
  }

  // ---- Sao nền ngẫu nhiên, sao băng, vệt sáng theo chuột ----
  if (field) {
    var count = window.innerWidth < 600 ? 16 : 30;
    for (var i = 0; i < count; i++) {
      var t = document.createElement('span');
      t.className = 'twinkle';
      t.style.left = rand(1, 99).toFixed(1) + '%';
      t.style.top = rand(1, 99).toFixed(1) + '%';
      t.style.setProperty('--s', rand(2, 4.2).toFixed(1) + 'px');
      t.style.setProperty('--d', rand(2.8, 6.5).toFixed(1) + 's');
      t.style.setProperty('--delay', rand(0, 5).toFixed(1) + 's');
      field.appendChild(t);
    }
    var shooter = document.createElement('span');
    shooter.className = 'shooting-star';
    field.appendChild(shooter);
    (function nextShot() {
      window.setTimeout(function () {
        if (!reduced && !document.hidden) {
          shooter.classList.remove('go');
          shooter.style.setProperty('--sx', rand(45, 95).toFixed(0) + '%');
          shooter.style.setProperty('--sy', rand(2, 35).toFixed(0) + '%');
          void shooter.offsetWidth;
          shooter.classList.add('go');
        }
        nextShot();
      }, rand(8000, 15000));
    })();
  }

  var lastTrail = 0;
  window.addEventListener('pointermove', function (e) {
    if (e.pointerType !== 'mouse' || reduced) return;
    var now = performance.now();
    if (now - lastTrail < 60) return;
    lastTrail = now;
    spark(e.clientX, e.clientY, 1, 26);
  }, { passive: true });

  // ---- Thẻ sở thích: đốm sáng theo con trỏ ----
  document.querySelectorAll('.interest-card').forEach(function (card) {
    card.addEventListener('pointermove', function (e) {
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  if (!fairy) return;

  // ---- Tinh linh ----
  var art = fairy.querySelector('.fairy-art');
  var bubble = fairy.querySelector('[data-fairy-message]');
  var BASE = 'assets/fairy/';
  ['idle', 'vui', 'buon-ba', 'tuc-gian', 'buon-ngu', 'ngac-nhien', 'dang-an',
   'suy-tu', 'so-hai', 'sigma', 'doi', 'quay'].forEach(function (n) { new Image().src = BASE + n + '.webp'; });

  var W = fairy.offsetWidth, H = fairy.offsetHeight;
  var x = window.innerWidth - W - 8, y = window.innerHeight - H - 8;
  var tx = x, ty = y, vx = 0, vy = 0, face = 1;
  var mode = 'wander'; // wander | held | throw | landed | goto | sleep
  var restUntil = performance.now() + 1500;
  var lastActive = Date.now(), lastTrail2 = 0, lastDodge = 0, catches = 0, lastReaction = -1;
  var moodTimer, talkTimer, trickTimer, treat = null, treatTimer;

  function bounds() {
    return { minX: -W * 0.18, maxX: window.innerWidth - W * 0.82, minY: 0, maxY: window.innerHeight - H + 4 };
  }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function setMood(name, ms) {
    art.src = BASE + name + '.webp';
    window.clearTimeout(moodTimer);
    if (ms) moodTimer = window.setTimeout(function () { art.src = BASE + 'idle.webp'; }, ms);
  }
  function say(text, ms) {
    bubble.textContent = text;
    fairy.classList.toggle('is-bubble-left', x + W / 2 > window.innerWidth / 2);
    fairy.classList.add('is-talking');
    window.clearTimeout(talkTimer);
    talkTimer = window.setTimeout(function () { fairy.classList.remove('is-talking'); }, ms || 3200);
  }
  function trick(name, ms) {
    fairy.setAttribute('data-trick', name);
    window.clearTimeout(trickTimer);
    trickTimer = window.setTimeout(function () { fairy.removeAttribute('data-trick'); }, ms || 900);
  }
  function center() { return { cx: x + W / 2, cy: y + H * 0.55 }; }
  function wanderTarget() {
    var b = bounds();
    tx = clamp(x + rand(-1, 1) * Math.min(340, window.innerWidth * 0.32), b.minX, b.maxX);
    ty = clamp(y + rand(-1, 1) * Math.min(240, window.innerHeight * 0.28), b.minY + 70, b.maxY);
  }
  function rest(ms) { restUntil = performance.now() + ms; }
  function flee(reason) {
    if (reduced) return;
    wanderTarget();
    var b = bounds();
    tx = clamp(x + (Math.random() < 0.5 ? -1 : 1) * rand(160, 320), b.minX, b.maxX);
    mode = 'wander';
    rest(0);
    if (reason) say(reason, 2600);
  }

  // Các phản ứng khi bấm hoặc chạm
  var LINES = {
    held: ['Á! Bắt cóc tinh linh à?', 'Thả ra! Tớ chưa kịp lưu game!', 'Ê ê! Tớ chưa đồng ý bị bắt đâu!', 'Lag thật sự, tớ bị kéo đi đâu đây?'],
    sulk: ['Thả tớ ra, tớ gọi công an đó!', 'Giữ lâu vậy, tưởng tớ là phần thưởng à?', 'Tay cậu mỏi chưa? Tớ mỏi rồi đó.'],
    fly: ['Houston, tớ bay rồi nè!', 'Cất cánh! Nhớ trả phí hành lý nha!', 'Quá tốc độ cho phép rồi cậu ơi!'],
    landed: ['Hạ cánh hơi mạnh, 0/10 không khuyến khích.', 'Trái đất tròn thật, tớ vừa kiểm chứng.', 'Chóng mặt quá… xoay xoay như đang loading…'],
    gentle: ['Thả nhẹ vậy, tớ chấm 5 sao đó!', 'Tử tế ghê. Chắc là fan của tớ.'],
    treat: ['Cá kìa! Tớ tới ngay!', 'Ăn là chân ái. Đợi tớ!', 'Có cá là có tình yêu. Bay thôi!'],
    eat: ['Ngon quá! Cảm ơn cậu nha ✨', 'Ngon, bổ, rẻ… à mà cá này miễn phí.', 'Xin thêm một con nữa được không? Hỏi cho vui thôi.'],
    wake: ['Á! Ai đánh thức tớ dậy vậy?', 'Ủa, cậu về rồi hả? Tớ mới ngủ có tí mà…'],
    sleep: ['Zzz… năm phút nữa thôi…', 'Zzz… tớ đang tải lại năng lượng…'],
    flee: ['Tớ chạy trước đây! Chạy đi chờ chi?', 'Đuổi được tớ thì tớ gọi cậu là sếp!', 'Tớ chuồn đây, bye bye!'],
    dodge: ['Bắt tớ nếu cậu giỏi nè!', 'Hụt rồi nhé! Skill issue~', 'Chậm quá, nâng cấp chuột đi cậu!']
  };
  var REACTIONS = [
    { m: 'vui', t: 'Chạm gì mà chạm, tớ có phải nút Like đâu!', k: 'hop' },
    { m: 'tuc-gian', t: 'Bấm nữa là tớ report cậu đó!', k: 'shake' },
    { m: 'sigma', t: 'Sigma không nói nhiều. Sigma chỉ lấp lánh.', k: 'pop' },
    { m: 'doi', t: 'Dỗi. Dỗ đi rồi tính.' },
    { m: 'suy-tu', t: 'Hmm… tớ nghĩ cậu nên đi code tiếp đi.' },
    { m: 'quay', t: 'Gét gô! Quẩy lên nào!', k: 'spin' },
    { m: 'ngac-nhien', t: 'Ủa alo? Ai cho cậu bấm tớ vậy?', k: 'hop' },
    { m: 'buon-ba', t: 'Bấm tớ mà không bấm Follow luôn à…' },
    { m: 'vui', t: 'Đỉnh của chóp! À nhầm, đỉnh của tớ thôi.', k: 'hop' },
    { m: 'suy-tu', t: 'Tớ không biết, trên máy tớ vẫn chạy mà!' },
    { m: 'sigma', t: '404: Tinh linh bận. Vui lòng thử lại sau.', k: 'pop' },
    { m: 'tuc-gian', t: 'Tớ không phải bug, tớ là feature!', k: 'shake' }
  ];
  function react(fromCatch) {
    var i;
    do { i = Math.floor(Math.random() * REACTIONS.length); } while (i === lastReaction);
    lastReaction = i;
    var r = REACTIONS[i], c = center();
    catches++;
    if (catches % 5 === 0) r = { m: 'quay', t: 'Bắt được ' + catches + ' lần rồi. Cậu rảnh dữ vậy trời!', k: 'spin' };
    setMood(r.m, 3200);
    say(r.t, 3200);
    if (r.k) trick(r.k, 900);
    spark(c.cx, c.cy, r.m === 'quay' ? 14 : 8, 80);
    if (!fromCatch && Math.random() < 0.55) window.setTimeout(function () { flee(pick(LINES.flee)); }, 1100);
  }

  // Hoạt động ngẫu nhiên khi rảnh
  var IDLE = [
    { m: 'vui', t: 'Hôm nay code được bao nhiêu dòng rồi?' },
    { m: 'suy-tu', t: 'Tắt đi bật lại chưa? Tớ hỏi cho chắc.' },
    { m: 'quay', t: 'Biểu diễn nè! Nhớ thưởng vài đồng xu nha.', k: 'spin' },
    { m: 'dang-an', t: 'Đói quá. Có cá nướng không, hay chỉ có bug?' },
    { m: 'sigma', t: 'Sigma thật sự: commit xong mới đi ngủ.', k: 'pop' },
    { m: 'suy-tu', t: 'Cuộn mãi chưa thấy nút liên hệ à? Nó ở cuối trang nè.' },
    { m: 'doi', t: 'Không ai bấm tớ. Tớ không dỗi. Tớ chỉ dỗi tí thôi.' },
    { m: 'ngac-nhien', t: 'Cuộn xuống xem game lái xe chưa? Né nhanh nha!', k: 'hop' },
    { m: 'suy-tu', t: 'Deadline nào chưa nộp thì nhớ nộp nha.' }
  ];
  var firstHint = true;
  (function scheduleIdle() {
    window.setTimeout(function () {
      if (mode === 'wander') {
        if (firstHint) {
          firstHint = false;
          setMood('vui', 3800);
          say('Rảnh thì kéo tớ đi dạo. Bấm vào chỗ trống là có cá cho tớ!', 4600);
        } else {
          var a = pick(IDLE), c = center();
          setMood(a.m, 3200); say(a.t, 3200);
          if (a.k) trick(a.k, 900);
          spark(c.cx, c.cy, 6, 70);
        }
      }
      scheduleIdle();
    }, firstHint ? 4500 : rand(11000, 18000));
  })();

  // Ngủ khi không ai chơi, thức khi có người quay lại
  function wake() {
    if (mode !== 'sleep') return;
    mode = 'wander'; wanderTarget(); rest(800);
    setMood('ngac-nhien', 2200); say(pick(LINES.wake), 2800); trick('hop', 800);
  }
  function activity() { lastActive = Date.now(); wake(); }
  ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(function (ev) {
    window.addEventListener(ev, activity, { passive: true });
  });
  window.setInterval(function () {
    if (mode === 'wander' && Date.now() - lastActive > 30000 && !reduced) {
      var b = bounds();
      mode = 'sleep'; tx = b.maxX - 10; ty = b.maxY;
      setMood('buon-ngu'); say(pick(LINES.sleep), 4000);
    }
  }, 2000);

  // Thả cá: bấm vào chỗ trống để tinh linh bay tới ăn
  document.addEventListener('click', function (e) {
    if (reduced || e.target.closest('a, button, summary, input, textarea, nav, .sprite-fairy')) return;
    var sel = window.getSelection && window.getSelection();
    if (sel && !sel.isCollapsed) return;
    if (mode === 'held' || mode === 'throw') return;
    if (treat) treat.remove();
    treat = document.createElement('span');
    treat.className = 'treat';
    treat.textContent = '🐟';
    treat.style.setProperty('--x', (e.clientX - 13) + 'px');
    treat.style.setProperty('--y', (e.clientY - 13) + 'px');
    document.body.appendChild(treat);
    var b = bounds();
    tx = clamp(e.clientX - W / 2, b.minX, b.maxX);
    ty = clamp(e.clientY - H * 0.6, b.minY, b.maxY);
    mode = 'goto'; face = tx < x ? -1 : 1;
    setMood('vui', 2000); say(pick(LINES.treat), 2200);
    window.clearTimeout(treatTimer);
    treatTimer = window.setTimeout(function () { if (mode === 'goto') mode = 'wander'; if (treat) { treat.remove(); treat = null; } }, 7000);
  });
  function eatTreat() {
    var c = center();
    if (treat) { treat.remove(); treat = null; }
    window.clearTimeout(treatTimer);
    mode = 'wander'; rest(2800);
    setMood('dang-an', 2800); say(pick(LINES.eat), 2800); trick('pop', 600);
    spark(c.cx, c.cy, 12, 90);
  }

  // ---- Kéo, bắt và ném ----
  var down = null, trackX = 0, trackY = 0, heldAt = 0;
  fairy.addEventListener('pointerdown', function (e) {
    if (e.button > 0) return;
    down = { id: e.pointerId, sx: e.clientX, sy: e.clientY, ox: e.clientX - x, oy: e.clientY - y, moved: false };
    trackX = e.clientX; trackY = e.clientY; vx = 0; vy = 0;
    try { fairy.setPointerCapture(e.pointerId); } catch (err) {}
    e.preventDefault();
  });
  fairy.addEventListener('pointermove', function (e) {
    if (!down || e.pointerId !== down.id) return;
    if (!down.moved && Math.hypot(e.clientX - down.sx, e.clientY - down.sy) < 6) return;
    if (!down.moved) {
      down.moved = true; mode = 'held'; heldAt = performance.now(); catches++;
      fairy.classList.add('is-held');
      setMood('so-hai'); say(catches % 5 === 0 ? 'Lần thứ ' + catches + '? Cậu rảnh dữ vậy trời!' : pick(LINES.held), 2600);
      spark(x + W / 2, y + H / 2, 8, 70);
    }
    var b = bounds();
    var nx = clamp(e.clientX - down.ox, b.minX, b.maxX), ny = clamp(e.clientY - down.oy, b.minY, b.maxY);
    vx = vx * 0.6 + (nx - x) * 0.4; vy = vy * 0.6 + (ny - y) * 0.4;
    if (Math.abs(nx - x) > 1) face = nx < x ? -1 : 1;
    x = nx; y = ny;
    if (performance.now() - heldAt > 2200 && art.src.indexOf('doi') < 0) {
      setMood('doi'); say(pick(LINES.sulk), 2400);
    }
  });
  function release(e) {
    if (!down || e.pointerId !== down.id) return;
    var wasDrag = down.moved;
    down = null;
    fairy.classList.remove('is-held');
    activity();
    if (!wasDrag) { react(true); mode = 'wander'; rest(1200); return; }
    if (!reduced && Math.hypot(vx, vy) > 7) {
      vx = clamp(vx, -30, 30); vy = clamp(vy, -30, 30);
      mode = 'throw';
      setMood('ngac-nhien', 1800); say(pick(LINES.fly), 2200); trick('spin', 900);
    } else {
      mode = 'wander'; wanderTarget(); rest(1800);
      setMood('vui', 2400); say(pick(LINES.gentle), 2600);
    }
  }
  fairy.addEventListener('pointerup', release);
  fairy.addEventListener('pointercancel', release);
  // Bàn phím: Enter hoặc Space cũng "bắt" được tinh linh
  fairy.addEventListener('click', function (e) { if (e.detail === 0) { react(false); activity(); } });

  // Né con trỏ thỉnh thoảng để việc bắt có chút thử thách
  window.addEventListener('pointermove', function (e) {
    if (e.pointerType !== 'mouse' || reduced || mode !== 'wander') return;
    var c = center(), now = performance.now();
    if (now - lastDodge > 5000 && Math.hypot(e.clientX - c.cx, e.clientY - c.cy) < 70 && Math.random() < 0.3) {
      lastDodge = now;
      setMood('ngac-nhien', 1800); trick('hop', 700);
      flee(pick(LINES.dodge));
    }
  }, { passive: true });

  // ---- Vòng chuyển động ----
  var last = performance.now();
  function frame(t) {
    var dt = Math.min(48, t - last) / 16.7; last = t;
    var b = bounds(), bob = 0;
    if (mode === 'throw') {
      vy += 0.45 * dt; x += vx * dt; y += vy * dt;
      if (x < b.minX) { x = b.minX; vx = Math.abs(vx) * 0.7; }
      if (x > b.maxX) { x = b.maxX; vx = -Math.abs(vx) * 0.7; }
      if (y < b.minY) { y = b.minY; vy = Math.abs(vy) * 0.6; }
      if (y >= b.maxY) {
        y = b.maxY; vy = -Math.abs(vy) * 0.55; vx *= 0.9;
        if (Math.abs(vy) < 2.2 && Math.abs(vx) < 1.2) {
          vx = 0; vy = 0; mode = 'landed';
          setMood('so-hai', 2000); say(pick(LINES.landed), 2600);
          window.setTimeout(function () { if (mode === 'landed') { mode = 'wander'; wanderTarget(); rest(600); } }, 2000);
        }
      }
      if (Math.abs(vx) > 1) face = vx < 0 ? -1 : 1;
    } else if (!reduced && (mode === 'wander' || mode === 'goto' || mode === 'sleep')) {
      var k = mode === 'goto' ? 0.07 : 0.02;
      var dx = tx - x, dy = ty - y, dist = Math.hypot(dx, dy);
      if (mode === 'wander' && dist < 8 && t > restUntil) { wanderTarget(); rest(rand(900, 2600)); }
      x += dx * k * dt; y += dy * k * dt;
      if (dist > 14 && Math.abs(dx) > 18) face = dx < 0 ? -1 : 1;
      if (mode === 'goto' && dist < 14) eatTreat();
      if (mode !== 'sleep') bob = Math.sin(t / 430) * 5;
      if (dist > 70 && t - lastTrail2 > 110) { lastTrail2 = t; spark(x + W / 2 - face * 18, y + H * 0.7, 1, 30); }
    }
    fairy.style.transform = 'translate3d(' + Math.round(x) + 'px,' + Math.round(y + bob) + 'px,0)';
    fairy.style.setProperty('--face', face);
    window.requestAnimationFrame(frame);
  }
  window.requestAnimationFrame(frame);

  window.addEventListener('resize', function () {
    W = fairy.offsetWidth; H = fairy.offsetHeight;
    var b = bounds();
    x = clamp(x, b.minX, b.maxX); y = clamp(y, b.minY, b.maxY);
    tx = clamp(tx, b.minX, b.maxX); ty = clamp(ty, b.minY, b.maxY);
  });
})();
