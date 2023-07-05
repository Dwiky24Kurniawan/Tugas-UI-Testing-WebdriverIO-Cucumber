import BasePage from './basePage.js';

class LoginPage extends BasePage {

    get emailTextfield() {
        return $('#email')
    }

    get passwordTextfield() {
        return $('#password')
    }

    get loginButton() {
        return $('button[type="submit"]')
    }

    get errorMessage() {
        return $('div[role="alert"]')
    }

    open() {
        return super.open('https://kasirdemo.belajarqa.com')
    }

}

export default new LoginPage();