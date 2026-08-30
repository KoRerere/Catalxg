import puppeteer from 'puppeteer';
import { readFileSync } from 'node:fs';
const browser = await puppeteer.launch({executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:'new', args:['--no-sandbox']});
const page = await browser.newPage();
await page.setViewport({width:414,height:900,deviceScaleFactor:2,isMobile:true,hasTouch:true});
await page.goto('http://localhost:4173/', {waitUntil:'networkidle2', timeout:60000});
await page.evaluate(()=>new Promise(r=>setTimeout(r,2000)));
const txtEl = await page.$('.fusion-text-8');
await txtEl.scrollIntoView();
await page.evaluate(()=>new Promise(r=>setTimeout(r,400)));
// screenshot just the text element
await txtEl.screenshot({path:'_textelt.png'});
await browser.close();
console.log('saved _textelt.png');
