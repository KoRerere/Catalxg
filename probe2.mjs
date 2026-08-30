import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:1988,height:900,deviceScaleFactor:1});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2500)));
await page.evaluate(()=>window.scrollTo(0,6200));
await page.evaluate(()=>new Promise(r=>setTimeout(r,600)));
const res = await page.evaluate(()=>{
  const docY=window.scrollY;
  const targets=[6640, 6560, 6700, 6850];
  const out={docY};
  for(const t of targets){
    const vx=994, vy=t-window.scrollY;
    const els=document.elementsFromPoint(vx,vy);
    out[t]=els.slice(0,7).map(e=>({
      tag:e.tagName, cls:(e.className&&e.className.toString().slice(0,80))||'',
      bg:getComputedStyle(e).backgroundColor,
      styleBg:(e.getAttribute('style')||'').match(/background-color:[^;]*/)?.[0]||'',
      rect:(()=>{const r=e.getBoundingClientRect();return {top:Math.round(r.top+window.scrollY),h:Math.round(r.height)};})()
    }));
  }
  return out;
});
console.log(JSON.stringify(res,null,2));
await browser.close();
