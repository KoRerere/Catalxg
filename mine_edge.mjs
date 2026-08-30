import puppeteer from 'puppeteer';
import { readFileSync } from 'node:fs';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.goto('http://localhost:4173/', {waitUntil:'domcontentloaded'});
const b64=readFileSync('_row7full.png').toString('base64');
const d=await page.evaluate(async (b64)=>{
  const img=new Image(); img.src='data:image/png;base64,'+b64; await img.decode();
  const c=document.createElement('canvas'); c.width=img.width;c.height=img.height;
  const ctx=c.getContext('2d'); ctx.drawImage(img,0,0);
  const w=img.width,h=img.height;
  function prof(y0,y1){
    let first=null,last=null;
    for(let x=0;x<w;x+=2){
      let mx=0; for(let y=y0;y<y1;y+=4){const d=ctx.getImageData(x,y,1,1).data;const v=(d[0]+d[1]+d[2])/3;mx=Math.max(mx,v);}
      if(mx>150){ if(first===null)first=x; last=x; }
    }
    return {w, first:first!==null?Math.round(first/w*100):null, last:last!==null?Math.round(last/w*100):null};
  }
  // find a text band (white text) — scan for rows with light pixels
  const bands=[];
  for(let y=0;y<h;y+=6){let cnt=0;for(let x=0;x<w;x+=4){const d=ctx.getImageData(x,y,1,1).data;const v=(d[0]+d[1]+d[2])/3;if(v>150)cnt++;}bands.push([y,cnt]);}
  // pick the widest text band region
  const textRows=bands.filter(([,c])=>c>20).map(([y])=>y);
  const y0=Math.min(...textRows), y1=Math.max(...textRows);
  return {h,w,textYRange:[y0,y1], textBounds:prof(y0,y1)};
}, b64);
console.log(JSON.stringify(d,null,2));
await browser.close();
