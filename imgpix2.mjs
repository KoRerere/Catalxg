import puppeteer from 'puppeteer';
import { readFileSync } from 'node:fs';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.goto('http://localhost:4173/', {waitUntil:'domcontentloaded'});
const b64 = readFileSync('_shot.png').toString('base64');
const data = await page.evaluate(async (b64)=>{
  const img = new Image();
  img.src = 'data:image/png;base64,'+b64;
  await img.decode();
  const c=document.createElement('canvas'); c.width=img.width; c.height=img.height;
  const ctx=c.getContext('2d'); ctx.drawImage(img,0,0);
  const w=img.width,h=img.height;
  // exact (not quantized) colors along several rows
  function hex(d){return '#'+[d[0],d[1],d[2]].map(x=>x.toString(16).padStart(2,'0')).join('');}
  const rows=[5, Math.floor(h*0.2), Math.floor(h*0.5), Math.floor(h*0.8), h-5];
  const out={};
  for(const y of rows){
    const row=[];
    for(let x=0;x<w;x+=Math.floor(w/24)){
      row.push([Math.floor(x/w*100)+'%',hex(ctx.getImageData(x,y,1,1).data)]);
    }
    out['y'+y]=row;
  }
  return {w,h,rows:out};
}, b64);
console.log(JSON.stringify(data,null,2));
await browser.close();
