
import { test, expect } from '@playwright/test'
import { url } from 'node:inspector'

test.use({ viewport: { width: 1500, height: 1000 } })

test("normal", async function ({ page }) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.waitForTimeout(3000)

    console.log(await page.viewportSize().width)

    console.log(await page.viewportSize().height)

    await page.getByPlaceholder('Username').fill("Admin")
    await page.locator('input[name="password"]').fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()

    await page.waitForTimeout(3000)

    const uRL = await page.url
    console.log("Current URL" + uRL)

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    await page.waitForTimeout(3000)


})