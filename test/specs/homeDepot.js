describe('Homedepot Production page', () => {
    it('Check the title', () => {
        browser.url('https://www.homedepot.ca');
        expect(browser).toHaveTitle('Home Improvement, Home Renovation, Tools, & Hardware | The Home Depot Canada');
    });
});