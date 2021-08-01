const puppeteer = require('puppeteer');
const HomePage = require('./HomePage');
var homePage = new HomePage();


(async () => {
    const browser = await puppeteer.launch({
      headless: false
    });

    const page = await browser.newPage();
    await page.goto('http://contractorsinsurancereview.com/ExampleForm/');
    await homePage.register(page,'uri','urix3600@gmail.com', '0506877754','Jones','51-500');
    await page.waitForTimeout(3000);
    await page.screenshot({path: './ScreenShot.png'});
    await homePage.clickSubmit(page);
    const title = await page.title();
    if (title == "Thank You"){
       console.log("You've reached the thank you page");
      }
    


    await browser.close();
  })()