import puppeteer from 'puppeteer';
import { readFileSync } from 'node:fs';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.goto('http://localhost:4173/', {waitUntil:'domcontentloaded'});
const b64 = readFileSync('_full.png').toString('base64');
const data = await page.evaluate(async ({b64,y0,y1})=>{
  const img=new Image(); img.src='data:image/png;base64,'+b64; await img.decode();
  const c=document.createElement('canvas'); c.width=img.width; c.height=img.height;
  const ctx=c.getContext('2d'); ctx.drawImage(img,0,0);
  const w=img.width;
  function hex(d){return '#'+[d[0],d[1],d[2]].map(x=>x.toString(16).padStart(2,'0')).join('');}
  const out={band:{y0,y1}, rows:{}};
  for(const y of [y0+3, Math.floor((y0+y1)/2), y1-3]){
    const row=[];
    for(let x=0;x<w;x+=Math.floor(w/16)){ row.push(hex(ctx.getImageData(x,y,1,1).data)); }
    out.rows[y]=row;
  }
  return out;
}, {b64,y0:6540,y1:6740});
console.log(JSON.stringify(data,null,2));
await browser.close();
