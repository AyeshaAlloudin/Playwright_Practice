const { expect } = require('@playwright/test');

exports.Cart = class Cart {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.carttext = page.locator('//*[@id="header_container"]/div[2]/span');
        this.checkout = page.locator('//*[@id="checkout"]');
          
    }
    async clickcheckout() {
        await this.checkout.click();
    }
   
};