import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:692,height:900,deviceScaleFactor:2,isMobile:true,hasTouch:true});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2500)));
const res = await page.evaluate(()=>{
  const el=document.querySelector('.fusion-text-8');
  // walk up ancestors collecting box model
  const chain=[];
  let node=el;
  while(node && node!==document.body){
    const cs=getComputedStyle(node);
    const r=node.getBoundingClientRect();
    chain.push({tag:node.tagName, cls:(node.className||'').toString().slice(0,50),
      left:Math.round(r.left), right:Math.round(r.right), width:Math.round(r.width),
      padL:cs.paddingLeft, padR:cs.paddingRight, padT:cs.paddingTop,padB:cs.paddingBottom,
      marL:cs.marginLeft, marR:cs.marginRight,
      bg:cs.backgroundColor});
    node=node.parentElement;
  }
  return chain;
});
console.log(JSON.stringify(res,null,2));
await browser.close();
