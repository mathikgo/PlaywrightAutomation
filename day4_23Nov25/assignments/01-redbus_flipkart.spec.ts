import { chromium, webkit, test } from '@playwright/test'

test(`Login to Redbus and Flipkart in two browsers`, async () => {

    //Launch chrome browser and create context and new page
    const browser1 = await chromium.launch({ channel: "chrome" });//I am having some issue to install edge hence using chrome
    const context1 = await browser1.newContext();
    const page1 = await context1.newPage();

    //Launch application url
    await page1.goto('https://www.redbus.in');

    //Get url and Title
    const url1 = page1.url();
    console.log(url1);

    const title1 = await page1.title();
    console.log(title1);

    //Launch webkit browser and create context and new page
    const browser2 = await webkit.launch();
    const context2 = await browser2.newContext();
    const page2 = await context2.newPage();

    //Launch application url
    await page2.goto('https://www.flipkart.com');

    //Get url and title
    const url2 = page2.url();
    console.log(url2);
    const title2 = await page2.title();
    console.log(title2);

})

/*
Home Assignment <2.2>
Red Bus and Flipkart in Edge and Webkit Browser Instances (Week2.Day2)
Learning Objective:
• Learn how to automate basic navigation to two different websites (Red Bus and Flipkart) in
two separate browser instances (Edge and Webkit) using Playwright.
Expected Completion Time:
• Best Case: 15 minutes
• Average Case: 20 minutes
Assignment Details:
Task:
Your task is to launch two separate browser instances using Playwright:
1. 2. Load Red Bus in an Edge browser instance and verify the page title and URL.
Load Flipkart in a Webkit browser instance and verify the page title and URL.
Preconditions:
1. 2. Use Playwright to launch Edge and Webkit.
Create two separate browser instances.
3. Use the following URLs: o Red Bus: https://www.redbus.in o Flipkart:
https://www.flipkart.com
• Red Bus (Edge): o Load the home page and print the page title and current URL.
Flipkart (Webkit): o Load the home page and print the page title and current URL.
Requirements:
Hints:
• Use page.title() to retrieve the page title.
• Use page.url() to retrieve the current page URL.
Expected Outcome:
• Upon completion, you should be able to navigate two websites in two separate browser
instances (Edge and Webkit), retrieve page information, and print the page titles and URLs.
*/