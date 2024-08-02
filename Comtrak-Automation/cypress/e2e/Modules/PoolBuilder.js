import PoolBuilderSelectors from '../../Selectors/PoolBuilderSelectors.js'
import LoginSelectors from '../../Selectors/LoginSelectors.js'

const { TXT_Email, Email_Id, TXT_Password, Password_Id, BTN_Next, BTN_SignIn } = LoginSelectors
const { TXT_PoolName, PoolName, TXT_Description, Description,
  BTN_Continue1, DRP_State, STATE_Search, STATE_NewYork, STATE_NewJersey,
  DRP_Status, STATUS_Search, STATUS_PreBooking, MIN_AgeSlider, MAX_AgeSlider,
  BTN_Reset, BTN_Continue2, BTN_SaveDraft } = PoolBuilderSelectors

class PoolBuilder {
  CreatePoolBuilder() {
    before(() => {
      Cypress.session.clearAllSavedSessions()
      cy.session([Email_Id, Password_Id], () => {
        cy.visit('https://accounts.google.com/v3/signin/identifier?opparams=%253Fopenid.realm%2526ss_domain%253Dhttps%25253A%25252F%25252Fcomtrak.dev.dmclinical.com&dsh=S286069110%3A1720167782606180&client_id=687199414693-c4ocf6bslimh2mfipbir5o6fiiofgrku.apps.googleusercontent.com&ddm=0&fetch_basic_profile=true&gsiwebsdk=2&include_granted_scopes=true&o2v=1&redirect_uri=storagerelay%3A%2F%2Fhttps%2Fcomtrak.dev.dmclinical.com%3Fid%3Dauth619290&response_type=permission+id_token&scope=email+profile+openid&service=lso&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAMl9akc_q4VsjE5nnptjJSk5s8J7evLmsFNQ3iKD3erZvsfwUjXUaszKeqCtxKp4vDnaXcs5KEHIjUA30u-RUnzjLhYYuLBc8TX3pK9LgMnpRuG5Y_zuKhlsg__417ii-AfKStMCnbesHz-uzGuL6jbaOlNdcInjOMZMVuT74tLOfCtRVrOBlNb2GvbhSGWQUcNwHADqzPY8eogoMG0rX0HgJWs-XC7LbVG07gKpFi242I1-g-HuBsacE2XAtiWMX3ttfga66hAKHyTqc4KS-jhJdZy74j_t4a8Bc4xsZ_0R_weKxYqDCJrv2ua7A7ESCL6gJYEru-uPMU5TyxvA0ASFGPviYYRMG23hZTL5OwWVTriUXyHALaVkB1f_zhv95JykJbQBJHcQVKOeEztTAB7yN1qPF4lC-VpbynGodyIvUFJNhtWgRGjhEkSh8P6bMwL1aBHmZtapmaW2tTKc8pGddEOfC_R4P_U9kuJcZ7oW7gmIwM%26flowName%3DGeneralOAuthFlow%26as%3DS286069110%253A1720167782606180%26client_id%3D687199414693-c4ocf6bslimh2mfipbir5o6fiiofgrku.apps.googleusercontent.com%23&app_domain=https%3A%2F%2Fcomtrak.dev.dmclinical.com&rart=ANgoxcfkiw_N3StLWSsM3R01-tzqzIICnpTdz2LxNof1ldDBXu2D3y2iAAw1TuIQk_BDrrJ384Y47LIfD4lWLzx-4L1m8kcYKiF9pVhP0AS4VmtSzo-TErs')
        cy.EnterText(TXT_Email, Email_Id)
        cy.Click(BTN_Next)
        cy.wait(2000)
        cy.Click(BTN_Next)
        cy.wait(2000)
        cy.EnterText(TXT_Email, Email_Id)
        cy.wait(2000)
        // cy.xpath('//button[@id="identifierNext"]').click() //--(Use if running on Electron Browser)
        cy.Click(BTN_Next)
        cy.wait(4000)
        cy.EnterText(TXT_Password, Password_Id)
        cy.wait(2000)
        // cy.xpath('//button[@id="passwordNext"]').click() //--(Use if running on Electron Browser)
        cy.Click(BTN_Next)
        cy.wait(5000)
      })
    })
    it('Login', () => {
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
          .type('Auto-QA Test ' + Math.floor(Math.random() * 1000))

        cy.get('#poolDescription')
          .type('Test Description')

        cy.get('button[class="btn btn-primary"]').click()
        cy.wait(2000)

        cy.contains('Select State').click()
        cy.wait(4000)
        cy.contains('New York').click()
        cy.contains('New Jersey').click()
        cy.wait(4000)

        cy.contains('Select Status').click()
        cy.wait(4000)
        cy.contains('Pre Booking').click()
        cy.wait(4000)

        cy.get('.ngx-slider-pointer-min')
          .focus()
          .type('{rightArrow}'.repeat(6))

        cy.get('.ngx-slider-pointer-max')
          .focus()
          .type('{leftArrow}'.repeat(2))

        cy.wait(2000)

        cy.get('button[class="btn btn-primary btn-next"]').contains(' Continue ').click()
        cy.wait(10000)

        cy.contains('Select Intended Study').click()
        cy.wait(2000)
        // cy.get('input[class="ng-valid ng-dirty ng-touched"]').type('Moderna 1273-p301')
        // cy.wait(2000)
        // cy.get('input[aria-label="Moderna 1273-p301"]').click({multiple: true})
        // cy.contains('Moderna 1273-p301').scrollIntoView().should('be.visible')
        // cy.contains('Valneva').click({force:true})

        // cy.get('div:contains("Moderna 1273-P301")').click({force:true})
        // cy.get('div').contains('Moderna 1273-P301').click({force:true})

        cy.wait(2000)
        cy.get('.submit-buttons').contains(' Review Pool ').click()
        cy.wait(5000)
        // cy.get('button[class="btn btn-primary btn-sm btn-next"]').click({ force: true })
      })
    })
  }
}
export default new PoolBuilder