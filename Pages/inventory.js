const { expect } = require('@playwright/test');

exports.inventory = class inventory {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.addtocard = page.locator('//*[@id="add-to-cart-sauce-labs-backpack"]');
        this.removecard = page.locator('//*[@id="remove-sauce-labs-backpack"]');
        this.productname = page.locator('//*[@id="item_4_title_link"]');
        this.bucket = page.locator('//*[@id="shopping_cart_container"]/a');
          
    }
    async clickadd() {
        await this.addtocard.click();
    }
    async clickremove() {
        await this.removecard.click();
    } 
    async clickbucket(){
        await this.bucket.click();
    }

};