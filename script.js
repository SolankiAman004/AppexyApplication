window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('bg-white', 'shadow-lg');
      navbar.classList.remove('bg-opacity-90');
    } else {
      navbar.classList.remove('bg-white', 'shadow-lg');
      navbar.classList.add('bg-opacity-90');
    }
  });


  function togglePricing(plan) {
    const monthly = document.querySelectorAll('.monthly');
    const yearly = document.querySelectorAll('.yearly');

    if (plan === 'monthly') {
      monthly.forEach(el => el.classList.remove('hidden'));
      yearly.forEach(el => el.classList.add('hidden'));
    } else {
      yearly.forEach(el => el.classList.remove('hidden'));
      monthly.forEach(el => el.classList.add('hidden'));
    }
  }