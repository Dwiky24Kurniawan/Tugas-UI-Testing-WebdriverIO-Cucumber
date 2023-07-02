import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../POM/loginPage';
import DashboardPage from '../POM/dashboardPage';

Given('I am on the login page', async () => {
    await LoginPage.open();
    await expect(browser).toHaveTitle('kasirAja');

});

When('I input email {string} and password {string}', async function (email, password) {
    await LoginPage.emailTextfield.setValue(email);
    await LoginPage.passwordTextfield.setValue(password);
});

When('I click on button login', async () => {
    await LoginPage.loginButton.click();
})

Then('I must see a message saying {string}', async function (message) {
    await expect(LoginPage.errorMessage).toExist();
    await expect(LoginPage.errorMessage).toHaveTextContaining(message);
})

Then('I must navigated to dashboard page', async () => {
    await expect(DashboardPage.textKasirAja).toExist();
});