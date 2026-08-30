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
  // how many light/white pixels (text) vs dark
  let light=0,dark=0;
  for(let y=0;y<h;y+=3) for(let x=0;x<w;x+=3){const d=ctx.getImageData(x,y,1,1).data; const lum=(d[0]+d[1]+d[2])/3; if(lum>120)light++; else dark++;}
  // detect text column left/right bounds: per-x-column count of light pixels
  const lightPerCol=[];
  for(let x=0;x<w;x+=4){let c=0;for(let y=0;y<h;y+=4){const d=ctx.getImageData(x,y,1,1).data;const lum=(d[0]+d[1]+d[2])/3; if(lum>120)c++;} lightPerCol.push([x,c]);}
  // find range where light pixels exist (text)
  const colsWithText=lightPerCol.filter(([,v])=>v>0).map(([x])=>x);
  const textMin=colsWithText.length?Math.min(...colsWithText):null;
  const textMax=colsWithText.length?Math.max(...colsWithText):null;
  const midHoriz=[];
  for(let x=0;x<w;x+=Math.floor(w/20)){midHoriz.push([Math.floor(x/w*100)+'%',hex(x,Math.floor(h*0.5))]);}
  return {light,dark,textMin,textMax,textLeftPct:textMin!==null?Math.floor(textMin/w*100):null,textRightPct:textMax!==null?Math.floor(textMax/w*100):null,midHoriz};
}, b64);
console.log(JSON.stringify(d,null,2));
await browser.close();
