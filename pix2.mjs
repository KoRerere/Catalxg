import puppeteer from 'puppeteer';
import { readFileSync } from 'node:fs';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.goto('http://localhost:4173/', {waitUntil:'domcontentloaded'});
const b64=readFileSync('_after2.png').toString('base64');
const d=await page.evaluate(async (b64)=>{
  const img=new Image(); img.src='data:image/png;base64,'+b64; await img.decode();
  const c=document.createElement('canvas'); c.width=img.width;c.height=img.height;
  const ctx=c.getContext('2d'); ctx.drawImage(img,0,0);
  function hex(x,y){const d=ctx.getImageData(x,y,1,1).data;return '#'+[d[0],d[1],d[2]].map(v=>v.toString(16).padStart(2,'0')).join('');}
  const w=img.width,h=img.height;
  const row=[];
  // sample slightly off-center vertically to avoid heading text row
  for(let x=Math.floor(w*0.12); x<w*0.88; x+=Math.floor(w/9)){ row.push(hex(x, Math.floor(h*0.82))); }
  const rowMid=[];
  for(let x=Math.floor(w*0.12); x<w*0.88; x+=Math.floor(w/9)){ rowMid.push(hex(x, Math.floor(h*0.5))); }
  return {w,h,rowLow:row,rowMid};
}, b64);
console.log(JSON.stringify(d,null,2));
await browser.close();
