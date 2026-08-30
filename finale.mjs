import puppeteer from 'puppeteer';
import { readFileSync } from 'node:fs';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.goto('http://localhost:4173/', {waitUntil:'domcontentloaded'});
const b64=readFileSync('_after-text.png').toString('base64');
const d=await page.evaluate(async (b64)=>{
  const img=new Image(); img.src='data:image/png;base64,'+b64; await img.decode();
  const c=document.createElement('canvas'); c.width=img.width;c.height=img.height;
  const ctx=c.getContext('2d'); ctx.drawImage(img,0,0);
  const w=img.width,h=img.height;
  // detect rightmost light-text pixel across the whole area
  let last=-1, first=-1;
  for(let x=0;x<w;x++){let has=false;for(let y=0;y<h;y+=4){const d=ctx.getImageData(x,y,1,1).data;const v=(d[0]+d[1]+d[2])/3;if(v>150){has=true;break;}}if(has){if(first<0)first=x; last=x;}}
  return {w, firstPct:Math.round(first/w*100), lastPct:Math.round(last/w*100), rightGapPct:Math.round((w-1-last)/w*100)};
}, b64);
console.log(JSON.stringify(d,null,2));
await browser.close();
