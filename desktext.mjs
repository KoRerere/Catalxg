import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:1988,height:900,deviceScaleFactor:1});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2500)));
const res=await page.evaluate(()=>{
  const txt=document.querySelector('.fusion-text-8');
  const tr=txt.getBoundingClientRect();
  // col-21 wrapper
  const wrap=txt.closest('.fusion-column-wrapper');
  const wr=wrap.getBoundingClientRect();
  // inner row
  const irow=wrap.querySelector('.fusion-builder-row-inner');
  const ir=irow.getBoundingClientRect();
  // col-21
  const col=document.querySelector('.fusion-builder-column-21');
  const cr=col.getBoundingClientRect();
  // outer row container
  const orow=document.querySelector('.fusion-builder-row-7 .fusion-builder-row');
  const orr=orow.getBoundingClientRect();
  const vw=window.innerWidth;
  function pct(r,label){return {left:Math.round(r.left),right:Math.round(r.right),w:Math.round(r.width),rPct:Math.round(r.right/vw*100),lPct:Math.round(r.left/vw*100)};}
  return {vw, text:pct(tr), wrapper:pct(wr), innerRow:pct(ir), col21:pct(cr), outerRow:pct(orr),
    wrapPadR:getComputedStyle(wrap).paddingRight, wrapMarR:getComputedStyle(wrap).marginRight,
    innerRowMarR:getComputedStyle(irow).marginRight};
});
console.log(JSON.stringify(res,null,2));
await browser.close();
