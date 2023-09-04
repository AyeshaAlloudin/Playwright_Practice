const { expect } = require('@playwright/test');

exports.CheckoutOverview= class CheckoutOverview {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.finish = page.locator('//*[@id="finish"]');
         this.thnkstxt = page.locator('//*[@id="checkout_complete_container"]/h2') 
    }
    async clickfinish() {
        await this.finish.click();
    }
   
};