import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:414,height:900,deviceScaleFactor:2,isMobile:true,hasTouch:true});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2500)));
const res=await page.evaluate(()=>{
  const vw=window.innerWidth;
  const txt=document.querySelector('.fusion-text-8');
  const chain=[];
  let n=txt;
  while(n && n!==document.body){
    const cs=getComputedStyle(n); const r=n.getBoundingClientRect();
    chain.push({tag:n.tagName, cls:(n.className||'').toString().slice(0,45),
      L:Math.round(r.left), R:Math.round(r.right), W:Math.round(r.width),
      padR:cs.paddingRight, marR:cs.marginRight, bg:cs.backgroundColor});
    n=n.parentElement;
  }
  return {vw, text:chain[0], chain};
});
console.log(JSON.stringify(res,null,2));
await browser.close();
