import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:1988,height:900,deviceScaleFactor:1});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2500)));
const res = await page.evaluate(()=>{
  // direct children of row-7
  const row=document.querySelector('.fusion-builder-row-7');
  const out={rowBg:getComputedStyle(row).backgroundColor};
  const direct=row.querySelector(':scope > .fusion-builder-row');
  const cols=direct?Array.from(direct.children).map(c=>({
    cls:c.className.slice(0,60), left:Math.round(c.getBoundingClientRect().left),
    right:Math.round(c.getBoundingClientRect().right), w:Math.round(c.getBoundingClientRect().width)
  })):[];
  out.cols=cols;
  // Are there sibling content columns besides column-21?
  const allCols=row.querySelectorAll('.fusion-layout-column');
  out.allColCount=allCols.length;
  return out;
});
console.log(JSON.stringify(res,null,2));
await browser.close();
