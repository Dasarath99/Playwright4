
import { test, expect } from '@playwright/test';

import data from "../../Test data/validlogin.json";

test('Verify Login with valid credentials', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Enter username
    await page.getByRole('textbox', { name: 'Username' }).fill(data.username);

    // Enter password
    await page.getByRole('textbox', { name: 'Password' }).fill(data.password);

    // Click login
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify dashboard
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

});
