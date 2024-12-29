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

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('slideContent');
  setTimeout(() => {
    content.classList.remove('-translate-x-full', 'opacity-0');
    content.classList.add('translate-x-0', 'opacity-100');
  }, 200); // Adjust the delay as needed
});


document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('slideImage');
  setTimeout(() => {
    img.classList.remove('translate-x-full', 'opacity-0');
    img.classList.add('translate-x-0', 'opacity-100');
  }, 200); // Adjust timing as needed
});







  //  price

  const monthlyBtn = document.getElementById('monthly-btn');
  const yearlyBtn = document.getElementById('yearly-btn');
  const monthlySection = document.getElementById('monthly');
  const yearlySection = document.getElementById('yearly');

  monthlyBtn.addEventListener('click', () => {
    monthlyBtn.classList.add('bg-blue-500', 'text-white');
    monthlyBtn.classList.remove('bg-gray-100', 'text-blue-500');
    yearlyBtn.classList.remove('bg-blue-500', 'text-white');
    yearlyBtn.classList.add('bg-gray-100', 'text-blue-500');
    monthlySection.classList.remove('hidden');
    yearlySection.classList.add('hidden');
  });

  yearlyBtn.addEventListener('click', () => {
    yearlyBtn.classList.add('bg-blue-500', 'text-white');
    yearlyBtn.classList.remove('bg-gray-100', 'text-blue-500');
    monthlyBtn.classList.remove('bg-blue-500', 'text-white');
    monthlyBtn.classList.add('bg-gray-100', 'text-blue-500');
    yearlySection.classList.remove('hidden');
    monthlySection.classList.add('hidden');
  });


  // counter
  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 200; // Adjust for animation speed
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = +counter.getAttribute("data-target");
          const increment = target / speed;
  
          let count = 0;
          const updateCounter = () => {
            count += increment;
            if (count < target) {
              counter.innerText = Math.ceil(count);
              requestAnimationFrame(updateCounter);
            } else {
              counter.innerText = target; // Ensure final value matches
              observer.unobserve(counter); // Stop observing once complete
            }
          };
  
          updateCounter();
        }
      });
    });
  
    counters.forEach((counter) => observer.observe(counter));
  });
  






