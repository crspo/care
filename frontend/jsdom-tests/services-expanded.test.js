const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Load the Services.css from the repo so CSS rules are applied in JSDOM
const cssPath = path.join(__dirname, '..', 'src', 'components', 'Services.css');
const css = fs.readFileSync(cssPath, 'utf8');

const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <style>${css}</style>
</head>
<body>
  <div class="services-grid">
    <div class="service-card" data-idx="0" tabindex="0">
      <h3>Service 1</h3>
      <p>Short desc</p>
      <div class="service-details">Details for 1</div>
    </div>
    <div class="service-card" data-idx="1" tabindex="0">
      <h3>Service 2</h3>
      <p>Short desc</p>
      <div class="service-details">Details for 2</div>
    </div>
    <div class="service-card" data-idx="2" tabindex="0">
      <h3>Service 3</h3>
      <p>Short desc</p>
      <div class="service-details">Details for 3</div>
    </div>
  </div>
  <script>
    // Add click behavior analogous to the React components
    const cards = Array.from(document.querySelectorAll('.service-card'));
    let expanded = null;
    cards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        if (expanded === idx) {
          card.classList.remove('expanded');
          expanded = null;
        } else {
          cards.forEach(c => c.classList.remove('expanded'));
          card.classList.add('expanded');
          expanded = idx;
        }
      });
    });
  </script>
</body>
</html>`;

// Create a JSDOM instance that runs scripts
const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
const { window } = dom;

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

(async () => {
  const doc = window.document;
  const cards = Array.from(doc.querySelectorAll('.service-card'));
  const details = cards.map(c => c.querySelector('.service-details'));

  // Click first card
  cards[0].click();
  await sleep(20);
  const d0 = window.getComputedStyle(details[0]).display;
  const d1 = window.getComputedStyle(details[1]).display;
  const d2 = window.getComputedStyle(details[2]).display;
  console.log('after click 0:', d0, d1, d2);
  if (d0 !== 'block' || d1 !== 'none' || d2 !== 'none') {
    console.error('Test failed after first click');
    process.exit(1);
  }

  // Click second card
  cards[1].click();
  await sleep(20);
  const d0b = window.getComputedStyle(details[0]).display;
  const d1b = window.getComputedStyle(details[1]).display;
  const d2b = window.getComputedStyle(details[2]).display;
  console.log('after click 1:', d0b, d1b, d2b);
  if (d1b !== 'block' || d0b !== 'none' || d2b !== 'none') {
    console.error('Test failed after second click');
    process.exit(1);
  }

  // Click second again to collapse
  cards[1].click();
  await sleep(20);
  const d0c = window.getComputedStyle(details[0]).display;
  const d1c = window.getComputedStyle(details[1]).display;
  const d2c = window.getComputedStyle(details[2]).display;
  console.log('after click 1 again:', d0c, d1c, d2c);
  if (d1c !== 'none') {
    console.error('Test failed after collapsing second');
    process.exit(1);
  }

  console.log('All tests passed');
  process.exit(0);
})();
