describe('JS-delayed', () => {

const jsDelyedURL = 'http://quotes.toscrape.com/js-delayed/';
const elem = { 
    title: 'h1',
    login: 'a[href="/login"]',
    quotes : 'div[class="quote"]'
}

  beforeEach(() => {
    cy.visit(jsDelyedURL);
  })

  it('should wait for the elements to appear on the page', ()=> {
    //wait for the Title, Login, and Quotes elements to be visible on the page
    Object.entries(elem).forEach(([key, value]) => {
        cy.get(value, { timeout: 10000 }).should('be.visible');
      })
  })
})
