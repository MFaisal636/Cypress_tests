import PoolBuilderSelectors from '../../Selectors/PoolBuilderSelectors.js'

const { } = PoolBuilderSelectors

class PoolBuilder {
  CreatePoolBuilder() {

    it('CreatePoolBuilder', () => {

      cy.visit('https://comtrak.qa.dmclinical.com/')
      cy.origin('https://comtrak.qa.dmclinical.com/', () => {
        cy.wait(10000)
        cy.contains('Sign In').click()
        // cy.xpath('//img/parent::button[@class="btn btndesk fontopenSans "]').click()
        cy.wait(5000)

        cy.contains('Leads ').click();
        cy.wait(5000)

        // cy.xpath('//b/parent::p[text()="Leads "]').click()

        cy.contains('Patient Pool Builder ').click()
        cy.wait(5000)

        cy.contains(' Create New ').click()
        cy.wait(2000)


        // cy.get('input[placeholder="Enter Pool Name"]').type('Auto-test#123');

        // // cy.get('#poolDescription').type('testing#20')

        // cy.get('button[class="btn btn-primary"]').click({ force: true });


        // cy.get('span.ng-star-inserted').contains('Select State').click({ force: true });
        // // cy.wait('2000')
        // // cy.contains('New York').click({ force: true })
        // cy.contains('New Jersey').click({ force: true });


        // cy.contains('Select Status').click({ force: true });
        // // cy.wait('2000')
        // //cy.contains('Deceased').click({ force: true })
        // cy.contains('Pre Booking').click({ force: true });



        // cy.get('.ngx-slider-pointer-min')
        //   .focus()
        //   .type('{rightArrow}'.repeat(6));

        // cy.get('.ngx-slider-pointer-max')
        //   .focus()
        //   .type('{leftArrow}'.repeat(2));


        // //cy.contains(' Reset Criteria ').click( {force:true} );

        // cy.get('button[class="btn btn-primary btn-next"]').click({ force: true });

        // cy.wait(2000)
        // cy.contains('Select Intended Study').click({ force: true });
        // cy.contains('Moderna 1273-p301').click({ force: true });
        // cy.get('button[class="btn btn-primary btn-sm btn-next"]').click({ force: true });
      })

    })
  }
}

export default new PoolBuilder