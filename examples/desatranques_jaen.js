const Wendigo = require('wendigo');

async function main() {
    const navigationTimeout = 30000;
    const url = "www.desatranques.es";
    const browser = await Wendigo.createBrowser({
        // headless: false
    });
    console.log("Open", url)
    await browser.open(url);
    await browser.clickText("CAMISETAS");
    await browser.waitForNavigation(navigationTimeout);
    console.log("In Shop");
    const categoriesElement = await browser.findByTextContaining("#fav-nav", "Categorías")
    await categoriesElement[0].click();
    console.log("Sudaderas");
    await browser.clickText("#fav-nav", "Sudaderas");
    await browser.waitForNavigation(navigationTimeout);
    console.log("Item View")
    await browser.clickText(".product-container", "Sudadera con capucha", 1) // Only clicks first element
    await browser.waitForNavigation(navigationTimeout);
    console.log("Checkout")
    await browser.setValue(".quantity-input", 10)
    await browser.waitFor(".addtocart-button")
    await browser.click(".addtocart-button", 1);
    await browser.waitForNavigation(navigationTimeout);
    await browser.assert.text(".PricediscountedPriceWithoutTax", /\d{2},\d{2}\s\€/) // e.g. 27,99 €
    console.log("Price Per Item - OK")
    await browser.assert.text(".PricesalesPrice", /\d{3},\d{2}\s\€/) // e.g 237,99 €
    console.log("Total Price - OK")
    await browser.click(".vm2-remove_from_cart")
    await browser.waitForNavigation(navigationTimeout);
    await browser.assert.text(".PricebillTotal", "0,00 €")
    console.log("Empty Basket - OK")
    await browser.close();
}

main().then(() => {
    console.log("Finished");
}).catch((err) => {
    console.log(err);
})
