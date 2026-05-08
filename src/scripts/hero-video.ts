function setupHeroVideo() {
  const video = document.querySelector('[data-hero-video]') as HTMLVideoElement | null;
  if (!video) return;

  // Respect reduced motion: keep poster, never play
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    video.removeAttribute('autoplay');
    video.pause();
    return;
  }

  // Already initialized (has <source> children)
  if (video.querySelector('source')) return;

  // Skip the 1.3 MB video on save-data or sub-4g connections — the poster
  // image is already visible and adequate.
  const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  if (conn?.saveData || (conn?.effectiveType && conn.effectiveType !== '4g')) {
    return;
  }

  const isMobile = window.innerWidth < 768;
  const desktopSrc = video.dataset.srcDesktop;
  const mobileSrc = video.dataset.srcMobile;
  const webmSrc = video.dataset.srcWebm;

  if (!isMobile && webmSrc) {
    const sourceWebm = document.createElement('source');
    sourceWebm.src = webmSrc;
    sourceWebm.type = 'video/webm';
    video.appendChild(sourceWebm);
  }

  const mp4Src = isMobile ? (mobileSrc || desktopSrc) : desktopSrc;
  if (mp4Src) {
    const sourceMp4 = document.createElement('source');
    sourceMp4.src = mp4Src;
    sourceMp4.type = 'video/mp4';
    video.appendChild(sourceMp4);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.playbackRate = 0.6;
          video.play().catch(() => {
            // Autoplay blocked — poster remains visible
          });
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.25 },
  );

  observer.observe(video);
  video.load();
}

// Defer video setup until the main thread is idle so LCP isn't held up by
// the 1.3 MB video competing with font/CSS for bandwidth.
function deferredInit() {
  const ric = (window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => void }).requestIdleCallback;
  if (ric) {
    ric(setupHeroVideo, { timeout: 3000 });
  } else {
    setTimeout(setupHeroVideo, 1500);
  }
}

deferredInit();
document.addEventListener('astro:after-swap', deferredInit);
