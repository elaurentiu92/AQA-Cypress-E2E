describe('API Testing for Quotes endpoint', () => {

  const quotes_API = 'http://quotes.toscrape.com/api/quotes';

  //positive testing
  it('should check the quote API status code and specific data', () => {
    cy.request(quotes_API).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body).to.have.property('quotes');
      expect(response.body.quotes).to.have.length(10);
    });
  });

  it('should check the quote API status code and get the properties inside the quotes', () => {
    cy.request(quotes_API).then((response) => {

      expect(response.status).to.eq(200);

      response.body.quotes.forEach((quote) => {
      const propertyArr = ['author', 'text', 'tags'];

      propertyArr.forEach((property) => {
        expect(quote).to.have.property(property);
      })
      })
    });
  });

  //negative testing
  it('should check that the quote API name is wrong', () => {

    let wrong_quotes_API = 'http://quotes.toscrape.com/api/quoteees';

    cy.request('http://quotes.toscrape.com/api/quotes').then(() => {
      expect(wrong_quotes_API).to.not.eq(quotes_API);
    });
  });
});
