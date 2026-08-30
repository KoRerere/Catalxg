import puppeteer from 'puppeteer';
import { readFileSync } from 'node:fs';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.goto('http://localhost:4173/', {waitUntil:'domcontentloaded'});
const b64=readFileSync('_shot2.png').toString('base64');
const d=await page.evaluate(async (b64)=>{
  const img=new Image(); img.src='data:image/png;base64,'+b64; await img.decode();
  const c=document.createElement('canvas'); c.width=img.width;c.height=img.height;
  const ctx=c.getContext('2d'); ctx.drawImage(img,0,0);
  const w=img.width,h=img.height;
  function hex(x,y){const d=ctx.getImageData(x,y,1,1).data;return '#'+[d[0],d[1],d[2]].map(v=>v.toString(16).padStart(2,'0')).join('');}
  // vertical profile at a few x positions
  const out={w,h,vertical:{}, horiz:{}};
  const xs=[Math.floor(w*0.1),Math.floor(w*0.3),Math.floor(w*0.5),Math.floor(w*0.7),Math.floor(w*0.9)];
  for(const x of xs){
    const col=[];
    for(let y=0;y<h;y+=Math.floor(h/12)) col.push([Math.floor(y/h*100)+'%',hex(x,y)]);
    out.vertical[x]=col;
  }
  // horizontal at a few y
  const ys=[Math.floor(h*0.2),Math.floor(h*0.5),Math.floor(h*0.8)];
  for(const y of ys){
    const row=[];
    for(let x=0;x<w;x+=Math.floor(w/14)) row.push([Math.floor(x/w*100)+'%',hex(x,y)]);
    out.horiz[y]=row;
  }
  return out;
}, b64);
console.log(JSON.stringify(d,null,2));
await browser.close();
