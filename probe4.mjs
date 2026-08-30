import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:1988,height:900,deviceScaleFactor:1});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2500)));
const res = await page.evaluate(()=>{
  const out=[];
  ['fusion-builder-row-9','fusion-builder-row-10','fusion-builder-row-11','fusion-builder-row-12'].forEach(sel=>{
    const rw=document.querySelector('.'+sel);
    if(!rw) return;
    const cs=getComputedStyle(rw);
    // text container spans
    const txts=rw.querySelectorAll('.fusion-text, h1,h2,h3,h4,h5,h6, li, p');
    let minLeft=1e9,maxRight=0;
    txts.forEach(el=>{const rc=el.getBoundingClientRect(); if(rc.width>0){minLeft=Math.min(minLeft,rc.left);maxRight=Math.max(maxRight,rc.right);}});
    // column structure
    let cols=rw.querySelectorAll(':scope > .fusion-builder-row > .fusion-layout-column').length;
    if(!cols) cols=rw.querySelectorAll('.fusion-layout-column').length;
    // first text snippet including headers
    const txt=(rw.querySelector('h2,h3,h4,h1,strong,li,p')?.textContent||'').trim();
    out.push({sel,bg:cs.backgroundColor,cols, textSpan:[Math.round(minLeft),Math.round(maxRight)], rightGap:Math.round(1988-maxRight),
      hasIcon:!!rw.querySelector('i.fontawesome-icon'),text:txt.slice(0,80)});
  });
  return out;
});
console.log(JSON.stringify(res,null,2));
await browser.close();
