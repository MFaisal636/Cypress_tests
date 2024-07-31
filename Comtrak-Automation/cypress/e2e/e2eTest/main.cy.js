import login from '../../e2e/Modules/login'
import loginData from '../../fixtures/loginData'
import NewPoolBuilder from '../Modules/PoolBuilder'



describe('ComTrak login', () => {

    login.CreateSession()
    login.LoginSession()
    NewPoolBuilder.CreatePoolBuilder()

})


