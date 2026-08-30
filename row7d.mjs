import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:1988,height:900,deviceScaleFactor:1});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2500)));
const res=await page.evaluate(()=>{
  const row=document.querySelector('.fusion-builder-row-7');
  const outer=row.querySelector(':scope > .fusion-builder-row');
  const cols=Array.from(outer.children);
  const out=[];
  cols.forEach(c=>{
    const r=c.getBoundingClientRect();
    const cs=getComputedStyle(c);
    const wrapper=c.querySelector('.fusion-column-wrapper');
    const wr=wrapper?wrapper.getBoundingClientRect():null;
    // what's inside
    const imgs=Array.from(c.querySelectorAll('img')).map(i=>({src:(i.getAttribute('data-orig-src')||i.src||'').slice(-40), w:i.width,h:i.height}));
    const texts=(c.querySelector('.fusion-text')?.textContent||'').trim().slice(0,40);
    out.push({cls:c.className.slice(0,40), left:Math.round(r.left),right:Math.round(r.right),w:Math.round(r.width),
      wrapW: wrapper?Math.round(wr.width):null, wrapPadR: wrapper?getComputedStyle(wrapper).paddingRight:null,
      wrapMarR: wrapper?getComputedStyle(wrapper).marginRight:null,
      imgs, texts});
  });
  return out;
});
console.log(JSON.stringify(res,null,2));
await browser.close();
