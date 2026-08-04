/**
 * Performance detection script
 * Tests device capability and sets appropriate flags for animations
 * Runs on page load before React renders
 */

function detectPerformance() {
  // Check if we've already cached the result today
  const cached = localStorage.getItem('perf-detect');
  const cachedTime = localStorage.getItem('perf-detect-time');
  const now = Date.now();
  
  // Use cached result if it's less than 24 hours old
  if (cached && cachedTime && (now - parseInt(cachedTime) < 86400000)) {
    applyPerformanceClass(cached);
    return;
  }

  // Run performance test
  performFpsTest((canAnimate) => {
    const performanceLevel = canAnimate ? 'high-perf' : 'low-perf';
    applyPerformanceClass(performanceLevel);
    
    // Cache the result
    localStorage.setItem('perf-detect', performanceLevel);
    localStorage.setItem('perf-detect-time', now.toString());
  });
}

function performFpsTest(callback) {
  // Check for prefers-reduced-motion first (highest priority)
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    callback(false);
    return;
  }

  // Check for low-end device indicators before running the FPS probe.
  if (isLowEndDevice()) {
    callback(false);
    return;
  }

  // Run actual FPS test
  let frameCount = 0;
  let lastTime = performance.now();
  const testDuration = 500; // Test for 500ms

  function testFrame() {
    frameCount++;
    const currentTime = performance.now();
    const elapsed = currentTime - lastTime;

    if (elapsed < testDuration) {
      requestAnimationFrame(testFrame);
    } else {
      const fps = Math.round((frameCount / elapsed) * 1000);
      const canAnimate = fps >= 30; // Require at least 30 FPS
      callback(canAnimate);
    }
  }

  requestAnimationFrame(testFrame);
}

function isLowEndDevice() {
  const connection = navigator.connection || {};
  const hasLowMemory = navigator.deviceMemory && navigator.deviceMemory <= 4;
  const hasFewCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
  const isSlowConnection = Boolean(
    connection.saveData ||
    ['slow-2g', '2g'].includes(connection.effectiveType || '')
  );

  const ua = navigator.userAgent.toLowerCase();
  const lowEndPatterns = [
    'nexus 5',
    'nexus 6p',
    'moto g',
    'redmi',
    'samsung j',
    'iphone 6',
  ];

  return hasLowMemory || hasFewCores || isSlowConnection || lowEndPatterns.some(pattern => ua.includes(pattern));
}

function applyPerformanceClass(level) {
  const html = document.documentElement;
  html.classList.add(level);
  
  // Also set data attribute for easy CSS targeting
  html.setAttribute('data-performance', level);
}

// Run detection immediately when script loads
detectPerformance();
