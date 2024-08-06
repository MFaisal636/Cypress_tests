class PoolBuilder {
  CreatePoolBuilder() {
      cy.visit('https://comtrak.qa.dmclinical.com/')
      cy.origin('https://comtrak.qa.dmclinical.com/', (

        DRP_Leads = 'a[href="#Leads"]',
        TXT_PoolName = 'input[placeholder="Enter Pool Name"]',
        Pool_Name = 'Auto-qa Test ' + Math.floor(Math.random() * 1000),
        BTN_Create = '#subMenuItem0',
        TXT_Description = '#poolDescription',
        Description = 'Test Description',
        BTN_Continue1 = 'button[class="btn btn-primary"]',
        BTN_Continue2 = 'button[class="btn btn-primary btn-next"]',
        DRP_IntendedStudy = '[ng-reflect-placeholder="Select Intended Study"] > div',
        IntendedStudy = '[ng-reflect-placeholder="Select Intended Study"] > div > div.dropdown-list > ul > li > input[aria-label="Moderna 1273-p301"]',
        BTN_Review = '.submit-buttons',
        Verify_Name = 'mat-dialog-content > div > div > div:nth-child(8)',
        Verify_Description = 'div > div:nth-child(9) > div > label > span.detail',
        Verify_State1 = 'div:nth-child(13) > label > span.hashtag-container.ng-star-inserted > span:nth-child(1)',
        Verify_State2 = 'span.hashtag-container.ng-star-inserted > span:nth-child(2)',
        Verify_Status = 'div:nth-child(14) > label > span.hashtag-container.ng-star-inserted > span',
        Verify_Age = 'div:nth-child(15) > label > span.detail',
        Verify_Study = 'div > div > div:nth-child(73)',
        BTN_Cross = 'label[class="cancle"]',
        BTN_SaveDraft = '.submit-buttons',
        BTN_Drafts = '#subMenuItem1',
        BTN_Published = '#subMenuItem2',
        BTN_CreatePool = 'button[class="btn btn-primary btn-sm btn-next"]',

      ) => {
        cy.wait(5000)
        cy.contains(' Sign In').click()
        cy.wait(5000)
        cy.get(DRP_Leads).click()
        cy.wait(2000)
        cy.contains('Patient Pool Builder ').click()
        cy.wait(2000)
        cy.get(BTN_Create).click()
        cy.wait(2000)
        cy.get(TXT_PoolName)
          .type(Pool_Name)
        cy.get(TXT_Description)
          .type(Description)
        cy.get(BTN_Continue1).click()
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
        cy.get(BTN_Continue2).contains(' Continue ').click()
        cy.wait(2000)
        cy.get(DRP_IntendedStudy).click({ force: true })
        cy.wait(2000)
        cy.get(IntendedStudy).click({ force: true })
        cy.wait(2000)
        // cy.get(BTN_Review).contains(' Review Pool ').click()
        // cy.wait(2000)
        cy.get(BTN_CreatePool).click()
        cy.wait(2000)
        cy.get('tr:nth-child(1) > td:nth-child(3)').should('contain', Pool_Name)
        cy.wait(1000)
        cy.get('tr:nth-child(1) > td:nth-child(8) > div > button:nth-child(1)').click()
        cy.get('[id="container "]').should('contain', ' Review Patients Pool ')
        cy.get(Verify_Name).should('contain', Pool_Name)
        cy.get(Verify_Description).should('contain', Description)
        cy.get(Verify_State1).should('contain', ' New York ')
        cy.get(Verify_State2).should('contain', ' New Jersey ')
        cy.get(Verify_Status).should('contain', ' Pre Booking ')
        cy.get(Verify_Age).should('contain', '6 years - 98 years')
        cy.get(BTN_Cross).click()
        cy.wait(1000)
      })
    }
    
    VerifyPublishedPoolBuilder() {
      
      cy.visit('https://comtrak.qa.dmclinical.com/')
      cy.origin('https://comtrak.qa.dmclinical.com/', (

        DRP_Leads = 'a[href="#Leads"]',
        Pool_Name = 'Auto-qa Test ' + Math.floor(Math.random() * 1000),
        BTN_Published = '#subMenuItem2',
 

      ) => {
        cy.wait(5000)
        cy.contains(' Sign In').click()
        cy.wait(5000)
        cy.get(DRP_Leads).click()
        cy.wait(2000)
        cy.contains('Patient Pool Builder ').click()
        cy.wait(2000)
        cy.get(BTN_Published).click()
        cy.wait(2000)
        cy.get('tr:nth-child(1) > td:nth-child(3)').should('contain', Pool_Name)
        

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