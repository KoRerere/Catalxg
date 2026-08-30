import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:692,height:900,deviceScaleFactor:2,isMobile:true,hasTouch:true});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2500)));
const res=await page.evaluate(()=>{
  const txt=document.querySelector('.fusion-text-8');
  function bounds(){const r=txt.getBoundingClientRect(); return {left:Math.round(r.left),right:Math.round(r.right),w:Math.round(r.width), rightPct:Math.round(r.right/692*100)};}
  const base=bounds();
  // walk up, try removing padding-right and margin-right at each level
  const steps=[];
  let node=txt;
  while(node && node!==document.body){
    const cs=getComputedStyle(node);
    if(cs.paddingRight!=='0px' || cs.marginRight!=='0px'){
      page_info=null;
      const pr=cs.paddingRight, mr=cs.marginRight;
      node.style.setProperty('padding-right','0px','important');
      node.style.setProperty('margin-right','0px','important');
      steps.push({tag:node.tagName, cls:(node.className||'').toString().slice(0,40), paddingRightRemoved:pr, marginRightRemoved:mr, result:bounds()});
    }
    node=node.parentElement;
  }
  return {base, steps};
});
console.log(JSON.stringify(res,null,2));
await browser.close();
