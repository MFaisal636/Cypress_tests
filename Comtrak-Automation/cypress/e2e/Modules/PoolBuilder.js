class PoolBuilder {
Random = Math.floor(Math.random() * 1000)
  CreatePoolBuilder() {
    
      cy.visit('https://comtrak.qa.dmclinical.com/')
      cy.origin('https://comtrak.qa.dmclinical.com/', () => {
        cy.wait(5000)
        cy.contains(' Sign In').click()
        cy.wait(5000)
        cy.get('a[href="#Leads"]').click()
        cy.wait(2000)
        cy.contains('Patient Pool Builder ').click()
        cy.wait(2000)
        cy.get('#subMenuItem0').click()
        cy.wait(2000)
        cy.get('input[placeholder="Enter Pool Name"]')
          .type('Auto-QA Test ' + Random)
        cy.get('#poolDescription')
          .type('Test Description')
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait(2000)
        cy.contains('Select State').click()
        cy.wait(2000)
        cy.contains('New York').click()
        cy.contains('New Jersey').click()
        cy.wait(2000)
        cy.contains('Select Status').click()
        cy.wait(2000)
        cy.contains('Pre Booking').click()
        cy.wait(2000)
        cy.get('.ngx-slider-pointer-min')
          .focus()
          .type('{rightArrow}'.repeat(6))
        cy.get('.ngx-slider-pointer-max')
          .focus()
          .type('{leftArrow}'.repeat(2))
        cy.wait(2000)
        cy.get('button[class="btn btn-primary btn-next"]').contains(' Continue ').click()
        cy.wait(2000)
        cy.contains('Select Intended Study').click()
        cy.wait(2000)
        cy.get('[ng-reflect-placeholder="Select Intended Study"] > div').click({ force: true })
        cy.wait(2000)
        cy.get('[ng-reflect-placeholder="Select Intended Study"] > div > div.dropdown-list > ul > li > input[aria-label="Moderna 1273-p301"]').click({ force: true })
        cy.wait(2000)
        cy.get('.submit-buttons').contains(' Review Pool ').click()
        cy.wait(2000)
        cy.get('[id="container "]').should('contain', ' Review Patients Pool ')
        cy.get('span[class="hashtag-container ng-star-inserted"]').should('contain', 'New York')
        cy.get('span[class="hashtag-container ng-star-inserted"]').should('contain', 'New Jersey')
        cy.get('span[class="hashtag-container ng-star-inserted"]').should('contain', 'Pre Booking')
        cy.get('span[class="tags ng-star-inserted"]').should('contain', '6 years - 98 years')
        cy.get('span[class="title"]').should('contain', 'Intended Study:')
        // cy.get('label[class="cancle"]').click()
        // cy.wait(1000)
        // cy.get('.submit-buttons').contains(' Save as Draft ').click()
        // cy.wait(1000)
        // cy.get('#subMenuItem1').click()
        // cy.wait(1000)
        // cy.get('button[class="btn btn-primary btn-sm btn-next"]').click({ force: true })
      })
    }
    
    VerifyPublishedPoolBuilder() {
      
      cy.visit('https://comtrak.qa.dmclinical.com/')
      cy.origin('https://comtrak.qa.dmclinical.com/', () => {
        cy.wait(5000)
        cy.contains(' Sign In').click()
        cy.wait(5000)
        cy.get('a[href="#Leads"]').click()
        cy.wait(2000)
        cy.contains('Patient Pool Builder ').click()
        cy.wait(2000)
        cy.get('#subMenuItem2').click()
        cy.wait(2000)
        cy.get('tbody > tr > td:nth-child(3)').should('contain', 'Auto-QA Test ' + Random)
        

      })
  }

  // UpdatePoolBuilder() {
  //   it('Update', () => {
  //     cy.visit('https://comtrak.qa.dmclinical.com/')
  //     cy.origin('https://comtrak.qa.dmclinical.com/', () => {
  //       cy.wait(5000)
  //       cy.contains(' Sign In').click()
  //       cy.wait(5000)
  //       cy.get('a[href="#Leads"]').click()
  //       cy.wait(2000)
  //       cy.contains('Patient Pool Builder ').click()
  //       cy.wait(2000)
        
  //     })
  //   })
  // }
  // DeletePoolBuilder() {
  //   it('Delete', () => {
  //     cy.visit('https://comtrak.qa.dmclinical.com/')
  //     cy.origin('https://comtrak.qa.dmclinical.com/', () => {
  //       cy.wait(5000)
  //       cy.contains(' Sign In').click()
  //       cy.wait(5000)
  //       cy.get('a[href="#Leads"]').click()
  //       cy.wait(2000)
  //       cy.contains('Patient Pool Builder ').click()
  //       cy.wait(2000)
        
  //     })
  //   })
  // }
}
export default new PoolBuilder