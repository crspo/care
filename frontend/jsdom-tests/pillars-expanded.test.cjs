const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const cssPath = path.join(__dirname, '..', 'src', 'components', 'Pillars.css');
const css = fs.readFileSync(cssPath, 'utf8');

const html = `<!doctype html>
<html>
<head><style>${css}</style></head>
<body>
  <div class="pillars-grid">
    <div class="pillar-card pillar-item" data-idx="0" tabindex="0">
      <h3>P1</h3>
      <p class="pillar-short">short</p>
      <div class="pillar-details">details1</div>
    </div>
    <div class="pillar-card pillar-item" data-idx="1" tabindex="0">
      <h3>P2</h3>
      <p class="pillar-short">short</p>
      <div class="pillar-details">details2</div>
    </div>
    <div class="pillar-card pillar-item" data-idx="2" tabindex="0">
      <h3>P3</h3>
      <p class="pillar-short">short</p>
      <div class="pillar-details">details3</div>
    </div>
  </div>
  <script>
    const cards = Array.from(document.querySelectorAll('.pillar-card'));
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
  const cards = Array.from(doc.querySelectorAll('.pillar-card'));
  const details = cards.map(c => c.querySelector('.pillar-details'));

  cards[0].click(); await sleep(10);
  console.log('after click 0', window.getComputedStyle(details[0]).display, window.getComputedStyle(details[1]).display);
  if (window.getComputedStyle(details[0]).display !== 'block') process.exit(1);

  cards[1].click(); await sleep(10);
  console.log('after click 1', window.getComputedStyle(details[0]).display, window.getComputedStyle(details[1]).display);
  if (window.getComputedStyle(details[1]).display !== 'block' || window.getComputedStyle(details[0]).display === 'block') process.exit(1);

  cards[1].click(); await sleep(10);
  console.log('after click 1 again', window.getComputedStyle(details[1]).display);
  if (window.getComputedStyle(details[1]).display !== 'none') process.exit(1);

  console.log('Pillars tests passed');
  process.exit(0);
})();
