import { test, expect } from '@playwright/test';

import data from "../../Test data/BlankCredentials.json";

test('Verify Login with Blank Credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(data.username);
  await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Required').first().click();
  await page.getByText('Required').nth(1).click();
});