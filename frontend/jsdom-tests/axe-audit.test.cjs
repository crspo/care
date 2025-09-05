const { JSDOM } = require('jsdom');
const axe = require('axe-core');

// Basic DOM fragments to audit
const bannerHtml = `
  <div>
    <div class="banner-item"><button class="banner-card"><h3>Title</h3><p>short</p></button></div>
  </div>
`;

const pillarsHtml = `
  <div>
    <div class="pillar-card"><button class="pillar-toggle"><h3>P1</h3><p>short</p></button><div class="pillar-details">d1</div></div>
  </div>
`;

const contactHtml = `
  <form>
    <label><input name="name" /></label>
    <label><input type="email" name="email" /></label>
    <label><textarea name="message"></textarea></label>
    <button type="submit">Send</button>
  </form>
`;

function runAudit(html, name) {
  const dom = new JSDOM(`<!doctype html><html><body>${html}</body></html>`);
  const { window } = dom;
  const { document } = window;
  // Inject axe into the window and run
  return new Promise((resolve, reject) => {
    try {
      // inject axe into the JSDOM window context by evaluating the built script
      const fs = require('fs');
      let axeSrc = null;
      try {
        const axePath = require.resolve('axe-core/axe.min.js');
        axeSrc = fs.readFileSync(axePath, 'utf8');
      } catch (err) {
        // try non-minified
        try {
          const axePath = require.resolve('axe-core/axe.js');
          axeSrc = fs.readFileSync(axePath, 'utf8');
        } catch (err2) {
          // last resort: try to require the package and use its source API (not always present)
          const ac = require('axe-core');
          if (ac && typeof ac.run === 'function') {
            // attach a simple wrapper
            window.axe = ac;
          }
        }
      }
      if (axeSrc) {
        window.eval(axeSrc);
      }
      if (!window.axe) throw new Error('axe not available in JSDOM window after injection');

      // expose minimal globals for other code that expects them
      const prev = { window: global.window, document: global.document };
      global.window = window;
      global.document = document;

      window.axe.run(document, {}, (err, results) => {
        // cleanup globals
        global.window = prev.window;
        global.document = prev.document;

        if (err) return reject(err);
        const violations = results.violations || [];
        if (violations.length) {
          console.log(`${name} accessibility violations:`);
          violations.forEach(v => console.log(`- ${v.id}: ${v.nodes.length} nodes`));
        } else {
          console.log(`${name} no violations`);
        }
        resolve(violations.length);
      });
    } catch (err) {
      return reject(err);
    }
  });
}

(async () => {
  let total = 0;
  total += await runAudit(bannerHtml, 'banner fragment');
  total += await runAudit(pillarsHtml, 'pillars fragment');
  total += await runAudit(contactHtml, 'contact fragment');
  console.log(`axe total violations: ${total}`);
})();
