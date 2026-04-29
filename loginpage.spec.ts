import { test, expect } from '@playwright/test';

test('Test Login Page', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  const username = 'practice';
  await page.goto('https://practice.expandtesting.com/login');
  await page.locator('[id="username"]').fill('practice');
  await page.locator('[id="password"]').fill('SuperSecretPassword!');
  await page.locator('[id="submit-login"]').click();
  const isGreetingVisible = await page.getByText(`Hi, ${username}!`).isVisible();
  const isContentVisible = await page.getByText('Secure Area page for Automation Testing Practice').isVisible();

  if(isGreetingVisible &&  isContentVisible){
    console.log('Login successful and content is visible');
  }
  else{
    console.log('Login failed or content is not visible');
  }
  
  console.log (isGreetingVisible);
  console.log (isContentVisible);

});