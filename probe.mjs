import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:1988,height:900,deviceScaleFactor:1});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2500)));
const res = await page.evaluate(()=>{
  const targets=[6640, 6560, 6710];
  const out={};
  for(const t of targets){
    const els=document.elementsFromPoint(994,t);
    out[t]=els.slice(0,6).map(e=>({
      tag:e.tagName, cls:(e.className&&e.className.toString().slice(0,60))||'',
      id:e.id||'', bg:getComputedStyle(e).backgroundColor,
      rect:(()=>{const r=e.getBoundingClientRect();return {y:Math.round(r.top+window.scrollY),h:Math.round(r.height)};})()
    }));
  }
  return out;
});
console.log(JSON.stringify(res,null,2));
await browser.close();
