Feature: Testing the category functionality in kasirAja

    Scenario: I want to positive test the category functionality
        Given I already login with email "toko@dwiky.com" and password "toko24dwiky"
        Then I redirect to the dashboard page
        When I click on menu kategori
        When I click on button tambah
        When I input nama kategori "<namaKategori>" and deskripsi "<deskripsi>"
        When I click button simpan
        Then I must see a successful message

        Examples:
            | namaKategori | deskripsi |
            | PC Gaming    | PC Gaming |