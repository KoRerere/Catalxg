import puppeteer from 'puppeteer';
import { statSync } from 'node:fs';
const pages=['about','does-retatrutide-cause-hair-loss','how-to-get-retatrutide','is-bpc-157-legal-uk','klow-peptide','klow-peptide-dosage','priority-meds-reviews','retatrutide-reddit','the-glp-1-weight-loss-revolution-what-every-uk-patient-needs-to-know-before-starting-treatment','vegan-food-in-usa-the-10-must-visit-places','news-recipes','contact','contact-2','shop-2'];
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:692,height:900,deviceScaleFactor:2,isMobile:true,hasTouch:true});
const results=[];
for(const p of pages){
  try{
    await page.goto(`http://localhost:4173/${p}/`, {waitUntil:'networkidle2', timeout:45000});
    await page.evaluate(()=>new Promise(r=>setTimeout(r,1200)));
    const data=await page.evaluate(()=>{
      const rows=[...document.querySelectorAll('.fusion-fullwidth.fullwidth-box')];
      const hits=[];
      for(const rw of rows){
        const cs=getComputedStyle(rw);
        const bg=cs.backgroundColor;
        const isDark = bg==='rgb(31, 43, 38)'||bg==='rgb(45, 58, 53)'||bg==='rgb(20, 82, 63)';
        const txts=rw.querySelectorAll('.fusion-text, h1,h2,h3,h4,h5,h6, li, p');
        let minLeft=1e9,maxRight=0; txts.forEach(el=>{const rc=el.getBoundingClientRect();if(rc.width>0){minLeft=Math.min(minLeft,rc.left);maxRight=Math.max(maxRight,rc.right);}});
        if(maxRight<=0) continue;
        const rightPct=Math.round(maxRight/692*100);
        const leftPct=Math.round(minLeft/692*100);
        if(isDark && rightPct>=70 && rightPct<=92){
          hits.push({bg, leftPct, rightPct, hasIcon:!!rw.querySelector('i.fontawesome-icon'),
            text:(rw.querySelector('h2,h3,h4,strong,li,p,h1')?.textContent||'').trim().slice(0,50)});
        }
      }
      return hits;
    });
    if(data.length) results.push({page:p, hits:data});
  }catch(e){ results.push({page:p, error:e.message.slice(0,40)}); }
}
await browser.close();
console.log(JSON.stringify(results,null,2));
