// Generate star parallax background
function generateStars(n) {
  let value = '';
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 2000);
    value += `${x}px ${y}px #FFF${i < n - 1 ? ', ' : ''}`;
  }
  return value;
}

// Initialize stars on page load
(function() {
  const stars = document.getElementById('stars');
  const stars2 = document.getElementById('stars2');
  const stars3 = document.getElementById('stars3');
  
  if (!stars || !stars2 || !stars3) return;
  
  const shadowsSmall = generateStars(700);
  const shadowsMedium = generateStars(200);
  const shadowsBig = generateStars(100);
  
  // Apply box-shadows to main elements
  stars.style.boxShadow = shadowsSmall;
  stars2.style.boxShadow = shadowsMedium;
  stars3.style.boxShadow = shadowsBig;
  
  // Apply box-shadows to :after pseudo-elements via style injection
  const style = document.createElement('style');
  style.textContent = `
    #stars:after { box-shadow: ${shadowsSmall}; }
    #stars2:after { box-shadow: ${shadowsMedium}; }
    #stars3:after { box-shadow: ${shadowsBig}; }
  `;
  document.head.appendChild(style);
})();
