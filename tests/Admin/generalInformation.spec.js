import { test, expect } from '@playwright/test';

test('Verify user can navigate to General Information page', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('link', { name: 'Admin' }).click();

    await page.getByText('Organization').click();

    await page.getByRole('listitem').filter({ hasText: /^General Information$/ }).click();

    await expect(page.getByText('General Information')).toBeVisible();

});


test('Verify organization details are displayed', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Navigate to Admin
    await page.getByRole('link', { name: 'Admin' }).click();

    // Navigate to Organization
    await page.getByText('Organization').click();

    // Click General Information
    await page.getByRole('listitem')
        .filter({ hasText: /^General Information$/ })
        .click();

    // Verify General Information page
    await expect(page.getByText('General Information')).toBeVisible();

    // Verify organization details
    await expect(page.getByText('Organization Name')).toBeVisible();
    await expect(page.getByText('Registration Number')).toBeVisible();
    await expect(page.getByText('Tax ID')).toBeVisible();
    await expect(page.getByText('Phone')).toBeVisible();
    await expect(page.getByText('Email')).toBeVisible();

});




test('Verify organization details can be updated', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Organization' }).click();
  await page.getByRole('menuitem', { name: 'General Information' }).click();
  await page.locator('.oxd-switch-input').click();
  await page.getByRole('checkbox', { name: 'Edit' }).check();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('OrangeHRM 123'); 
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('html').click();
});



test('Verify Verify validation message when Email field is left blank', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Organization' }).click();
  await page.getByRole('menuitem', { name: 'General Information' }).click();
  await page.getByText('Edit').click();
  await page.getByRole('checkbox', { name: 'Edit' }).check();
  await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-input').first().click();
  await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-input').first().fill('');
  await page.getByRole('button', { name: 'Save' }).click();
});
