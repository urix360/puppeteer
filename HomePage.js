const puppeteer = require('puppeteer');
const elements = {
    name: "#name",
    email: "#email",
    phone: "#phone",
    company: "#company",
    employees: "#employees",
    submit: ".primary.button",
}

class HomePage{
    
    async register(page, name, email, phone, company, employees) {
        await page.type(elements.name,name);
        await page.type(elements.phone,phone);
        await page.type(elements.email,email);
        await page.type(elements.company,company);
        await page.select(elements.employees,employees);

    }

    async clickSubmit(page){
        await page.click(elements.submit);
    }

}
module.exports = HomePage;