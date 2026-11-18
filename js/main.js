(function () {
  document.documentElement.classList.add('js');

  // Hiện từng khu vực khi cuộn tới; nội dung vẫn hiện đầy đủ nếu không hỗ trợ observer.
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (element) { revealObserver.observe(element); });
  } else {
    reveals.forEach(function (element) { element.classList.add('is-visible'); });
  }

  // Tab dự án: bấm hoặc dùng phím ← → để đổi dự án
  var tabs = document.querySelectorAll('[role="tab"]');
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null;
      if (n !== null) { e.preventDefault(); select(tabs[(n + tabs.length) % tabs.length]); }
    });
  });

  // Làm nổi mục đang xem trên menu
  var links = document.querySelectorAll('.nav a');
  var manualSelection = null;
  function setActiveLink(id) {
    links.forEach(function (a) {
      var active = a.getAttribute('href') === '#' + id;
      a.classList.toggle('active', active);
      if (active) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
  }
  links.forEach(function (a) {
    a.addEventListener('click', function () {
      manualSelection = a.getAttribute('href').slice(1);
      setActiveLink(manualSelection);
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    if (a.closest('.nav')) return;
    a.addEventListener('click', function () { manualSelection = null; });
  });
  function resumeScrollTracking() { manualSelection = null; }
  window.addEventListener('wheel', resumeScrollTracking, { passive: true });
  window.addEventListener('touchstart', resumeScrollTracking, { passive: true });
  window.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'PageDown' ||
        e.key === 'PageUp' || e.key === 'Home' || e.key === 'End' || e.key === ' ') {
      resumeScrollTracking();
    }
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      if (manualSelection) return;
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        setActiveLink(en.target.id);
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ['top', 'about', 'projects', 'contact'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }

  // Sao chép email
  var btn = document.querySelector('.copy-btn');
  var status = document.querySelector('.copy-status');
  if (btn) {
    btn.addEventListener('click', function () {
      var text = btn.dataset.copy;
      if (!navigator.clipboard) {
        status.textContent = 'Trình duyệt không hỗ trợ sao chép. Liên kết: ' + text;
        return;
      }
      navigator.clipboard.writeText(text)
        .then(function () { status.textContent = 'Đã sao chép liên kết GitHub.'; })
        .catch(function () { status.textContent = 'Không sao chép được. Liên kết: ' + text; });
    });
  }

  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    function updateBackToTop() {
      backToTop.classList.toggle('is-visible', window.scrollY > 420);
    }
    window.addEventListener('scroll', updateBackToTop, { passive: true });
    updateBackToTop();
  }
})();
