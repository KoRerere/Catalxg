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
  // top band y=100-708: sample colors and light-pixel x-range
  const row=[];
  for(let x=0;x<w;x+=Math.floor(w/16)) row.push(hex(x,400));
  // check for green (product/image) pixels in top band
  let green=0, light=0;
  for(let y=100;y<708;y+=3)for(let x=0;x<w;x+=3){const d=ctx.getImageData(x,y,1,1).data;if(d[1]>120&&d[1]>d[0]+30&&d[1]>d[2]+30)green++;const lum=(d[0]+d[1]+d[2])/3;if(lum>120)light++;}
  return {row400:row, greenTop:green, lightTop:light};
}, b64);
console.log(JSON.stringify(d,null,2));
await browser.close();
