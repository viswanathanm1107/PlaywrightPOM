const { expect } = require("@playwright/test")

export class HomePage {

    constructor(page) {

        this.page = page
        this.hamburgerMenu = page.locator("//img[@alt='menu']")
        this.signout = page.getByText('Sign out')
        this.carttext = page.getByText('Cart', { exact: true })

    }

    async verifycart() {

        await expect(this.carttext).toBeVisible()

    }

    async LogoutApplication() {

        await this.hamburgerMenu.click()
        await this.signout.click()

    }
}

