import puppeteer from 'puppeteer';
import { readFileSync } from 'node:fs';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.goto('http://localhost:4173/', {waitUntil:'domcontentloaded'});
async function profile(path, label){
  const b64=readFileSync(path).toString('base64');
  return await page.evaluate(async (o)=>{
    const img=new Image(); img.src='data:image/png;base64,'+o.b64; await img.decode();
    const c=document.createElement('canvas'); c.width=img.width;c.height=img.height;
    const ctx=c.getContext('2d'); ctx.drawImage(img,0,0);
    const w=img.width,h=img.height;
    function hex(d){return '#'+[d[0],d[1],d[2]].map(x=>x.toString(16).padStart(2,'0')).join('');}
    const mid=[];
    for(let x=0;x<w;x+=Math.floor(w/10)){mid.push(hex(ctx.getImageData(x,Math.floor(h/2),1,1).data));}
    return {label:o.label,w,h,mid};
  }, {b64,label});
}
const orig = await profile('_shot.png', 'USER-SCREENSHOT');
const mine = await profile('_botband.png', 'MY-RENDER-ROWBAND');
console.log(JSON.stringify({orig,mine},null,2));
await browser.close();
