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
  row=(y)=>{ // average color per x-column over a y-range
    const res=[];
    for(let x=0;x<w;x+=4){let r=0,g=0,b=0,n=0;for(let y2=y;y2<Math.min(h,y+120);y2+=4){const d=ctx.getImageData(x,y2,1,1).data;r+=d[0];g+=d[1];b+=d[2];n++;}res.push([Math.round(x/w*100),Math.round(r/n),Math.round(g/n),Math.round(b/n)]);}
    return res;
  };
  // For a body-text slice y=960..1230, find where the sage-green block ENDS (dark block edge)
  // The screenshot bg is #202b26. Find rightmost x where bg is still dark-bg (not some other color)
  function blockEnd(y){
    // scan from right to left, but background throughout is #202b26 so we detect the container edge instead
    // Actually check if there's a lighter region on the far right (page bg vs block bg)
    const row=row(y);
    // print column brightness
    return row.map(([p,r,g,b])=>`${p}%:${(Math.round((r+g+b)/3))}`).join(' ');
  }
  return {w,h, band1:blockEnd(980), band2:blockEnd(1300)};
}, b64);
console.log(JSON.stringify(d,null,2));
await browser.close();
