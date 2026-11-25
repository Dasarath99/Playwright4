import { test, expect } from '@playwright/test';

import data from "../../Test data/Invalidcredentials.json";

test('Verify Login with Invalid Credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(data.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('alert').locator('div').filter({ hasText: /^Invalid credentials$/ }).dblclick();
});