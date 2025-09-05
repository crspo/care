const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const cssPath = path.join(__dirname, '..', 'src', 'components', 'ServiceCard.css');
const css = fs.readFileSync(cssPath, 'utf8');

// Render a banner group matching the real app headings
const html = `<!doctype html>
<html>
<head><style>${css}</style></head>
<body>
  <div class="banner-wrapper">
    <div class="banner-item"><div class="banner-card" tabindex="0"><h3>Compassionate Care</h3><p>short</p><div class="banner-details">d1</div></div></div>
    <div class="banner-item"><div class="banner-card" tabindex="0"><h3>Experienced Team</h3><p>short</p><div class="banner-details">experienced details</div></div></div>
    <div class="banner-item"><div class="banner-card" tabindex="0"><h3>Multicultural Support</h3><p>short</p><div class="banner-details">d3</div></div></div>
  </div>
  <script>
    const cards = Array.from(document.querySelectorAll('.banner-card'));
    let expanded = null;
    cards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        if (expanded === idx) { card.classList.remove('expanded'); expanded = null; }
        else { cards.forEach(c => c.classList.remove('expanded')); card.classList.add('expanded'); expanded = idx; }
      });
    });
  </script>
</body>
</html>`;

const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
const { window } = dom;
const sleep = ms => new Promise(r => setTimeout(r, ms));

(async () => {
  const doc = window.document;
  const cards = Array.from(doc.querySelectorAll('.banner-card'));
  const details = cards.map(c => c.querySelector('.banner-details'));

  // Click the 'Experienced Team' card (index 1)
  cards[1].click(); await sleep(10);
  const expDisplay = window.getComputedStyle(details[1]).display;
  console.log('experienced display after click:', expDisplay);
  if (expDisplay !== 'block') process.exit(1);

  // Ensure siblings are not visible
  if (window.getComputedStyle(details[0]).display === 'block' || window.getComputedStyle(details[2]).display === 'block') process.exit(1);

  console.log('Experienced banner expand test passed');
  process.exit(0);
})();
