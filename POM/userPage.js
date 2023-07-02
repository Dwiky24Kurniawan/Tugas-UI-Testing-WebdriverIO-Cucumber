import BasePage from './basePage.js';

class UserPage extends BasePage{

    get buttonTambah(){
        return $('a[href="/customers/create"]')
    }

    get successMessage(){
        return $('//*[contains(text(),"success")]')
    }

    get itemDitambahkan(){
        return $('//*[contains(text(),"item ditambahkan")]')
    }

    get namaTextfield () {
        return $('#nama')
    }
    
    get emailTextfield () {
        return $('#email')
    }

    get passwordTextfield () {
        return $('#password')
    }
    
    get buttonSimpan () {
        return $('//*[contains(text(),"simpan")]')
    }
}
export default new UserPage();