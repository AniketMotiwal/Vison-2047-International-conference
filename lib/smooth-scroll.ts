/**
 * Smooth scroll utility for modern browsers
 * Uses element.scrollIntoView with smooth behavior for cross-browser compatibility
 */
export const smooth = (element: Element) => {
  if (!element) return;

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

/**
 * Scroll to a specific element by ID
 */
export const smoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    smooth(element);
  }
};

/**
 * Custom solution with animation frame for finer control
 */
export const smoothScrollCustom = (element: Element, duration = 1000) => {
  const target = element.getBoundingClientRect().top + window.scrollY;
  const start = window.scrollY;
  const distance = target - start;
  const startTime = performance.now();

  const ease = (t: number) => {
    // Easing function - ease-in-out-cubic
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, start + distance * ease(progress));

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};
