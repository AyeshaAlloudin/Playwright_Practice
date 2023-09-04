const Base = require("@playwright/test");
//const { loginPage } = require('../pages/loginPage');
//const { productsPage } = require('../pages/productsPage');
import {login} from '../Pages/login';
import {inventory} from '../Pages/inventory';
import { Cart } from '../Pages/Cart';
import { CheckoutSteps } from '../Pages/CheckoutSteps';
import { CheckoutOverview } from '../Pages/CheckoutOverview';

exports.test = Base.test.extend({
    login: async ({page}, use) => {
        await use(new login(page))
    },
    inventory: async ({page}, use) => {
        await use(new inventory(page))
    },
    Cart: async ({page}, use) => {
        await use(new Cart(page))
    },
    CheckoutSteps: async ({page}, use) => {
        await use(new CheckoutSteps(page))
    },
    CheckoutOverview: async ({page}, use) => {
        await use(new CheckoutOverview(page))
    },
})

exports.verify = Base.expect
exports.expect = Base.expect
exports.request = Base.request