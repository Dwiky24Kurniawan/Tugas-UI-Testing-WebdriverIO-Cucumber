Feature: Login

    Background:
        Given I am on the login page

    Scenario: TC_001 - Negative Test - Login with invalid credentials
        When I input email "<email>" and password "<password>"
        And I click on button login
        Then I must see error message saying "<errorMessage>"

        Examples:
            | email             | password    | errorMessage                            |
            | tokonya@dwiky.com | tokodwiky   | Kredensial yang Anda berikan salah      |
            |                   | toko24dwiky | \"email\" is not allowed to be empty    |
            | toko@dwiky.com    |             | \"password\" is not allowed to be empty |
            | toko@dwiky        | toko24dwiky | \"email\" must be a valid email         |
            |                   |             | \"email\" is not allowed to be empty    |

    Scenario: TC_002 - Positive Test - Login with valid credentials
        When I input email "<email>" and password "<password>"
        And I click on button login
        Then I must navigated to dashboard page

        Examples:
            | email          | password    | message  |
            | toko@dwiky.com | toko24dwiky | kasirAja |