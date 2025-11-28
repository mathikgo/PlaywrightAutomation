import { chromium, expect, test } from '@playwright/test'

test(`Create a Lead`, async () => {

    //Launch the browser   
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    //Launch the application url   
    await page.goto('http://leaftaps.com/opentaps/control/main');
    const url = await page.url();
    console.log(url);

    //Login with credentials
    await page.locator('#username').fill(`Demosalesmanager`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.locator(`.decorativeSubmit`).click();

    //Get url and title
    const urlHome = await page.url();
    const titleHome = await page.title();
    console.log(urlHome);
    console.log(titleHome);

    //Store values to pass in a variable to check expected and actual
    const companyName = `TestLeafGK`;
    const firstName = `Gomathi`;
    const lastName = `Kannan`;
    const status = 'Assigned'

    //Find Leads tab
    await page.locator(`#label`).click();
    await page.getByRole(`link`, { name: `Leads` }).click();

    //Create a lead with details
    await page.getByRole(`link`, { name: `Create Lead` }).click();
    await page.locator(`#createLeadForm_companyName`).fill(companyName);
    await page.locator(`#createLeadForm_firstName`).fill(firstName);
    await page.locator(`#createLeadForm_lastName`).fill(lastName);
    await page.locator(`#createLeadForm_personalTitle`).fill(`Mrs`);
    await page.locator(`#createLeadForm_generalProfTitle`).fill('SoftwareEngineer');
    await page.locator(`#createLeadForm_annualRevenue`).fill('10000');
    await page.locator(`#createLeadForm_departmentName`).fill('Software');
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill('787989898989');
    await page.locator(`.smallSubmit`).click();

    //Get created lead details
    const actualCompanyName = await page.locator(`#viewLead_companyName_sp`).textContent();
    const actualFirstName = await page.locator(`#viewLead_firstName_sp`).textContent();
    const actualLastName = await page.locator(`#viewLead_lastName_sp`).textContent();
    const actualStatus = await page.locator(`#viewLead_statusId_sp`).textContent();
    console.log(actualCompanyName, companyName);
    console.log(actualFirstName, firstName);
    console.log(actualLastName, lastName);
    console.log(actualStatus, status);

    //Assertions
    expect(actualCompanyName).toContain(companyName);
    expect(actualFirstName).toBe(firstName);
    expect(actualLastName).toBe(lastName);
    expect(actualStatus).toBe(status);

    //Print the page title
    const leadTitle = page.title();
    console.log(leadTitle);
    await page.waitForTimeout(3000)
})



/*
Assignment: 1 Create a Lead
1. Navigate to the url http://leaftaps.com/opentaps/control/main
2. Enter the username as ‘Demosalesmanager’
3. Enter the password as ‘crmsfa’
4. Click the Login button
5. Click CRM/SFA
6. Click Leads
7. Click Create Lead
8. Fill the Company Name
9. Fill the First Name
10. Fill the Last Name
11. Fill the Salutation
12. Fill the Title
13. Fill the Annual Revenue
14. Fill the Department
15. Fill the Phone number
16. Click Create Lead button
17. Verify the company name, first name, last name and the status
18. Get the page title
*/