import { test, expect } from '@playwright/test';

test('Verify Work Shifts Navigation', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job', { exact: true }).click();
  await page.getByRole('listitem').filter({ hasText: /^Work Shifts$/ }).click();
  await page.getByRole('button', { name: ' Add' }).click();
});





test('Verify Work Shift Creation', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).dblclick();
  await page.getByText('Job', { exact: true }).click();
  await page.getByRole('listitem').filter({ hasText: /^Work Shifts$/ }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Morning shift');
  await page.getByRole('textbox', { name: 'hh:mm' }).first().click();
  await page.locator('input[name="am"]').check();
  await page.getByRole('textbox', { name: 'hh:mm' }).nth(1).click();
  await page.locator('input[name="pm"]').check();
  await page.getByText('8.00').click();
  await page.getByRole('button', { name: 'Save' }).click();
});


test('Edit Work Shift', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job', { exact: true }).click();
  await page.getByRole('menuitem', { name: 'Work Shifts' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Day shift');
  await page.getByRole('textbox', { name: 'hh:mm' }).first().click();
  await page.locator('.oxd-icon.bi-chevron-down.oxd-icon-button__icon.oxd-time-minute-input-down').click();
  await page.locator('.oxd-icon.bi-chevron-down.oxd-icon-button__icon').first().click();
  await page.locator('.oxd-icon.bi-chevron-down.oxd-icon-button__icon').first().click({
    clickCount: 4
  });
  await page.locator('.oxd-icon.bi-chevron-down.oxd-icon-button__icon').first().click();
  await page.locator('.oxd-icon.bi-chevron-down.oxd-icon-button__icon').first().click();
  await page.locator('input[name="pm"]').check();
  await page.getByRole('textbox', { name: 'hh:mm' }).nth(1).click();
  await page.locator('.oxd-icon.bi-chevron-down.oxd-icon-button__icon').first().click({
    clickCount: 5
  });
  await page.locator('.oxd-icon.bi-chevron-down.oxd-icon-button__icon').first().click({
    clickCount: 4
  });
  await page.locator('.oxd-icon.bi-chevron-up').first().click();
  await page.locator('.oxd-icon.bi-chevron-up').first().click();
  await page.locator('.oxd-icon.bi-chevron-down.oxd-icon-button__icon').first().click();
  await page.locator('.oxd-icon.bi-chevron-up').first().click({
    clickCount: 6
  });
  await page.locator('.oxd-icon.bi-chevron-up').first().click();
  await page.locator('.oxd-icon.bi-chevron-up').first().click();
  await page.locator('input[name="pm"]').check();
  await page.getByRole('button', { name: 'Save' }).click();
});




test('Delete Work Shift', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('listitem').filter({ hasText: /^Work Shifts$/ }).click();
  await page.getByRole('button').nth(4).click();
  await page.getByRole('button', { name: ' Yes, Delete' }).click();
});


test('Verify Validation Messages When Work Shift is Not Added', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('listitem').filter({ hasText: /^Work Shifts$/ }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox', { name: 'hh:mm' }).first().click();
  await page.getByRole('textbox', { name: 'hh:mm' }).nth(1).click();
  await page.getByText('Duration Per Day8.00').click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByText('Required', { exact: true }).click();
});



test('Verify Validation Messages When From and to Fields are Empty', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Work Shifts' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Morning shift');
  await page.getByRole('textbox', { name: 'hh:mm' }).first().click();
  await page.getByRole('textbox', { name: 'hh:mm' }).first().fill('');
  await page.getByRole('textbox', { name: 'hh:mm' }).nth(1).click();
  await page.getByRole('textbox', { name: 'hh:mm' }).nth(1).fill('');
  await page.getByRole('textbox', { name: 'hh:mm' }).nth(1).press('Enter');
  await page.getByRole('button', { name: 'Save' }).click();
});

