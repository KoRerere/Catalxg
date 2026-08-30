import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:1988,height:412,deviceScaleFactor:2});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2500)));
// Take screenshot of the hero/row-2 area currently visible
await page.screenshot({path:'_pageview.png'});
// Also dump the hero section computed bg
const hero = await page.evaluate(()=>{
  const sec=document.querySelector('.fusion-builder-row-2');
  const cs=sec?getComputedStyle(sec):null;
  // list background-slider imgs and their container
  const slider=document.querySelector('.fusion-builder-row-2 .awb-background-slider .swiper-slide img');
  return {bg:cs?cs.backgroundColor:null,
    sliderImg: slider?{src:slider.getAttribute('data-orig-src')||slider.src, w:slider.naturalWidth,h:slider.naturalHeight}:null,
    secRect: sec?{y:sec.getBoundingClientRect().top, h:sec.getBoundingClientRect().height}:null};
});
console.log(JSON.stringify(hero,null,2));
await browser.close();
