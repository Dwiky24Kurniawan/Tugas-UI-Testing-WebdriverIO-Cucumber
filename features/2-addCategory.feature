Feature: Add Category

    Scenario: TC_002 - Positive Test - Add Category
        Given I already login with email "toko@dwiky.com" and password "toko24dwiky"
        Then I redirect to the dashboard page
        When I click on menu kategori
        When I click on button tambah
        When I input nama kategori "<namaKategori>" and deskripsi "<deskripsi>"
        When I click on button simpan
        Then I must see a successful message "<sukses>" "<ditambahkan>"

        Examples:
            | namaKategori | deskripsi | sukses  | ditambahkan      |
            | PC Gaming    | PC Gaming | success | item ditambahkan |