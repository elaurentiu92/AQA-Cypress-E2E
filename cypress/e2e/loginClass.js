export default class LoginPage {

    get logIn () {
        const login = cy.get('.vx9Kj').click();
        return login;
    }

    get emailInput () {
       const emailInput =  cy.get('#account-check-form > div:nth-child(1) > label > div > input[type=text]')
       return emailInput;
    }

}