Feature: Testing the login functionality in kasirAja

    Scenario Outline: I want to negative test the login functionality
        Given I am on the login page
        When I input email "<email>" and password "<password>"
        And I click button login
        Then I should see a message saying "<message>"

        Examples:
            | email             | password    | message                                 |
            | tokonya@dwiky.com | tokodwiky   | Kredensial yang Anda berikan salah      |
            |                   | toko24dwiky | \"email\" is not allowed to be empty    |
            | toko@dwiky.com    |             | \"password\" is not allowed to be empty |
            | toko@dwiky        | toko24dwiky | \"email\" must be a valid email         |
            |                   |             | \"email\" is not allowed to be empty    |

    Scenario: I want to positive test the login functionality
        Given I am on the login page
        When I input email "<email>" and password "<password>"
        And I click button login
        Then I must navigated to dashboard page

        Examples:
            | email          | password    | message  |
            | toko@dwiky.com | toko24dwiky | kasirAja |