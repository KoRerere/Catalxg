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
  // downsample to ~60x40, classify each cell: '#' dark bg, '.' white bg, 'o' light text, 'g' green
  const cols=60,rows=44;
  const out=[];
  for(let r=0;r<rows;r++){
    let line='';
    for(let cc=0;cc<cols;cc++){
      const x=Math.floor((cc+0.5)*w/cols), y=Math.floor((r+0.5)*h/rows);
      const d=ctx.getImageData(x,y,1,1).data;
      const lum=(d[0]+d[1]+d[2])/3;
      const isGreen=d[1]>110&&d[1]>d[0]+25&&d[1]>d[2]+25;
      if(isGreen) line+='g';
      else if(lum<70) line+='X'; // dark bg
      else if(lum>190) line+='.'; // white/light bg
      else if(lum>120) line+='o'; // text
      else line+='x';
    }
    out.push(line);
  }
  return {w,h,map:out};
}, b64);
console.log('W',d.w,'H',d.h);
console.log(d.map.join('\n'));
await browser.close();
