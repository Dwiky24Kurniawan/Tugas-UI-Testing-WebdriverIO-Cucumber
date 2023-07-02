import BasePage from './basePage.js';

class CategoryPage extends BasePage{

    get buttonTambah(){
        return $('a[href="/categories/create"]')
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
    
    get deskripsiTextfield () {
        return $('#deskripsi')
    }
    
    get buttonSimpan () {
        return $('//*[contains(text(),"simpan")]')
    }
}
export default new CategoryPage();