import { test, expect } from '@playwright/test';
test('Vist Point Mortgage - UAT',async({page})=>{
await page.setViewportSize({ width: 1920, height: 1080 });
await page.goto('https://uat.vistapointmortgage.com/');
//await page.waitForLoadState('load');
const pagetitle= await page.title();
console.log('Page Title is : ' + pagetitle);

//const count = await page.locator('img[alt="Vista Point Mortgage"]').count();
//console.log('Image count:', count);

const logovisible =await page.locator('img[alt="Vista Point Mortgage"]').first().isVisible();
console.log('Logo visible : ' + logovisible);

//const aboutusVisible1 = await page.getByText('About Us').isVisible();
//console.log('About Us link visible : ' + aboutusVisible);
//await page.getByRole('link', { name: 'About Us' }).waitFor();

// Check the Links [About Us, Login, Contact Us] Visible or not 
const aboutusVisible = await page.getByRole('link', { name: 'About Us' }).isVisible();
console.log('About Us link visible : ' + aboutusVisible);

const loginVisible = await page.getByRole('link',{ name: 'Login' }).isVisible();
console.log('Login link visible : ' + loginVisible);

const contactusVisible = await page.getByRole('link',{ name: 'Contacts + Become a Seller'}).isVisible();
console.log('Contacts + Become a Seller link visible : ' + contactusVisible);

//Check the Banner text visible or not
/*
const bannerTextVisible = await page.getByText('Bold. Innovative. Flexible. Alternative Lending.',{ exact: true }).isVisible();
console.log('Banner Text1 Visible : ' + bannerTextVisible);

//In this Phrase Visat Point Mortgage "Mortgage" is in separate line so we are not used exact : true in below code
const bannerTextVisible2 = await page.getByText('Vista Point Mortgage').isVisible();
console.log('Banner Text2 Visible : ' + bannerTextVisible2);

const bannerTextVisible3 = await page.getByText('We offer a distinct model meeting the Highest Standards of Credit and Service.',{ exact: true }).isVisible();
console.log('Banner Text3 Visible : ' + bannerTextVisible3);

const bannerTextVisible4 = await page.getByText('Specialized Expertise',{ exact: true }).isVisible();
console.log('Banner Text4 Visible : ' + bannerTextVisible4);

const bannerTextVisible5 = await page.getByText('Streamlined Execution',{ exact: true }).isVisible();
console.log('Banner Text5 Visible : ' + bannerTextVisible5);

const bannerTextVisible6 = await page.getByText('Concierge Service',{ exact: true }).isVisible();
console.log('Banner Text6 Visible : ' + bannerTextVisible6);

//const bannerTextVisible7 = await page.getByText('Delegated and Non-Delegated').textContent();
//console.log('Banner Text7 Visible : ' + bannerTextVisible7);

const bannerTextVisible7 = await page.getByText('Delegated and Non-Delegated Correspondent', { exact: true }).isVisible();
console.log('Banner Text7 Visible : ' + bannerTextVisible7);

*/


//await expect(page.getByText('Bold. Innovative. Flexible. Alternative Lending.')).toBeVisible();

//await page.getByRole('link', { name: 'About Us' }).click();
/*
await expect(page.getByText('Bold. Innovative. Flexible. Alternative Lending.',{exact : true})).toBeVisible();
await expect(page.getByText('Vista Point Mortgage')).toBeVisible();
await expect(page.getByText('We offer a distinct model meeting the Highest Standards of Credit and Service.',{exact : true})).toBeVisible();
await expect(page.getByText('Specialized Expertise',{exact : true})).toBeVisible();
await expect(page.getByText('Concierge Service',{exact : true})).toBeVisible();
await expect(page.getByText('Streamlined Execution',{exact : true})).toBeVisible();
await expect(page.getByText('Delegated and Non-Delegated Correspondent',{exact : true})).toBeVisible();
*/

const bannerTexts = [
    { text: 'Bold. Innovative. Flexible. Alternative Lending.', exact: true },

    // Special case: text split into multiple lines → no exact match
    { text: 'Vista Point Mortgage', exact: false },

    { text: 'We offer a distinct model meeting the Highest Standards of Credit and Service.', exact: true },
    { text: 'Specialized Expertise', exact: true },
    { text: 'Streamlined Execution', exact: true },
    { text: 'Concierge Service', exact: true },
    { text: 'Delegated and Non-Delegated Correspondent', exact: true },
    { text: 'Suite of Non-QM & DSCR Products', exact: true },
    { text: 'Equity Solutions: Closed-End Seconds', exact: true },
    { text: 'Closed-End Second is a second lien that can be a standalone or piggyback transaction. It is designed to go behind low-interest rate non-QM, QM and non-owner-occupied 1st mortgages.', exact: true },
    { text: 'Investment Properties', exact: true },
    { text: 'Is designed for non-owner or investment property borrowers that may or may not have had previous investor experience. This program offers expanded credit parameters for multiple non-owner borrower profiles while utilizing multiple document types to further address specific income circumstances in the demonstration of ability to repay.', exact: true },
    { text: 'Primary & Secondary Homes', exact: true },
    { text: 'Is designed for owner-occupied and second home borrowers who require flexibility in mortgage history, credit history, and/or payment and documentation options. This program offers expanded credit parameters for multiple borrower profiles while utilizing multiple document types to further address specific income circumstances in the demonstration of ability to repay.', exact: true },
  
  ];

  // 🔹 Step 6: Loop through all banner texts
  for (let i = 0; i < bannerTexts.length; i++) {

    const item = bannerTexts[i];

    // 🔹 Step 7: Validate each text
    await expect(
      page.getByText(item.text, item.exact ? { exact: true } : {})
    ).toBeVisible();

    // 🔹 Step 8: Print success message (optional)
    console.log(`✅ Banner Text${i + 1} Verified: ${item.text}`);
  }

  const link1 = await page.getByRole('link', { name: 'To learn more, click here' }).first().isVisible();
  console.log('Link1 Visible : ' + link1);
});
