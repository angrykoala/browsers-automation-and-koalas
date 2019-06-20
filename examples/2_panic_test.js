const Wendigo = require('wendigo');

async function main() {
    const browser = await Wendigo.createBrowser();
    await browser.open("http://localhost:8002/panic.html");
    await browser.assert.text("p", "Don't Panic")
    await browser.assert.not.visible("img")
    await browser.click("button"); // Click all buttons
    await browser.assert.text("p", "AAAAH!")
    await browser.assert.visible("img")
    await browser.assert.attribute("img", "src", "aah.jpg")
    await browser.close();
    console.log("OK")
}

main();
