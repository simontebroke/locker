// reportWebVitals.ts
const reportWebVitals = (onPerfEntry: (metric: { name: string, value: number }) => void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // PerformanceObserver to track CLS, LCP, and FID
    const observer = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        onPerfEntry({ name: entry.name, value: entry.startTime });
      });
    });

    observer.observe({ type: 'largest-contentful-paint', buffered: true });
    observer.observe({ type: 'first-input', buffered: true });
    observer.observe({ type: 'layout-shift', buffered: true });
  }
};

export default reportWebVitals;