(function(){
  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  toggle.addEventListener('click', function(){
    links.classList.toggle('open');
  });
  links.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ links.classList.remove('open'); });
  });

  // Active nav link on scroll
  var sections = document.querySelectorAll('section[id]');
  var navAnchors = document.querySelectorAll('nav.links a');
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        navAnchors.forEach(function(a){ a.classList.remove('active'); });
        var match = document.querySelector('nav.links a[href="#' + entry.target.id + '"]');
        if(match) match.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(function(s){ observer.observe(s); });

  // KPI count-up on load
  function animateCount(el){
    var target = parseFloat(el.getAttribute('data-count'));
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1200;
    var start = null;
    function step(ts){
      if(!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.floor(eased * target);
      el.textContent = value.toLocaleString() + suffix;
      if(progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString() + suffix;
    }
    requestAnimationFrame(step);
  }
  document.querySelectorAll('.kpi .num').forEach(function(el){ animateCount(el); });

  // Language bars fill on load
  window.addEventListener('load', function(){
    document.querySelectorAll('.bar i').forEach(function(bar){
      var w = bar.getAttribute('data-width');
      setTimeout(function(){ bar.style.width = w + '%'; }, 200);
    });
  });
})();