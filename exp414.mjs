import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:414,height:900,deviceScaleFactor:2,isMobile:true,hasTouch:true});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2500)));
const res=await page.evaluate(()=>{
  const vw=window.innerWidth;
  const txt=document.querySelector('.fusion-text-8');
  const wrap=txt.closest('.fusion-column-wrapper');
  function pct(){const r=txt.getBoundingClientRect(); return {R:Math.round(r.right), rPct:Math.round(r.right/vw*100), L:Math.round(r.left)};}
  const base=pct();
  // trial 1: remove padR on wrap
  wrap.style.setProperty('padding-right','0px','important');
  const trial1=pct();
  // trial 2: also remove marR
  wrap.style.setProperty('margin-right','0px','important');
  const trial2=pct();
  // trial3: also remove padding on col
  const colwrap=txt.closest('.fusion-column-wrapper'); 
  const innerCol=txt.closest('.fusion-layout-column');
  return {vw, base, afterRemovePadR:trial1, afterAlsoRemoveMarR:trial2, wrapPadROrig:'24px', wrapMarROrig:'60px'};
});
console.log(JSON.stringify(res,null,2));
await browser.close();
