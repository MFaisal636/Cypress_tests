import PoolBuilderSelectors from '../../Selectors/PoolBuilderSelectors.js'

const {TXT_PoolName, PoolName, TXT_Description, Description, BTN_Continue1, DRP_State, STATE_Search, STATE_NewYork, STATE_NewJersey, DRP_Status, STATUS_Search, STATUS_PreBooking, MIN_AgeSlider, MAX_AgeSlider, BTN_Reset, BTN_Continue2, BTN_SaveDraft} = PoolBuilderSelectors

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

        cy.xpath(TXT_PoolName).type(PoolName)
        cy.wait(1000)
        
        cy.xpath(TXT_Description).type(Description)
        cy.wait(1000)

        cy.xpath(BTN_Continue1).click()
        cy.wait(5000)

        cy.xpath(DRP_State).click()
        cy.wait(1000)
        
        cy.xpath('(//input[@placeholder="Search"])[1]').type('New')
        cy.xpath('//input[@aria-label="New York"]').click()
        cy.xpath('//input[@aria-label="New Jersey"]').click()
        cy.wait(1000)
        
        cy.xpath(DRP_Status).click()
        cy.wait(1000)

        cy.xpath('(//input[@placeholder="Search"])[2]').type('Pre')
        cy.xpath('//input[@aria-label="Pre Booking"]').click()
        cy.wait(1000)

        cy.xpath(MIN_AgeSlider)
          .focus()
          .type('{rightArrow}'.repeat(6));

        cy.get(MAX_AgeSlider)
          .focus()
          .type('{leftArrow}'.repeat(2)); */

        // Using CSS Selectors

        // cy.get(TXT_PoolName).type(PoolName)
        cy.get('input[placeholder="Enter Pool Name"]').type('Auto-QA Test ' + Math.floor(Math.random() * 1000))

        // cy.get(TXT_Description).type(Description)
        cy.get('#poolDescription').type('Test Description')

        // cy.get(BTN_Continue1).click()
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait(5000)

        // cy.get(DRP_State).contains('Select State').click()
        cy.get('span.ng-star-inserted').contains('Select State').click()
        cy.wait(2000)
        cy.contains('New York').click()
        cy.contains('New Jersey').click()
        cy.wait(2000)

        // cy.get(DRP_Status).contains('Select Status').click()
        cy.get('span.ng-star-inserted').contains('Select Status').click()
        cy.wait(2000)
        cy.contains('Pre Booking').click()
        cy.wait(2000)

        // cy.get(MIN_AgeSlider)
        cy.get('.ngx-slider-pointer-min')
          .focus()
          .type('{rightArrow}'.repeat(6))

        // cy.get(MAX_AgeSlider)
        cy.get('.ngx-slider-pointer-max')
          .focus()
          .type('{leftArrow}'.repeat(2))

        // //cy.contains(' Reset Criteria ').click( {force:true} );
        // cy.get(BTN_Continue2).click()

        cy.wait(2000)
        // cy.contains('Select Intended Study').click({ force: true })
        // cy.contains('Moderna 1273-p301').click({ force: true })
        // cy.get('button[class="btn btn-primary btn-sm btn-next"]').click({ force: true })
      })

    })
  }
}

export default new PoolBuilder