describe('webdriver.io page', () => {
    it('Check the title', () => {
        browser.url('https://webdriver.io');
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    });
});