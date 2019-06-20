const Wendigo = require('wendigo');

async function main() {
    const browser = await Wendigo.createBrowser({
        headless: false,
        slowMo: 100
    });

    await browser.requests.mock("http://localhost:8002/api/form", { // Requests will be intercepted, different response will be returned
        body: "Fake Koala"
    })
    await browser.open("http://localhost:8002/form.html");
    await browser.clearValue("#first-name"); // Clears previous value
    await browser.type("#first-name", "Angry");
    await browser.clearValue("#last-name");
    await browser.type("#last-name", "Koala");
    await browser.click("input.submit");
    await browser.waitForNavigation(); // Go to new page, waits until loaded
    console.log(await browser.text("body"));
    await browser.close();
}


main();
