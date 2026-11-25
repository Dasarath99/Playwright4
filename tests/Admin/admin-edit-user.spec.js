import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Admin');
  await page.getByText('-- Select --').first().click();
  await page.getByText('-- Select --').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
  await page.locator('form').getByText('Admin').click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('123gfkj');
  await page.getByRole('button', { name: 'Save' }).click();
});