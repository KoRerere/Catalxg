import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:1988,height:900,deviceScaleFactor:1});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2500)));
const res = await page.evaluate(()=>{
  const row11=document.querySelector('.fusion-builder-row-11');
  const r=row11.getBoundingClientRect();
  const y=r.top+window.scrollY; // doc coords
  window.scrollTo(0, y-20);
  return {top:Math.round(y), h:Math.round(r.height)};
});
await page.evaluate(()=>new Promise(r=>setTimeout(r,400)));
// sample specific viewport y positions now that scrolled; row11 top at viewport y=20
const px = await page.evaluate(()=>{
  function hex(x,y){const el=document.elementFromPoint(x,y); return null;}
  // draw onto canvas read from screenshot below instead
  return null;
});
// take screenshot in viewport coords: row11 spans viewport y=20 to 20+169
await page.screenshot({path:'_after2.png', clip:{x:500,y:20,width:900,height:170}});
await browser.close();
console.log(JSON.stringify(res));
