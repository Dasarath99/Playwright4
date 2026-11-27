import { test, expect } from '@playwright/test';

test('Verify user can delete an existing employment status', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Employment Status' }).click();
  await page.locator('div:nth-child(5) > .oxd-table-row > div:nth-child(3) > .oxd-table-cell-actions > button').first().click();
  await page.getByRole('button', { name: ' Yes, Delete' }).click();
});