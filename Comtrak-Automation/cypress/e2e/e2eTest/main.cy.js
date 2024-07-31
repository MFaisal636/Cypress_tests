import login from '../../e2e/Modules/login'
import loginData from '../../fixtures/loginData'



describe('ComTrak login', () => {

    login.CreateSession()
    login.LoginSession()

})


