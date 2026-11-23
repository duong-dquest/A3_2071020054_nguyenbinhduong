(function () {
  var root = document.documentElement;
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var bar = document.createElement('div');
  bar.className = 'scroll-progress'; bar.setAttribute('aria-hidden', 'true'); bar.innerHTML = '<span></span>';
  document.body.appendChild(bar);
  var fill = bar.firstChild, top = document.querySelector('.topbar');
  var last = window.scrollY, acc = 0, ticking = false;
  function lite() { return root.classList.contains('lite'); }

  function update() {
    ticking = false;
    var y = window.scrollY, d = y - last, max = Math.max(1, root.scrollHeight - window.innerHeight);
    last = y;
    fill.style.transform = 'scaleX(' + Math.min(1, y / max).toFixed(4) + ')';
    root.classList.toggle('is-scrolled', y > 8);
    if (reduced) return;
    if (!lite()) root.style.setProperty('--py', Math.round(y));       // nền trời trôi chậm hơn nội dung
    acc = d * acc > 0 ? acc + d : d;                      // cộng dồn theo hướng để bỏ qua rung nhẹ
    if (top) {
      if (y < 120 || acc < -14) top.classList.remove('is-hidden');   // cuộn lên: menu hiện lại
      else if (acc > 48) top.classList.add('is-hidden');             // cuộn xuống: menu ẩn đi
    }
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; window.requestAnimationFrame(update); } }, { passive: true });
  update();

  // Khối nội dung rời màn hình thì ẩn, quay lại thì trượt vào từ đúng hướng cuộn
  if (!reduced && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting || lite()) { e.target.classList.remove('sc-out'); return; }
        e.target.style.setProperty('--rv', (e.boundingClientRect.top < 0 ? -28 : 28) + 'px');
        e.target.classList.add('sc-out');
      });
    }, { rootMargin: '-6% 0px -6% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  }
  document.addEventListener('perf', function () {
    if (!lite()) return;
    document.querySelectorAll('.sc-out').forEach(function (el) { el.classList.remove('sc-out'); });
    root.style.removeProperty('--py');
  });
})();
