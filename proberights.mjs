import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:1988,height:900,deviceScaleFactor:1});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2500)));
const res = await page.evaluate(()=>{
  const rows=[...document.querySelectorAll('.fusion-fullwidth.fullwidth-box')];
  const out=[];
  for(const rw of rows){
    const cs=getComputedStyle(rw);
    if(cs.backgroundColor==='rgb(31, 43, 38)'){
      // get all text blocks (fusion-text, h1-h6, p wrappers) inside with their left/right position + container padding
      const txts=rw.querySelectorAll('.fusion-text, h1,h2,h3,h4,h5,h6, li, p');
      let minLeft=1e9,maxRight=0;
      txts.forEach(el=>{
        const rc=el.getBoundingClientRect();
        if(rc.width>0){ minLeft=Math.min(minLeft, rc.left); maxRight=Math.max(maxRight, rc.right); }
      });
      out.push({cls:rw.className.match(/fusion-builder-row-\d+/)?.[0], top:Math.round(rw.getBoundingClientRect().top+window.scrollY),
        bg:cs.backgroundColor,
        textSpan:[Math.round(minLeft),Math.round(maxRight)], rightGapToViewport: Math.round(1988-maxRight),
        hasList: !!rw.querySelector('ul,ol'), hasIcon: !!rw.querySelector('i.fontawesome-icon'),
        sampleText: (rw.querySelector('h1,h2,h3,h4,strong,p')?.textContent||'').trim().slice(0,60)
      });
    }
  }
  return out;
});
console.log(JSON.stringify(res,null,2));
await browser.close();
