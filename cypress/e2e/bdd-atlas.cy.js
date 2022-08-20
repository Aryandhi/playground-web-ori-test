describe("Page Object Model Web", () => {

  it("Visit Web and Input Quote", () => {
    cy.visit("http://localhost:6061/");

    cy.get('[data-testid=textInputQuote]').type("Fazz");
  })

  it("Select color", () => {
    cy.get("[data-testid=selectColor]").select(1);
  })

  it("Save Quote", () => {
    cy.get("[data-testid=addQuote]").click();
  })

  it("Remove Quote", () => {
    cy.get(':nth-child(2) > .panel > .panel-body').click();
  })
})