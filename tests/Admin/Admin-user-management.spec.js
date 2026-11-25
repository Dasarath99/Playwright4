import { test, expect } from '@playwright/test';

import data from "../../Test data/Admin-user-management.json";


test(data.testCase, async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(data.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: data.module }).click();
  await page.getByRole('navigation', { name: 'Topbar Menu' }).getByText('User Management').click();
  await page.getByRole('menu').click();
  await expect(page.getByRole('listitem').filter({ hasText: data.functionality })).toBeVisible();
  await page.getByRole('listitem').filter({ hasText: data.functionality }).locator('i').click();
  await page.getByRole('menu').click();
});