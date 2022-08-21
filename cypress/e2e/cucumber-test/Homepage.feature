Feature: Koligrum Homepage

        I want to be able to submit a quote
    @Home @BlueColour
    Scenario: I want to be able to submit a blue quote
        Given I open BDD Atlas Web
        When I type a quote: Ayumu tenanan
        And I choose the Blue colour
        Then I Verify quote submitted "Blue" and "Ayumu tenanan"
        Then I Verifiy quote has been deleted: Ayumu
    
    @Home @AllColour
    Scenario Outline: I want to able to submit a <colour> quote
      Given I open BDD Atlas Web
      When I type a quote: Ayumu tenanan
      And I choose the <colour> colour
      Then I Verify quote submitted "<colour>" and "Ayumu tenanan"
      Then I Verifiy quote has been deleted: Ayumu
   