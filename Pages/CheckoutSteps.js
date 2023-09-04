const { expect } = require('@playwright/test');

exports.CheckoutSteps = class CheckoutSteps {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.checkouttext = page.locator('//*[@id="header_container"]/div[2]/span');
        this.fname = page.locator('//*[@id="first-name"]');
        this.lname = page.locator('//*[@id="last-name"]'); 
        this.zcode = page.locator('//*[@id="postal-code"]');
        this.continuebtn = page.locator('//*[@id="continue"]');
    }
    async addinformation(Fname, Lname , Zcode) {
        await this.fname.click();
        await this.fname.fill(Fname);
        await this.lname.click();
        await this.lname.fill(Lname);
        await this.zcode.click();
        await this.zcode.fill(Zcode);
    }
async clickcontinue(){
await this.continuebtn.click();
}
   
};