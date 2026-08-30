import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
const widths=[360,414,534,692,768,900,1024,1200,1344,1440,1988];
for(const vw of widths){
  await page.setViewport({width:vw,height:900,deviceScaleFactor:1,isMobile:vw<900,hasTouch:vw<900});
  await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
  await page.evaluate(()=>new Promise(r=>setTimeout(r,1200)));
  const r=await page.evaluate(()=>{
    const t=document.querySelector('.fusion-text-8');
    const tr=t.getBoundingClientRect();
    // what's to the right of the text within same row? any product img column visible?
    const row=document.querySelector('.fusion-builder-row-7');
    const cols=row?Array.from(row.querySelectorAll(':scope > .fusion-builder-row > .fusion-layout-column')).map(c=>Math.round(c.getBoundingClientRect().right/window.innerWidth*100)):[];
    return {leftPct:Math.round(tr.left/window.innerWidth*100), rightPct:Math.round(tr.right/window.innerWidth*100), colRights:cols, hasProductImgCol: cols.length>1};
  });
  console.log(vw, JSON.stringify(r));
}
await browser.close();
