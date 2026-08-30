import puppeteer from 'puppeteer';
import { readFileSync } from 'node:fs';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.goto('http://localhost:4173/', {waitUntil:'domcontentloaded'});
async function profile(path){
  const b64=readFileSync(path).toString('base64');
  return await page.evaluate(async ({b64})=>{
    const img=new Image(); img.src='data:image/png;base64,'+b64; await img.decode();
    const c=document.createElement('canvas'); c.width=img.width;c.height=img.height;
    const ctx=c.getContext('2d'); ctx.drawImage(img,0,0);
    const w=img.width,h=img.height;
    // dominant colors overall
    const counts={};
    for(let y=0;y<h;y+=6)for(let x=0;x<w;x+=6){const d=ctx.getImageData(x,y,1,1).data;const k='#'+[d[0],d[1],d[2]].map(v=>v.toString(16).padStart(2,'0')).join('');counts[k]=(counts[k]||0)+1;}
    const dom=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,5).map(([k,v])=>[k,v]);
    return {w,h,dom};
  }, {b64});
}
const user=await profile('_shot2.png');
const mine=await profile('_row7full.png');
console.log('USER', JSON.stringify(user));
console.log('MINE', JSON.stringify(mine));
await browser.close();
