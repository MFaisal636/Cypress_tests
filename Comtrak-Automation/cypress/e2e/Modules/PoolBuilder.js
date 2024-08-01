import PoolBuilderSelectors from '../../Selectors/PoolBuilderSelectors.js'

const {} = PoolBuilderSelectors

class PoolBuilder {
  CreatePoolBuilder() {

    it('CreatePoolBuilder', () => {

      cy.visit('https://comtrak.qa.dmclinical.com/')
      cy.origin('https://comtrak.qa.dmclinical.com/', () => {
        cy.wait(10000);
        // open "leads" dropdown
        cy.contains('Sign In').click()
        // cy.xpath('//img/parent::button[@class="btn btndesk fontopenSans "]').click()
        cy.wait(5000)
        
        cy.contains('Leads ').click();
        cy.wait(5000)

        // cy.xpath('//b/parent::p[text()="Leads "]').click()

      // // // click on "patient pool Builder"
      // cy.wait(2000);
      cy.contains('Patient Pool Builder ').click()
      cy.wait(5000)
      
      cy.contains(' Create New ').click()
      cy.wait(2000)
      // // create a New Patient Pool
      // // Pool Name
      // cy.get('input[placeholder="Enter Pool Name"]').type('Auto-test#123');
      // // // Pool Description
      // // cy.get('#poolDescription').type('testing#20')
      // //click on "continue" Button
      // cy.get('button[class="btn btn-primary"]').click({ force: true });
      // // // DEFINE LIST

      // // // Select State
      // cy.get('span.ng-star-inserted').contains('Select State').click({ force: true });
      // // cy.wait('2000')
      // // cy.contains('New York').click({ force: true })
      // cy.contains('New Jersey').click({ force: true });

      // // // status
      // cy.contains('Select Status').click({ force: true });
      // // cy.wait('2000')
      // //cy.contains('Deceased').click({ force: true })
      // cy.contains('Pre Booking').click({ force: true });


      // // // The age range selection
      // cy.get('.ngx-slider-pointer-min')
      //   .focus()
      //   .type('{rightArrow}'.repeat(6));

      // cy.get('.ngx-slider-pointer-max')
      //   .focus()
      //   .type('{leftArrow}'.repeat(2));

      // // This is for Reset Criteria
      // //cy.contains(' Reset Criteria ').click( {force:true} );
      // //For create a pool click on continue
      // cy.get('button[class="btn btn-primary btn-next"]').click({ force: true });
      // //Selection in intended Study
      // cy.wait(2000)
      // cy.contains('Select Intended Study').click({ force: true });
      // cy.contains('Moderna 1273-p301').click({ force: true });
      // cy.get('button[class="btn btn-primary btn-sm btn-next"]').click({ force: true });
      })
      
    })
  }
}

export default new PoolBuilder