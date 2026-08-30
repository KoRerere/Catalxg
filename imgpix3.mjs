import puppeteer from 'puppeteer';
import { readFileSync } from 'node:fs';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.goto('http://localhost:4173/', {waitUntil:'domcontentloaded'});
const b64 = readFileSync('_shot.png').toString('base64');
const data = await page.evaluate(async (b64)=>{
  const img = new Image();
  img.src = 'data:image/png;base64,'+b64;
  await img.decode();
  const c=document.createElement('canvas'); c.width=img.width; c.height=img.height;
  const ctx=c.getContext('2d'); ctx.drawImage(img,0,0);
  const w=img.width,h=img.height;
  function hex(d){return '#'+[d[0],d[1],d[2]].map(x=>x.toString(16).padStart(2,'0')).join('');}
  // count how many rows are sage at x=50% (avoid text/edges)
  const x=Math.floor(w*0.25);
  const profile=[];
  for(let y=0;y<h;y+=2){
    profile.push(hex(ctx.getImageData(x,y,1,1).data));
  }
  // determine transitions
  return {h,x,profile};
}, b64);
// collapse run-lengths
const p=data.profile;
const rl=[];
let start=0, cur=p[0];
for(let i=1;i<p.length;i++){
  if(p[i]!==cur){ rl.push([start,i,cur]); start=i; cur=p[i]; }
}
rl.push([start,p.length,cur]);
console.log('height',data.h,'x',data.x,'runs (y0,y1,color):');
for(const r of rl){ if(r[1]-r[0]>=1) console.log(r[0]+'-'+r[1], r[2], 'len'+ (r[1]-r[0])); }
await browser.close();
