(function () {
  var box = document.querySelector('.game-panel');
  var openBtn = document.querySelector('[data-game-open]');
  if (!box || !openBtn) return;
  var cv = box.querySelector('canvas'), ctx = cv.getContext('2d');
  var hud = box.querySelector('.game-hud'), skinsEl = box.querySelector('.game-skins');
  var EN = window.LANG === 'en';
  function T(vi, en) { return EN ? en : vi; }
  var W = 360, H = 540, LX = [90, 180, 270], PY = 440;
  var SKINS = [['#d84a3a', T('Đỏ', 'Red'), 0], ['#4f9d69', T('Xanh lá', 'Green'), 100], ['#e8b93a', T('Vàng', 'Yellow'), 100], ['#3f79c4', T('Xanh dương', 'Blue'), 100], ['#e57fa8', T('Hồng', 'Pink'), 100], ['#2b2f33', T('Đen', 'Black'), 100]];
  var OB = ['🚗', '🏎️', '🚑', '🚒', '🚚'];
  var save = { coins: 0, best: 0, own: [0], sel: 0 };
  try { save = Object.assign(save, JSON.parse(localStorage.getItem('nitro') || '{}')); } catch (e) {}
  function persist() { try { localStorage.setItem('nitro', JSON.stringify(save)); } catch (e) {} }
  function emit(type, score) { document.dispatchEvent(new CustomEvent('nitro', { detail: { type: type, score: score || 0 } })); }
  function tone(a, b, d, w) { if (window.Sound) window.Sound.tone(a, b, d, w || 'square', 0.04); }

  var st, running = false, last = 0, over = false;
  function reset() {
    st = { lane: 1, x: LX[1], t: 0, dist: 0, speed: 4.2, hp: 3, shield: false, ents: [], spawn: 60, police: 0, coins: 0, flash: 0 };
    over = false;
  }
  function spawn() {
    var r = Math.random(), lane = Math.floor(Math.random() * 3), e = { x: LX[lane], y: -60, w: 44, h: 60 };
    if (r < 0.05) { e.k = 'shield'; e.ch = '🛡️'; }
    else if (r < 0.15) { e.k = 'heart'; e.ch = '❤️'; }
    else if (r < 0.45) { e.k = 'coin'; e.ch = '🪙'; e.w = 34; e.h = 34; }
    else if (r < 0.85) { e.k = 'car'; e.ch = OB[Math.floor(Math.random() * OB.length)]; }
    else { e.k = 'ped'; e.ch = '🚶'; e.w = 26; e.h = 40; e.dir = Math.random() < 0.5 ? 1 : -1; e.x = e.dir > 0 ? 36 : 324; }
    st.ents.push(e);
  }
  function hit(e) {
    if (e.k === 'coin') { st.coins += 10; tone(900, 1400, 0.08, 'sine'); return; }
    if (e.k === 'heart') { st.hp = Math.min(5, st.hp + 1); tone(500, 900, 0.15, 'sine'); return; }
    if (e.k === 'shield') { st.shield = true; tone(400, 800, 0.15, 'sine'); return; }
    if (st.shield) { st.shield = false; tone(300, 600, 0.12); return; }
    st.hp -= st.police > 0 ? 2 : 1; st.flash = 1; st.police = 15; tone(160, 50, 0.3, 'sawtooth');
    if (st.hp <= 0) finish();
  }
  function finish() {
    running = false; over = true; document.documentElement.classList.remove('playing');
    save.coins += st.coins;
    var sc = Math.floor(st.dist / 20), rec = sc > save.best;
    if (rec) save.best = sc;
    persist(); renderSkins(); emit('over', sc); if (rec && sc > 0) emit('record', sc);
    draw(); showHud();
  }
  function update(dt) {
    st.t += dt / 60;
    st.speed = Math.min(14, 4.2 + st.t * 0.14) * (st.police > 0 ? 1.12 : 1);
    st.dist += st.speed * dt;
    st.x += (LX[st.lane] - st.x) * 0.22 * dt;
    st.spawn -= st.speed * dt;
    if (st.spawn <= 0) { spawn(); st.spawn = 120 + Math.random() * 90 - Math.min(60, st.t * 1.2); }
    if (st.police > 0) st.police -= dt / 60;
    st.flash = Math.max(0, st.flash - 0.03 * dt);
    for (var i = st.ents.length - 1; i >= 0; i--) {
      var e = st.ents[i];
      e.y += st.speed * dt;
      if (e.k === 'ped') e.x += e.dir * 1.5 * dt;
      if (e.y > H + 60) { st.ents.splice(i, 1); continue; }
      if (Math.abs(e.x - st.x) < (e.w + 44) * 0.45 && Math.abs(e.y - PY) < (e.h + 70) * 0.45) {
        st.ents.splice(i, 1); hit(e); if (over) return;
      }
    }
  }
  function rr(x, y, w, h, r) { ctx.beginPath(); ctx.roundRect ? ctx.roundRect(x, y, w, h, r) : ctx.rect(x, y, w, h); ctx.fill(); }
  function draw() {
    ctx.fillStyle = '#3f4a43'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#6f9a62'; ctx.fillRect(0, 0, 20, H); ctx.fillRect(W - 20, 0, 20, H);
    ctx.fillStyle = 'rgba(255,255,255,.7)';
    var off = st ? (st.dist % 60) : 0;
    for (var l = 1; l < 3; l++) for (var y = -60; y < H; y += 60) ctx.fillRect(l * 90 + 45 - 2, y + off, 4, 28);
    if (!st) return;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    st.ents.forEach(function (e) { ctx.font = (e.k === 'coin' ? 30 : e.k === 'ped' ? 34 : 44) + 'px serif'; ctx.fillText(e.ch, e.x, e.y); });
    ctx.fillStyle = SKINS[save.sel][0]; rr(st.x - 21, PY - 36, 42, 72, 10);
    ctx.fillStyle = 'rgba(255,255,255,.75)'; rr(st.x - 15, PY - 22, 30, 16, 4); rr(st.x - 15, PY + 8, 30, 12, 4);
    ctx.fillStyle = '#111'; rr(st.x - 25, PY - 28, 6, 16, 2); rr(st.x + 19, PY - 28, 6, 16, 2); rr(st.x - 25, PY + 14, 6, 16, 2); rr(st.x + 19, PY + 14, 6, 16, 2);
    if (st.shield) { ctx.strokeStyle = 'rgba(120,200,255,.9)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(st.x, PY, 46, 0, 7); ctx.stroke(); }
    if (st.police > 0) {
      ctx.font = '40px serif'; ctx.fillText('🚓', st.x, 505);
      ctx.fillStyle = Math.floor(st.t * 6) % 2 ? 'rgba(255,40,40,.18)' : 'rgba(40,90,255,.18)'; ctx.fillRect(0, 0, W, H);
    }
    if (st.flash > 0) { ctx.fillStyle = 'rgba(255,0,0,' + st.flash * 0.45 + ')'; ctx.fillRect(0, 0, W, H); }
    if (!running) {
      ctx.fillStyle = 'rgba(20,30,24,.62)'; ctx.fillRect(0, 150, W, 200);
      ctx.fillStyle = '#fff'; ctx.font = '700 26px sans-serif';
      ctx.fillText(over ? T('Đâm hết máu rồi!', 'Out of health!') : 'NITRO DASH', W / 2, 205);
      ctx.font = '16px sans-serif';
      ctx.fillText(over ? T('Điểm ', 'Score ') + Math.floor(st.dist / 20) + ', +' + st.coins + ' coin' : T('Né xe, nhặt xu, đừng để cảnh sát bắt kịp', 'Dodge cars, grab coins, outrun the police'), W / 2, 245);
      ctx.fillText(T('Chạm hoặc nhấn Space để ', 'Tap or press Space to ') + (over ? T('chơi lại', 'restart') : T('bắt đầu', 'start')), W / 2, 285);
    }
  }
  function showHud() {
    if (!st) return;
    var s = Math.floor(st.dist / 20);
    hud.innerHTML = '<span>' + T('Điểm', 'Score') + ' <b>' + s + '</b></span><span>' + T('Máu', 'Health') + ' <b>' + '❤'.repeat(Math.max(0, st.hp)) + '</b></span>' +
      '<span>' + (st.shield ? T('🛡️ Có khiên', '🛡️ Shield on') : T('Khiên: chưa có', 'No shield')) + '</span><span>🪙 <b>' + (save.coins + (running ? st.coins : 0)) + '</b></span><span>' + T('Kỷ lục', 'Best') + ' <b>' + save.best + '</b></span>' +
      (st.police > 0 ? '<span>🚓 <b>' + Math.ceil(st.police) + 's</b></span>' : '');
  }
  var hudTick = 0, scored = false;
  function loop(ts) {
    if (!running) return;
    var dt = Math.min(40, ts - last) / 16.7; last = ts;
    update(dt);
    if (running) {
      draw();
      if (++hudTick % 6 === 0) showHud();
      if (!scored && st.dist / 20 >= 500) { scored = true; emit('score', 500); }
      window.requestAnimationFrame(loop);
    }
  }
  function start() {
    reset(); running = true; scored = false; document.documentElement.classList.add('playing'); last = performance.now(); emit('start');
    window.requestAnimationFrame(loop);
  }
  function lane(d) { if (st && running) st.lane = Math.max(0, Math.min(2, st.lane + d)); }

  function renderSkins() {
    skinsEl.innerHTML = '';
    SKINS.forEach(function (s, i) {
      var b = document.createElement('button'), own = save.own.indexOf(i) >= 0;
      b.type = 'button'; b.className = 'skin'; b.style.setProperty('--c', s[0]);
      b.setAttribute('aria-pressed', String(save.sel === i));
      b.innerHTML = '<i></i>' + s[1] + (own ? '' : ' 🔒 ' + s[2]);
      b.addEventListener('click', function () {
        if (!own) {
          if (save.coins < s[2]) { b.textContent = T('Chưa đủ coin', 'Not enough coins'); window.setTimeout(renderSkins, 900); return; }
          save.coins -= s[2]; save.own.push(i);
        }
        save.sel = i; persist(); renderSkins(); if (!running) { draw(); showHud(); }
      });
      skinsEl.appendChild(b);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (box.hidden) return;
    var k = e.key;
    if (k === 'ArrowLeft' || k === 'a' || k === 'A') { lane(-1); if (running) e.preventDefault(); }
    else if (k === 'ArrowRight' || k === 'd' || k === 'D') { lane(1); if (running) e.preventDefault(); }
    else if ((k === ' ' || k === 'Enter') && !running && e.target.tagName !== 'BUTTON') { e.preventDefault(); start(); }
    else if (k === ' ' && running) e.preventDefault();
  });
  cv.addEventListener('pointerdown', function (e) {
    if (!running) { start(); return; }
    var r = cv.getBoundingClientRect(); lane(e.clientX - r.left < r.width / 2 ? -1 : 1);
  });
  openBtn.addEventListener('click', function () {
    box.hidden = !box.hidden;
    openBtn.setAttribute('aria-expanded', String(!box.hidden));
    if (box.hidden) { running = false; document.documentElement.classList.remove('playing'); return; }
    if (!st) reset();
    renderSkins(); draw(); showHud();
    box.scrollIntoView({ block: 'center', behavior: 'smooth' });
  });
  document.addEventListener('visibilitychange', function () { if (document.hidden) { running = false; document.documentElement.classList.remove('playing'); } });
})();
