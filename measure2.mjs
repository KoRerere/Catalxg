import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:692,height:900,deviceScaleFactor:2,isMobile:true,hasTouch:true});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2500)));
const res = await page.evaluate(()=>{
  // column-21 (the 50% column) full detail
  const col=document.querySelector('.fusion-builder-column-21');
  const colWrapper=col.querySelector('.fusion-column-wrapper');
  const innerCols=col.querySelectorAll('.fusion-layout-column');
  const txt=document.querySelector('.fusion-text-8');
  const details={};
  function desc(el,label){
    const cs=getComputedStyle(el); const r=el.getBoundingClientRect();
    details[label]={left:Math.round(r.left),right:Math.round(r.right),w:Math.round(r.width),
      padL:cs.paddingLeft,padR:cs.paddingRight,marL:cs.marginLeft,marR:cs.marginRight,
      maxW:cs.maxWidth, wCSS:cs.width, bg:cs.backgroundColor, boxSizing:cs.boxSizing,
      display:cs.display, fontSize:cs.fontSize};
  }
  desc(col,'column-21');
  desc(colWrapper,'column-21-wrapper');
  innerCols.forEach((c,i)=>desc(c,'inner-col-'+i));
  // the inner nested row
  const innerRow=col.querySelector('.fusion-builder-row-inner');
  desc(innerRow,'inner-row');
  desc(txt,'text-8');
  // inner row children wrappers
  const icw=innerRow?Array.from(innerRow.querySelectorAll('.fusion-column-wrapper')):[];
  icw.forEach((w,i)=>desc(w,'icw-'+i));
  return details;
});
console.log(JSON.stringify(res,null,2));
await browser.close();
