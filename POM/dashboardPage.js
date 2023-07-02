import BasePage from './basePage.js';

class DashboardPage extends BasePage {

    get textKasirAja () {
        return $('//h3[contains(text(),"kasirAja")]')
    }

    get menuKategori () {
        return $('a[href="/categories"]')
    }

    get menuPengguna () {
        return $('a[href="/users"]')
    }
}
export default new DashboardPage();