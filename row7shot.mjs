import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:692,height:900,deviceScaleFactor:2,isMobile:true,hasTouch:true});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2500)));
await page.evaluate(()=>{ const el=document.querySelector('.fusion-builder-row-7'); el.scrollIntoView(); window.scrollBy(0,-100); });
await page.evaluate(()=>new Promise(r=>setTimeout(r,600)));
// capture the text-8 element
const el=await page.$('.fusion-text-8');
const box=await el.boundingBox();
console.log('text-8 box', box);
await page.screenshot({path:'_row7.png'}, {clip:{x:0,y:Math.max(0,box.y-20),width:692,height:Math.min(700,box.height+40)}});
await browser.close();
console.log('saved _row7.png');
