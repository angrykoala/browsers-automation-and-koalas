"use strict";

const Wendigo = require('wendigo');

const navigationTimeout = 30000;

describe("En Desatranques Jaén", function() {
    this.timeout(20000);
    let browser;

    before(async () => {
        browser = await Wendigo.createBrowser();
    });

    after(async () => {
        await browser.close();
    });

    it("Desatrancamos caminos", async () => {
        await browser.open('www.desatranques.es');

        await browser.clickText("CAMISETAS");
        await browser.waitForNavigation(navigationTimeout);
        await browser.assert.url("https://www.desatranques.es/tienda/index.php");
    });

    it("Decidme en el alma quién", async () => {
        await browser.open('https://www.desatranques.es/tienda/index.php');

        const categoriesElement = await browser.findByTextContaining("#fav-nav", "Categorías");
        await categoriesElement[0].click();
        await browser.clickText("#fav-nav", "Sudaderas");
        await browser.waitForNavigation(navigationTimeout);
        await browser.assert.url("https://www.desatranques.es/tienda/index.php/videos/sudaderas");

    });

    it("Quién atrancó tu destino.", async () => {
        await browser.open("https://www.desatranques.es/tienda/index.php/videos/sudaderas");

        await browser.clickText(".product-container", "Sudadera con capucha", 1); // Only clicks first element
        await browser.waitForNavigation(navigationTimeout);
        await browser.assert.url(/www\.desatranques\.es\/tienda\/index\.php\/videos\/sudaderas\/sudadera\-con\-capucha/);
    });

    it("Llama a Desatranques Jaén", async () => {
        await browser.open("https://www.desatranques.es/tienda/index.php/videos/sudaderas/sudadera-con-capucha-1-detail");

        await browser.setValue(".quantity-input", 10);
        await browser.waitFor(".addtocart-button");
        await browser.click(".addtocart-button", 1);
        await browser.waitForNavigation(navigationTimeout);

        await browser.assert.url(/https:\/\/www\.desatranques\.es\/tienda\/index\.php\/carrito/); // URL may have dangling querystring
        await browser.assert.text(".PricediscountedPriceWithoutTax", /\d{2},\d{2}\s\€/) // e.g. 27,99 €
        await browser.assert.text(".PricesalesPrice", /\d{3},\d{2}\s\€/) // e.g 237,99 €
        await browser.click(".vm2-remove_from_cart")
        await browser.waitForNavigation(navigationTimeout);
        await browser.assert.text(".PricebillTotal", "0,00 €");
    })
});
