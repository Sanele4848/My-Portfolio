(function () {
  var root = document.documentElement;
  root.classList.add('js');

  /* Large title collapse + tab state */
  var tabs = [].slice.call(document.querySelectorAll('.tab'));
  var ticking = false;
  function setActive(hash) {
    tabs.forEach(function (t) { t.classList.toggle('active', t.getAttribute('href') === hash); });
  }
  function update() {
    var y = window.scrollY;
    root.style.setProperty('--p', Math.min(1, Math.max(0, (y - 34) / 18)).toFixed(3));
    if (window.innerHeight + y >= document.documentElement.scrollHeight - 4) setActive('#contact');
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) setActive('#' + e.target.id); });
    }, { rootMargin: '-35% 0px -55% 0px' });
    tabs.forEach(function (t) {
      var s = document.querySelector(t.getAttribute('href'));
      if (s) io.observe(s);
    });
  }

  /* Sheet */
  var sheet = document.getElementById('sheet');
  var body = sheet.querySelector('.sheet-body');
  var head = sheet.querySelector('.sheet-head');
  var lastTrigger = null;
  var mobile = function () { return window.matchMedia('(max-width: 719px)').matches; };

  function openSheet(id, trigger) {
    var src = document.getElementById(id);
    if (!src) return;
    lastTrigger = trigger;
    body.innerHTML = src.innerHTML;
    body.scrollTop = 0;
    sheet.style.transform = '';
    document.body.classList.add('sheet-open');
    sheet.showModal();
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { sheet.classList.add('open'); });
    });
  }

  function closeSheet() {
    if (!sheet.open || !sheet.classList.contains('open')) return;
    sheet.classList.remove('open');
    var finished = false;
    function finish() {
      if (finished) return;
      finished = true;
      sheet.close();
      document.body.classList.remove('sheet-open');
      if (lastTrigger) lastTrigger.focus({ preventScroll: true });
    }
    sheet.addEventListener('transitionend', function h(e) {
      if (e.target === sheet && e.propertyName === 'transform') {
        sheet.removeEventListener('transitionend', h);
        finish();
      }
    });
    setTimeout(finish, 700);
  }

  document.addEventListener('click', function (e) {
    var opener = e.target.closest('[data-open]');
    if (opener) { openSheet(opener.getAttribute('data-open'), opener); return; }
    if (e.target.closest('[data-close]') || e.target === sheet) closeSheet();
  });
  sheet.addEventListener('cancel', function (e) { e.preventDefault(); closeSheet(); });

  /* Drag to dismiss (touch / pointer, phone layout) */
  var dragging = false, startY = 0, dy = 0, startT = 0;
  head.addEventListener('pointerdown', function (e) {
    if (!mobile() || e.target.closest('.done')) return;
    dragging = true; startY = e.clientY; dy = 0; startT = e.timeStamp;
    head.setPointerCapture(e.pointerId);
    sheet.style.transition = 'none';
  });
  head.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    dy = Math.max(0, e.clientY - startY);
    sheet.style.transform = 'translateY(' + dy + 'px)';
  });
  function endDrag(e) {
    if (!dragging) return;
    dragging = false;
    sheet.style.transition = '';
    var v = dy / Math.max(1, e.timeStamp - startT);
    sheet.style.transform = '';
    if (dy > 110 || v > 0.6) closeSheet();
  }
  head.addEventListener('pointerup', endDrag);
  head.addEventListener('pointercancel', endDrag);
})();
