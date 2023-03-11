// @ts-check
import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
	await page.goto('http://localhost:3000/login')

	await expect(page.locator('h2')).toContainText('Login')
})
