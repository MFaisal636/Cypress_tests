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

        /* Using Xpath

        cy.xpath('//input[@id="poolName"]').type('Auto-QA Test ' + Math.floor(Math.random() * 1000))
        cy.wait(1000)
        
        cy.xpath('//textarea[@id="poolDescription"]').type('Test Description')
        cy.wait(1000)

        cy.xpath('(//button[text()=" Continue "])[1]').click()
        cy.wait(5000)

        cy.xpath('//span[text()="Select State"]').click()
        cy.wait(1000)
        
        cy.xpath('(//input[@placeholder="Search"])[1]').type('New')
        cy.xpath('//input[@aria-label="New York"]').click()
        cy.xpath('//input[@aria-label="New Jersey"]').click()
        cy.wait(1000)
        
        cy.xpath('//span[text()="Select Status"]').click()
        cy.wait(1000)

        cy.xpath('(//input[@placeholder="Search"])[2]').type('Pre')
        cy.xpath('//input[@aria-label="Pre Booking"]').click()
        cy.wait(1000)

        cy.xpath('//span[@aria-label="ngx-slider"]')
          .focus()
          .type('{rightArrow}'.repeat(6));

        cy.get('//span[@aria-label="ngx-slider-max"]')
          .focus()
          .type('{leftArrow}'.repeat(2)); */

        // Using CSS Selectors

        cy.get('input[placeholder="Enter Pool Name"]').type('Auto-QA Test ' + Math.floor(Math.random() * 1000))

        cy.get('#poolDescription').type('Test Description')

        cy.get('button[class="btn btn-primary"]').click()
        cy.wait(5000)


        cy.get('span.ng-star-inserted').contains('Select State').click()
        cy.wait(2000)
        // cy.get('input[class="ng-valid ng-touched ng-dirty"]:nth-child(1)').click({force:true}).type('New')
        cy.contains('New York').click()
        cy.contains('New Jersey').click()
        cy.wait(2000)


        cy.get('span.ng-star-inserted').contains('Select Status').click()
        cy.wait(2000)
        // cy.get('input[class="ng-valid ng-dirty ng-touched"]:nth-child(1)').click({force:true}).type('Pre')
        // cy.contains('Deceased').click()
        cy.contains('Pre Booking').click()
        cy.wait(2000)



        cy.get('.ngx-slider-pointer-min')
          .focus()
          .type('{rightArrow}'.repeat(6))

        cy.get('.ngx-slider-pointer-max')
          .focus()
          .type('{leftArrow}'.repeat(2))


        // //cy.contains(' Reset Criteria ').click( {force:true} );

        cy.get('button[class="btn btn-primary btn-next"]').click()

        cy.wait(2000)
        // cy.contains('Select Intended Study').click({ force: true })
        // cy.contains('Moderna 1273-p301').click({ force: true })
        // cy.get('button[class="btn btn-primary btn-sm btn-next"]').click({ force: true })
      })

    })
  }
}

export default new PoolBuilder