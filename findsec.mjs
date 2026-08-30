import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:1988,height:900,deviceScaleFactor:2});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2000)));
const res = await page.evaluate(()=>{
  function hex(c){return '#'+[c[0],c[1],c[2]].map(x=>x.toString(16).padStart(2,'0')).join('');}
  const found=[];
  document.querySelectorAll('*').forEach(el=>{
    const cs=getComputedStyle(el);
    const bg=cs.backgroundColor;
    const m=bg.match(/rgba?\(([^)]+)\)/);
    if(!m) return;
    const parts=m[1].split(',').map(s=>parseFloat(s));
    const [r,g,b,a]=parts.length===4?parts:[parts[0],parts[1],parts[2],1];
    if(a<0.05) return;
    // sage-ish: near (148,180,170)
    const dr=Math.abs(r-148), dg=Math.abs(g-180), db=Math.abs(b-170);
    if(dr<25&&dg<25&&db<25){
      const rect=el.getBoundingClientRect();
      found.push({cls:el.className&&el.className.toString().slice(0,80), tag:el.tagName,
        bg:hex([r,g,b]), x:Math.round(rect.x), y:Math.round(rect.y+window.scrollY),
        w:Math.round(rect.width), h:Math.round(rect.height)});
    }
  });
  return found;
});
console.log(JSON.stringify(res,null,2));
await browser.close();
