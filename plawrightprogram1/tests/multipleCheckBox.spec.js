import{test,expect} from '@playwright/test'
test('This is a test for multiple checkboxes',async({page})=>{
    
    await page.goto('https://playwrightlabs.com/practice/formwidgets.html');

    //await page.locator('#sunday').click();
    //await page.waitForTimeout(3000);

    //await page.locator('#sunday').click();
    //await page.waitForTimeout(4000);

    await page.locator('#sunday').check();
    await page.waitForTimeout(3000);

    await page.locator('#sunday').check();
    await page.waitForTimeout(3000);
    
    await expect(await page.locator('#sunday')).toBeChecked();
    await expect(await page.locator('#sunday').isChecked()).toBeTruthy();

    await page.waitForTimeout(3000);


    const checkboxes = ['//input[@type="checkbox" and @id="sunday"]',
                        '//input[@type="checkbox" and @id="monday"]',
                        '//input[@type="checkbox" and @id="saturday"]']
    
    for(const locator of checkboxes){
        await page.locator(locator).check();
        await page.waitForTimeout(3000);
    }

    for(const locator of checkboxes){
        if(await page.locator(locator).isChecked()){
            await page.locator(locator).uncheck();
            await page.waitForTimeout(3000);
        }


    }

})