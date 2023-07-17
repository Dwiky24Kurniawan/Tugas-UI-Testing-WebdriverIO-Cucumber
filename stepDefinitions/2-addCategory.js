import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../POM/loginPage';
import DashboardPage from '../POM/dashboardPage';
import CategoryPage from '../POM/categoryPage';

Given('I already login with email {string} and password {string}', async function (email, password) {
    await LoginPage.open();
    await LoginPage.emailTextfield.setValue(email);
    await LoginPage.passwordTextfield.setValue(password);
    await LoginPage.loginButton.click();
});

Then ('I redirect to the dashboard page', async () => {
    await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
    await expect(DashboardPage.textKasirAja).toExist();
});

When('I click on menu kategori', async () => {
    await DashboardPage.menuKategori.click();
});

When('I click on button tambah', async () => {
    await CategoryPage.buttonTambah.click();
});

When('I input nama kategori {string} and deskripsi {string}', async function (namaKategori, deskripsi) {
    await CategoryPage.namaTextfield.setValue(namaKategori);
    await CategoryPage.deskripsiTextfield.setValue(deskripsi);
});

When('I click on button simpan', async () => {
    await CategoryPage.buttonSimpan.click();
})

Then('I must see a successful message {string} {string}', async (sukses, ditambahkan) => {
    await expect(CategoryPage.successMessage).toExist();
    await expect(CategoryPage.successMessage).toHaveTextContaining(sukses);
    await expect(CategoryPage.itemDitambahkan).toExist();
    await expect(CategoryPage.itemDitambahkan).toHaveTextContaining(ditambahkan);
});