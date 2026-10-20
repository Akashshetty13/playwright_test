import {test,expect} from '@playwright/test';
import { fork } from 'node:child_process';
test('This is a test for single select dropdown',async({page})=>{
    await page.goto('https://playwrightlabs.com/practice/formwidgets.html');

    await page.locator('#country').scrollIntoViewIfNeeded();
    await page.locator('#country').click();
    await page.waitForTimeout(4000);


    await page.locator('#country').selectOption({label:'India'});
    await page.waitForTimeout(3000);
    
    await page.locator('#country').selectOption('India');
    await page.waitForTimeout(3000);
    
    await page.locator('#country').selectOption({value:'uk'});
    await page.waitForTimeout(3000);
                                
    await page.locator('#country').selectOption({index:3});
    await page.waitForTimeout(3000);    

    await page.selectOption('#country','India');
    await page.waitForTimeout(3000);

    //const countryOptions = await page.locator('#country option');
    //await expect(countryOptions).toHaveCount(10);

    //const countryOptions = await page.$$('#country option');
    //await expect(countryOptions.length).toBe(10);

    //const content = await page.locator('#country').textContent();
    //await expect(content.includes('India')).toBeTruthy();
    
    /*  const options = await page.$$('#country option');
    let status = false;
    for(let option of options){
        const value = await option.textContent();
        if(value.includes('France')){
            status = true;
            break;
        }      
    }

    await expect(status).toBeTruthy();  */

const options = await page.$$('#country option');
for(const option of options){
    const value = await option.textContent();
    if(value.includes('France')){
        await page.selectOption('#country',value);
        break;
    }

}

await page.waitForTimeout(5000);


});
