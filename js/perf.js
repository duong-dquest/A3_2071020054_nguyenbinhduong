(function () {
  var root = document.documentElement, nav = navigator, conn = nav.connection || {};
  var pref = null;
  try { pref = localStorage.getItem('perf'); } catch (e) {}          // 'lite' | 'full' | null (tự động)
  // Ép bằng liên kết: ?lite=1 (nhẹ), ?lite=0 (đầy đủ), ?lite=auto (về tự động)
  var q = /[?&]lite=(\w+)/.exec(window.location.search);
  if (q) {
    pref = q[1] === '1' ? 'lite' : q[1] === '0' ? 'full' : null;
    try { if (pref) localStorage.setItem('perf', pref); else localStorage.removeItem('perf'); } catch (e) {}
  }
  var weak = !!((nav.hardwareConcurrency && nav.hardwareConcurrency <= 4) || (nav.deviceMemory && nav.deviceMemory <= 4) ||
    conn.saveData === true || /^(slow-2g|2g|3g)$/.test(conn.effectiveType || ''));
  var lite = pref === 'lite' || (pref !== 'full' && weak);
  var PERF = window.PERF = { lite: lite, weak: weak, pref: pref };
  root.classList.toggle('lite', lite);

  function apply(l, auto) {
    PERF.lite = l; root.classList.toggle('lite', l);
    document.dispatchEvent(new CustomEvent('perf', { detail: { lite: l, auto: !!auto } }));
  }
  PERF.set = function (l, auto) {
    try { localStorage.setItem('perf', l ? 'lite' : 'full'); } catch (e) {}
    PERF.pref = l ? 'lite' : 'full'; apply(l, auto);
  };

  // Chưa chọn và máy chưa bị coi là yếu: đo tốc độ khung hình sau khi tải xong; chậm hai lần liên tiếp thì tự bật chế độ nhẹ
  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function probe(round) {
    var last = 0, sum = 0, frames = 0, start = performance.now();
    function tick(t) {
      if (document.hidden) { window.setTimeout(function () { probe(round); }, 2000); return; }
      if (PERF.pref) return;                                         // người dùng đã tự chọn trong lúc đo
      if (last) { sum += t - last; frames++; }
      last = t;
      if (t - start < 2500) { window.requestAnimationFrame(tick); return; }
      if (sum / Math.max(1, frames) > 29) {                           // dưới khoảng 34 khung hình/giây
        if (round >= 2) PERF.set(true, true); else window.setTimeout(function () { probe(round + 1); }, 500);
      }
    }
    window.requestAnimationFrame(tick);
  }
  if (!pref && !lite && !reducedMotion) window.addEventListener('load', function () { window.setTimeout(function () { probe(1); }, 2500); });
})();
