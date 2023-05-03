 const quotesElem = '.quote';
 
 /**
    * Anonymous function which waits for for the quotes to load in DOM.
    * @param expectedCount - the value expected for the quotes to exist in DOM
    */
 export default function waitForQuotesToLoad (expectedCount){
    cy.get(quotesElem, { timeout: 10000 }).then((quotes) => {
      expect(quotes.length).to.eq(expectedCount);
    });
  };