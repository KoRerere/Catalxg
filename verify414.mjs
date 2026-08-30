import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
// mobile 414
await page.setViewport({width:414,height:900,deviceScaleFactor:2,isMobile:true,hasTouch:true});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2000)));
const mobile=await page.evaluate(()=>{
  const vw=window.innerWidth;
  const t=document.querySelector('.fusion-text-8');
  const r=t.getBoundingClientRect();
  const wrap=t.closest('.fusion-column-wrapper');
  const wr=getComputedStyle(wrap);
  return {vw, textL:Math.round(r.left), textR:Math.round(r.right), rightPct:Math.round(r.right/vw*100),
    wrapPadR:wr.paddingRight, wrapRight:Math.round(wrap.getBoundingClientRect().right)};
});
console.log('MOBILE 414:', JSON.stringify(mobile));
await browser.close();
