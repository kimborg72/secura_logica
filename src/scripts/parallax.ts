function initParallax() {
  const hero = document.querySelector('[data-parallax]') as HTMLElement | null;
  if (!hero) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 768) return;

  const bg = hero.querySelector('[data-parallax-bg]') as HTMLElement;
  if (!bg) return;

  let ticking = false;

  function updateParallax() {
    const scrolled = window.scrollY;
    const rate = scrolled * 0.35;
    bg.style.transform = `translateY(${rate}px)`;
    ticking = false;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    },
    { passive: true },
  );
}

initParallax();
document.addEventListener('astro:after-swap', initParallax);
