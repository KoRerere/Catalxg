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
  // Find horizontal bands with light (text) pixels -> lines of text
  const rows=[];
  for(let y=0;y<h;y+=2){
    let cnt=0;
    for(let x=0;x<w;x+=3){const d=ctx.getImageData(x,y,1,1).data;const lum=(d[0]+d[1]+d[2])/3; if(lum>120)cnt++;}
    rows.push([y,cnt]);
  }
  // group contiguous rows with cnt>5
  const lines=[]; let s=null;
  for(const [y,c] of rows){ if(c>5 && s===null) s=y; else if(c<=5 && s!==null){ lines.push([s,y]); s=null; } }
  if(s!==null) lines.push([s,h]);
  const significant=lines.filter(([a,b])=>b-a>8);
  return {h, lines: significant.map(([a,b])=>({y0:a,y1:b, center:Math.round((a+b)/2/h*100)}))};
}, b64);
console.log(JSON.stringify(d,null,2));
await browser.close();
