
const { expect } = require("@playwright/test")

export class LoginPage {

    constructor(page) {

        this.page = page
        this.username = page.getByRole('textbox', { name: 'Enter Email' })
        this.password = page.getByPlaceholder('Enter Password')
        this.loginbutton = page.getByRole('button', { name: 'Sign in' })
        this.signverify = page.getByRole('heading', { name: 'Sign In' })

    }

    async checksign() {

        expect(this.signverify).toBeVisible()

    }

    async loginApplication() {

        await this.username.fill("adminviswa@gmail.com")
        await this.password.fill("Duke@8228")
        await this.loginbutton.click()

    }
}
