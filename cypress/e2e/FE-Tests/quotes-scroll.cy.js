import waitForQuotesToLoad from '../test-functions/loadQuotes';

describe('infinite scroll tests', () => {

const scrollURL = 'http://quotes.toscrape.com/scroll';
//declaring selectors, will do POM when I get the job
const elem = { 
  title: 'h1',
  login: 'a[href="/login"]',
  quotes : 'div[class="quote"]'
}
const titleName = 'Quotes to Scrape';

  beforeEach(() => {
    cy.visit(scrollURL);
    //wait for the Title, Login, and Quotes elements to be visible on the page
    Object.entries(elem).forEach(([key, value]) => {
      cy.get(value, { timeout: 10000 }).should('be.visible');
    })
  });

  it('should get the title value and make assertion', () => {
    cy.title().should('eq', titleName)
  });
  it('should load and display quotes', () => {
  
    waitForQuotesToLoad(10);

    // Check if initial quotes are visible
    cy.get(elem.quotes).each((quote) => {
      cy.wrap(quote).should('be.visible');
    });

    cy.scrollTo('bottom');

    waitForQuotesToLoad(10);

    cy.get(elem.quotes).each((quote) => {
      cy.wrap(quote).should('be.visible');
    });
  });
});

