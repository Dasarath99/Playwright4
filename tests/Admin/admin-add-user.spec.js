import { test, expect } from '@playwright/test';

import data from "../../Test data/admin-add-user.json";

test('Verify Add User functionality', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(data.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'User Management' }).locator('i').click();
  await page.getByRole('listitem').filter({ hasText: /^Users$/ }).click();
  await page.getByRole('button', { name: ' Add' }).click();
});