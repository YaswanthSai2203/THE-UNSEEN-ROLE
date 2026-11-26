import { open } from './smoke.mjs';
const t = await open();
await t.page.waitForTimeout(3000);
await t.page.click('#begin');
await t.page.waitForTimeout(3000);
await t.page.screenshot({ path: 'tests/out/menu.png' });
console.log('state:', await t.page.evaluate(() => window.__unseen?.G.state));
console.log(t.errors.join('\n') || 'no console errors');
await t.close();
