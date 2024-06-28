document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img[src*="thesis_graph1.png"]');
    
    const options = {
      root: null, // Use the viewport as the container
      rootMargin: '0.1px',
      threshold: Array.from({length: 101}, (v, i) => i * 0.01) // Create 101 thresholds from 0 to 1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const ratio = entry.intersectionRatio;
        entry.target.style.opacity = ratio; // Set opacity based on intersection ratio
      });
    }, options);
  
    images.forEach(image => {
      image.classList.add('fade');
      observer.observe(image);
    });
  });