const { expect } = require('@playwright/test');
const data= require('../data/test-data.json')
exports.login = class Login {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.url = data.URL;
        this.username = page.locator('[data-test="username"]');
        this.pasword = page.locator('[data-test="password"]')
        this.loginbtn = page.locator('[data-test="login-button"]')
    }
    async navigateUrl() {
        await this.page.goto(this.url);
    }
    async login(Username, Password) {
        await this.username.click();
        await this.username.fill(Username);
        await this.pasword.click();
        await this.pasword.fill(Password);
        await this.loginbtn.click();
    }

};