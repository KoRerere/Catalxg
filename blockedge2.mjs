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
  function brightness(y,x){const d=ctx.getImageData(x,y,1,1).data;return (d[0]+d[1]+d[2])/3;}
  // For a slice [y0,y1], output per-column min brightness (to catch light text/edges)
  function colProfile(y0,y1){
    const res=[];
    for(let x=0;x<w;x+=8){
      let mn=255,mx=0;
      for(let y=y0;y<y1;y+=6){const v=brightness(y,x); mn=Math.min(mn,v); mx=Math.max(mx,v);}
      res.push({p:Math.round(x/w*100), mn:Math.round(mn), mx:Math.round(mx)});
    }
    return res;
  }
  return {w,h, bodySlice: colProfile(980,1230)};
}, b64);
console.log('body slice (per 1.1%-col: minBrightness,maxBrightness):');
console.log(d.bodySlice.map(o=>`${o.p}%:${o.mn}-${o.mx}`).join(' '));
await browser.close();
