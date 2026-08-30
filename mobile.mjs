import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:692,height:900,deviceScaleFactor:2,isMobile:true,hasTouch:true});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2500)));
const h=await page.evaluate(()=>document.documentElement.scrollHeight);
console.log('mobile page height',h);
await page.screenshot({path:'_mobile.png',fullPage:true});
// list dark rows layout
const rows=await page.evaluate(()=>{
  const out=[];
  document.querySelectorAll('.fusion-fullwidth.fullwidth-box').forEach(rw=>{
    const cs=getComputedStyle(rw);
    if(cs.backgroundColor!=='rgb(31, 43, 38)') return;
    const txts=rw.querySelectorAll('.fusion-text, h1,h2,h3,h4,h5,h6, li, p');
    let minLeft=1e9,maxRight=0; txts.forEach(el=>{const rc=el.getBoundingClientRect();if(rc.width>0){minLeft=Math.min(minLeft,rc.left);maxRight=Math.max(maxRight,rc.right);}});
    out.push({cls:rw.className.match(/fusion-builder-row-\d+/)?.[0], bg:cs.backgroundColor,
      textSpan:[Math.round(minLeft),Math.round(maxRight)], rightGap:Math.round(692-maxRight),
      hasIcon:!!rw.querySelector('i.fontawesome-icon'),
      text:(rw.querySelector('h2,h3,h4,strong,li,p')?.textContent||'').trim().slice(0,60)});
  });
  return out;
});
console.log(JSON.stringify(rows,null,2));
await browser.close();
