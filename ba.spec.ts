import { test, expect } from '@playwright/test';

test('Brokers Advantage - QA', async ({ page }) => {

  await page.setViewportSize({ width: 1920, height: 1080 });

  await page.goto('https://qa.brokersadvantagemortgage.com/', {
    waitUntil: 'networkidle'
  });

  // Wait for page load
  await page.waitForLoadState('networkidle');

  const pagetitle = await page.title();
  console.log('Page Title is : ' + pagetitle);

  // Logo visible
  const logovisible = await page .locator('img[alt="Brokers Advantage"]').first().isVisible();
  console.log('Logo visible : ' + logovisible);

  // Click Rate Sheet link
  const rateSheetLink = page.locator('a.nav-link:has-text("Rate Sheet")').first();
  await rateSheetLink.waitFor({ state: 'visible' });
  console.log('Rate Sheet link visible : ' + await rateSheetLink.isVisible());
  await rateSheetLink.click();
  await page.waitForLoadState('domcontentloaded');
  console.log('✓ Rate Sheet link clicked successfully');

  // Click Blended Rate link
  const blendedRateLink = page.getByRole('link', { name: 'Blended Rate' });
  await blendedRateLink.waitFor({ state: 'visible' });
  console.log('Blended Rate link visible : ' + await blendedRateLink.isVisible());
  await blendedRateLink.click();
  await page.waitForLoadState('domcontentloaded');
  console.log('✓ Blended Rate link clicked successfully');

  // Click Products link
  const productsLink = page.getByRole('link', { name: 'Products' });
  await productsLink.waitFor({ state: 'visible' });
  console.log('Products link visible : ' + await productsLink.isVisible());
  await productsLink.click();
  await page.waitForLoadState('domcontentloaded');
  console.log('✓ Products link clicked successfully');

    // Click Resources link
  const resourcesLink = page.getByRole('link', { name: 'Resources' });
  await resourcesLink.waitFor({ state: 'visible' });
  console.log('Resources link visible : ' + await resourcesLink.isVisible());
  await resourcesLink.click();
  await page.waitForLoadState('domcontentloaded');
  console.log('✓ Resources link clicked successfully');


  // Click AboutUs link
  const aboutusLink = page.getByRole('link', { name: 'About Us' });
  await aboutusLink.waitFor({ state: 'visible' });
  console.log('About Us link visible : ' + await aboutusLink.isVisible());
  await aboutusLink.click();
  await page.waitForLoadState('domcontentloaded');
  console.log('✓ About Us link clicked successfully');


   // Click AboutUs link
 
 const tpoLink = page.getByRole('link', { name: 'TPO Login' });

// Wait for link visible
await tpoLink.waitFor({ state: 'visible' });

console.log('TPO Login link visible : ' + await tpoLink.isVisible());

// Handle new tab
const [newPage] = await Promise.all([
page.context().waitForEvent('page'),
  tpoLink.click()
]);

// Wait for new tab load
await newPage.waitForLoadState('domcontentloaded');

// Verify title
const newPageTitle = await newPage.title();

console.log('New Page Title : ' + newPageTitle);

await expect(newPage).toHaveTitle(/TPO Connect/i);

console.log('✓ TPO Connect page opened successfully');

// Click popup Cancel button
const cancelButton = newPage.locator('[uib-tooltip="Cancel"]');

await cancelButton.waitFor({ state: 'visible' });

await cancelButton.click();

console.log('✓ Cancel button clicked');

// Switch back to old tab
await page.bringToFront();

console.log('✓ Switched back to previous tab');
  

});