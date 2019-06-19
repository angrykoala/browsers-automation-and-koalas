const Wendigo=require('wendigo');

async function main(){
    const browser = await Wendigo.createBrowser({
        // headless: true
    });
    await browser.open("http://localhost:8002/simple.html");
    const myTexts=await browser.text("p"); // Get all paragraphs
    console.log(myTexts[0]);
    await browser.click("button"); // Click all buttons
    const myNewTexts=await browser.text("p"); // Get all paragraphs
    console.log(myNewTexts[0]);
    await browser.close();
}


main();
