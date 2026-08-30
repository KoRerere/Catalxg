import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:1988,height:900,deviceScaleFactor:1});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2500)));
const res = await page.evaluate(()=>{
  const row=document.querySelector('.fusion-builder-row-11');
  const out=[];
  row.querySelectorAll('h4,p').forEach(el=>{
    const cs=getComputedStyle(el);
    out.push({tag:el.tagName, text:el.textContent.trim().slice(0,30), color:cs.color, fs:cs.fontSize});
  });
  // icon colors
  row.querySelectorAll('i').forEach(el=>{
    const cs=getComputedStyle(el);
    out.push({tag:'icon', color:cs.color, bg:cs.backgroundColor, cls:el.className.slice(0,40)});
  });
  return out;
});
console.log(JSON.stringify(res,null,2));
await browser.close();
