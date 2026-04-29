import{test,expect}from'@playwright/test';


test('Practice Form',async({page})=>{
await page.goto('https://demoqa.com/automation-practice-form');
await expect(page.getByText('Practice Form').first()).toBeVisible();
await page.getByPlaceholder('First Name').fill('Prabu');
await page.getByPlaceholder('Last Name').fill('Sridharan');
await page.getByPlaceholder('name@example.com').fill('prabu.sridharan@example.com');
await page.check('#gender-radio-1');
await page.getByPlaceholder('Mobile Number').fill('1234567890');
await page.locator('#dateOfBirthInput').click();
await page.locator('.react-datepicker__month-select').selectOption('9');
await page.locator('.react-datepicker__year-select').selectOption('1988');
await page.locator('.react-datepicker__day--015').click();
await page.locator('#subjectsInput').fill('Maths');
await page.locator('#subjectsInput').press('Enter');
await page.check('#hobbies-checkbox-1');
await page.check('#hobbies-checkbox-2');
await page.check('#hobbies-checkbox-3');
await page.getByPlaceholder('Current Address').fill('123 Main Street, Anytown, USA');
await page.locator('#state').click();
await page.locator('#react-select-3-option-0').click();
await page.locator('#city').click();
await page.locator('#react-select-4-option-0').click();
//await page.locator('#submitButton').scrollIntoViewIfNeeded();
await page.locator('//button[@id="submit"]').click();

});

test('Test Register page for Automation Testing Practice',async({page})=>{
await page.goto('https://practice.expandtesting.com/register');
await page.locator('#username').fill('prabu.sridharan');
await page.locator('#password').fill('Welcome@123');
await page.locator('#confirmPassword').fill('Welcome@123');
await page.locator('//*[@id="register"]/button').click();



});

test('Test page',async({page})=>{
await page.goto('https://www.google.com/');
console.log(await page.title());
await expect(page).toHaveTitle('Google');

});