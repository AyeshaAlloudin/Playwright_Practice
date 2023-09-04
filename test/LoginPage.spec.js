const { test, verify } = require('../fixtures/base');
/*import {login} from '../Pages/login';
import {inventory} from '../Pages/inventory';*/
const data= require('../data/test-data.json');
const { expect } = require('@playwright/test');

test.describe("e2e Test", () => {

    test.beforeEach(async ({ page, login }, testInfo) => {
      await login.navigateUrl()
      await login.login(data.username,data.Password)
    })

    test('Add to Cart product and checkout process ', async ({ page, inventory , Cart , CheckoutSteps, CheckoutOverview }) => {
      // verify product name 
       // Get product name  text in veriable .
       const text1= await inventory.productname.textContent();
      await console.log(text1);
      // verify the Remove text
      await expect(text1).toEqual("Sauce Labs Backpack");
      await inventory.clickadd();
      // Get remove text in veriable .
      const text= await inventory.removecard.textContent();
      await console.log(text);
      // verify the Remove text
      await expect(text).toEqual(data.removetxt);
      //click on card bucket
      await inventory.clickbucket();
       // verify product name 
       // Get cart page text in veriable .
       const Ctext= await Cart.carttext.textContent();
      await console.log(Ctext);
      // verify the cart page text 
      await expect(Ctext).toEqual(data.carttxt);
      await Cart.clickcheckout();
      // verify check out page text .
      const checktext= await CheckoutSteps.checkouttext.textContent();
      await console.log(checktext);
      await expect(checktext).toEqual(data.checkouttxt);
      // add information
      await CheckoutSteps.addinformation(data.Fname, data.Lname , data.Zcode);
     await CheckoutSteps.clickcontinue();
     // overview and click finished 
     await CheckoutOverview.clickfinish();
     //Verify order place successfully.
     const thntext1= await CheckoutOverview.thnkstxt.textContent();
      await console.log(thntext1);
      await expect(thntext1).toEqual(data.thankstxt);
    })
   
})
