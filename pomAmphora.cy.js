export class AmphoraPage {

    enterAppName(AppName) {
        cy.get('#APjFqb').type(AppName)
    
        }
        selectAppName() {
            cy.get('[href="https://amphora.net/"]').click();
        }
    clickOnProducts() {

        cy.get('#menu-item-32').trigger('mouseover')
    }
    clickOnTechnology() {

        cy.get('#menu-item-28 > a').click()
    }



}