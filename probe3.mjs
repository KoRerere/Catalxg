import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:1988,height:900,deviceScaleFactor:1});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2500)));
const res = await page.evaluate(()=>{
  const row11=document.querySelector('.fusion-builder-row-11');
  const row10=document.querySelector('.fusion-builder-row-10');
  const row12=document.querySelector('.fusion-builder-row-12');
  function info(el){
    if(!el)return null;
    const cs=getComputedStyle(el);
    const r=el.getBoundingClientRect();
    return {cls:el.className.slice(0,80), bg:cs.backgroundColor, styleBg:(el.getAttribute('style')||'').match(/background-color:[^;]*/)?.[0]||'',
      top:Math.round(r.top+window.scrollY), bottom:Math.round(r.bottom+window.scrollY), h:Math.round(r.height),
      radius:(el.getAttribute('style')||'').match(/border-radius:[^;]*/)?.[0]||'',
      padding:(el.getAttribute('style')||'').match(/padding:[^;]*/)?.[0]||''};
  }
  const ctor = document.querySelector('section.full-width .fusion-row');
  return {
    row10: info(row10), row11: info(row11), row12: info(row12),
    // list all fullwidth rows in order with their bg + y-range
    allRows: Array.from(document.querySelectorAll('.fusion-fullwidth.fullwidth-box')).map(info)
  };
});
console.log(JSON.stringify(res,null,2));
await browser.close();
