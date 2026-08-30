import puppeteer from 'puppeteer';
import { readFileSync } from 'node:fs';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.goto('http://localhost:4173/', {waitUntil:'domcontentloaded'});
const b64=readFileSync('_after.png').toString('base64');
const d=await page.evaluate(async (b64)=>{
  const img=new Image(); img.src='data:image/png;base64,'+b64; await img.decode();
  const c=document.createElement('canvas'); c.width=img.width;c.height=img.height;
  const ctx=c.getContext('2d'); ctx.drawImage(img,0,0);
  function hex(x,y){const d=ctx.getImageData(x,y,1,1).data;return '#'+[d[0],d[1],d[2]].map(v=>v.toString(16).padStart(2,'0')).join('');}
  const w=img.width,h=img.height;
  // sample the band interior (avoid text centers) around y=half
  const row=[];
  for(let x=Math.floor(w*0.1); x<w*0.9; x+=Math.floor(w/10)){ row.push([Math.floor(x/w*100)+'%', hex(x, Math.floor(h*0.55))]); }
  return {w,h,row};
}, b64);
console.log(JSON.stringify(d,null,2));
await browser.close();
