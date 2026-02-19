function initHeroVideo() {
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

  const isMobile = window.innerWidth < 768;
  const desktopSrc = video.dataset.srcDesktop;
  const mobileSrc = video.dataset.srcMobile;
  const webmSrc = video.dataset.srcWebm;

  // Add WebM source first (preferred on desktop)
  if (!isMobile && webmSrc) {
    const sourceWebm = document.createElement('source');
    sourceWebm.src = webmSrc;
    sourceWebm.type = 'video/webm';
    video.appendChild(sourceWebm);
  }

  // Add MP4 source (desktop or mobile variant)
  const mp4Src = isMobile ? (mobileSrc || desktopSrc) : desktopSrc;
  if (mp4Src) {
    const sourceMp4 = document.createElement('source');
    sourceMp4.src = mp4Src;
    sourceMp4.type = 'video/mp4';
    video.appendChild(sourceMp4);
  }

  // Play/pause based on visibility
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

initHeroVideo();
document.addEventListener('astro:after-swap', initHeroVideo);
