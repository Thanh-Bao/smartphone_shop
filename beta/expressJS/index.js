const express = require('express')
const app = express()
const port = 4000
const puppeteer = require('puppeteer');

app.get('/', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://bonsai.bao.name.vn', { waitUntil: 'domcontentloaded' });
    // Wait for 5 seconds
    await delay(10000);
    const xxx = await page.content();
    // Take screenshot
    await browser.close();

    res.send(xxx);
})

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

