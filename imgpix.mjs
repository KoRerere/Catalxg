import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
const localPath = 'http://localhost:4173/';
await page.goto(localPath, {waitUntil:'domcontentloaded'});
// Read the local screenshot via server? No. Instead use fs to read into base64 and set as img src.
import { readFileSync } from 'node:fs';
const b64 = readFileSync('_shot.png').toString('base64');
const data = await page.evaluate(async (b64)=>{
  const img = new Image();
  img.src = 'data:image/png;base64,'+b64;
  await img.decode();
  const c = document.createElement('canvas');
  c.width = img.width; c.height = img.height;
  const ctx = c.getContext('2d');
  ctx.drawImage(img,0,0);
  const w = img.width, h = img.height;
  const counts = {};
  function hex(r,g,b){return '#'+[r,g,b].map(x=>x.toString(16).padStart(2,'0')).join('');}
  for(let y=0;y<h;y+=4){
    for(let x=0;x<w;x+=4){
      const d = ctx.getImageData(x,y,1,1).data;
      const r=Math.round(d[0]/8)*8, g=Math.round(d[1]/8)*8, b=Math.round(d[2]/8)*8;
      const k = hex(r,g,b);
      counts[k]=(counts[k]||0)+1;
    }
  }
  const sorted = Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,12);
  const mid = [];
  const my = Math.floor(h/2);
  for(let x=0;x<w;x+=Math.floor(w/20)){
    const d=ctx.getImageData(x,my,1,1).data;
    mid.push([Math.floor(x/w*100)+'%', hex(d[0],d[1],d[2])]);
  }
  return {width:w,height:h,dominant:sorted,midLine:mid};
}, b64);
console.log(JSON.stringify(data,null,2));
await browser.close();
