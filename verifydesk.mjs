import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:1988,height:900,deviceScaleFactor:1});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2000)));
const desk=await page.evaluate(()=>{
  const vw=window.innerWidth;
  const cols=Array.from(document.querySelectorAll('.fusion-builder-row-7 .fusion-builder-row > .fusion-layout-column'));
  return cols.map(c=>{const r=c.getBoundingClientRect(); return {cls:c.className.match(/fusion-builder-column-\d+/)?.[0], L:Math.round(r.left),R:Math.round(r.right)};});
});
console.log('DESKTOP cols:', JSON.stringify(desk));
await browser.close();
