import puppeteer from 'puppeteer';
import { readFileSync } from 'node:fs';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.goto('http://localhost:4173/', {waitUntil:'domcontentloaded'});
const b64 = readFileSync('_full.png').toString('base64');
const data = await page.evaluate(async (b64)=>{
  const img=new Image(); img.src='data:image/png;base64,'+b64; await img.decode();
  const c=document.createElement('canvas'); c.width=img.width; c.height=img.height;
  const ctx=c.getContext('2d'); ctx.drawImage(img,0,0);
  const w=img.width,h=img.height;
  function hex(d){return '#'+[d[0],d[1],d[2]].map(x=>x.toString(16).padStart(2,'0')).join('');}
  // scan down at a few x positions, find sage bands
  const xs=[Math.floor(w*0.12),Math.floor(w*0.25),Math.floor(w*0.5),Math.floor(w*0.75)];
  const out=[]; 
  const sagexs=xs.map(()=>[]);
  for(let y=0;y<h;y+=3){
    xs.forEach((x,i)=>{
      const d=ctx.getImageData(x,y,1,1).data;
      // sage near 148,180,170 / #a8dcc8 near 168,220,200
      const s=(Math.abs(d[0]-160)<40&&Math.abs(d[1]-200)<45&&Math.abs(d[2]-185)<45);
      if(s) sagexs[i].push(y);
    });
  }
  // For each x, find contiguous ranges
  function ranges(arr){
    if(!arr.length)return[];
    const r=[]; let s=arr[0],p=arr[0];
    for(let i=1;i<arr.length;i++){ if(arr[i]-p>6){r.push([s,p]);s=arr[i];} p=arr[i]; }
    r.push([s,p]); return r.filter(x=>x[1]-x[0]>20);
  }
  return {w,h, sageAt: xs.map((x,i)=>({x, ranges:ranges(sagexs[i]).map(r=>({y0:r[0],y1:r[1]}))})) };
}, b64);
console.log(JSON.stringify(data,null,2));
await browser.close();
