describe("Page Object Model Web", () => {

  it("visit Web", () => {
    cy.visit("http://localhost:6061/");
    cy.url().should("eq", "http://localhost:6061/");
    cy.url().then((url) => {
      expect(url).to.equal("http://localhost:6061/");
    })
  })

  it("type quote", () => {
    cy.get("[data-testid=textInputQuote]").type("Quote Spirit");
  })

  it("Select color", () => {
    cy.get("[data-testid=selectColor]").select(2);
  })

  it("Save Quote", () => {
    cy.get("[data-testid=addQuote]").click();
    cy.get(':nth-child(2) > .panel > .panel-body').should("contain.text", "Quote");
  })

  it("Clear Quote", () => {
    cy.wait(3000);
    cy.contains("Quote Spirit").click().should("not.exist");
  })
})