import { AmphoraPage } from "./pomAmphora.cy"
const amphoraPage = new AmphoraPage()
describe('Amphora demo ui', () => {
        beforeEach( () => {
          cy.viewport(1280, 720);
        })
    it('Navigate to Amphora ctrm via google search', () => {
        cy.visit('https://www.google.com/')
        amphoraPage.enterAppName('Amphora ctrm{Enter}')
        amphoraPage.selectAppName()    
    })
    it.only('Validate all headers dropdowns in Amphora ctrm dashboard page', () => {
        cy.visit('https://amphora.net/')
        amphoraPage.clickOnProducts()
        amphoraPage.clickOnTechnology()
        cy.get('.heading--lg').should('contain', 'Technology')
        cy.contains('Amphora is fully committed in engineering its future state platform leveraging the functional rich heritage it had always exhibited. Its technology stack is moving away from a the traditional “CTRM” application space to “CTRDM” that also encompass leveraging rich data portfolio held in a CTRM platform.')
        cy.get('a[title="Resources"]').click();
        cy.contains('Sign up for our newsletter').click();
        cy.get('input[name="email"]').type('test@example.com');
        cy.contains('Subscribe').click();
        cy.contains('Thank you for signing up for our newsletter').should('be.visible');
    })
})