const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const cssPath = path.join(__dirname, '..', 'src', 'components', 'ServiceCard.css');
const css = fs.readFileSync(cssPath, 'utf8');

const html = `<!doctype html>
<html>
<head><style>${css}</style></head>
<body>
  <div class="banner-wrapper">
    <div class="banner-item"><div class="banner-card" tabindex="0"><h3>B1</h3><p>short</p><div class="banner-details">d1</div></div></div>
    <div class="banner-item"><div class="banner-card" tabindex="0"><h3>B2</h3><p>short</p><div class="banner-details">d2</div></div></div>
    <div class="banner-item"><div class="banner-card" tabindex="0"><h3>B3</h3><p>short</p><div class="banner-details">d3</div></div></div>
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

  cards[0].click(); await sleep(10);
  console.log('after click 0', window.getComputedStyle(details[0]).display, window.getComputedStyle(details[1]).display);
  if (window.getComputedStyle(details[0]).display !== 'block') process.exit(1);

  cards[1].click(); await sleep(10);
  console.log('after click 1', window.getComputedStyle(details[0]).display, window.getComputedStyle(details[1]).display);
  if (window.getComputedStyle(details[1]).display !== 'block' || window.getComputedStyle(details[0]).display === 'block') process.exit(1);

  cards[1].click(); await sleep(10);
  console.log('after click 1 again', window.getComputedStyle(details[1]).display);
  if (window.getComputedStyle(details[1]).display !== 'none') process.exit(1);

  console.log('Banner tests passed');
  process.exit(0);
})();
