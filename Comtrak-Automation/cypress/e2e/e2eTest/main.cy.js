import PoolBuilder from '../Modules/PoolBuilder.js'
import LoginSelectors from '../../Selectors/LoginSelectors.js'

const {TXT_Email, Email_Id, TXT_Password, Password_Id, BTN_Next, BTN_SignIn, } = LoginSelectors

beforeEach(() => {
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
// describe('TC:01- Create a new Patient Pool Builder', () => {
//     PoolBuilder.CreatePoolBuilder()
// })
describe('ComTrak - Patient Pool Builder', () => {

  it('TC-01 - Create a new Patient Pool Builder', () => {
    PoolBuilder.CreatePoolBuilder()
  })

  it('TC-02 - Review and Publish the Patient Pool Builder', () => {
    PoolBuilder.Review_and_PublishPoolBuilder()
  })

  // it('TC-03 - Update the Patient Pool Builder', () => {
  //   PoolBuilder.UpdatePoolBuilder()
  // })

  // it('TC-04 - Delete the Patient Pool Builder', () => {
  //   PoolBuilder.DeletePoolBuilder()
  // })
})