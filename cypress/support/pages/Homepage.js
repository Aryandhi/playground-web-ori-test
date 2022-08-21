const locator = require("../locator/HomepageLocator");
const css_color = {
  Yellow: "background-color: yellow;",
  Blue: "background-color: blue;",
  Cyan: "background-color: cyan;",
  Magenta: "background-color: magenta;"
}

class Homepage {
  
  async visit(path) {
    cy.visit("http://localhost:6061");
    return cy.url().should("eq", "http://localhost:6061/");
  }

  /**
   * GIVEN user dihalaman home
   * WHEN menginputkan quote di textarea
   * WHEN memilih salah satu warna di list dropdwon
   * WHEN klik button submit
   * THEN sebuah Quote akan tampil di List of Grid View dengan background blue
   */
  async type_quote(quote) {
    return cy.get(locator.datatestid.tf_quote).type(quote);
  }

  async choose_color(colour) {
    return cy.get(locator.datatestid.sel_colour).select(colour);
  }

  async submit_quote(colour, quote) {
    cy.get(locator.datatestid.btn_submit).click();
    // cy.get(locator.datatestid.cont_colour).eq(1).should("have.attr", "style").then(color => {
    //   expect(color).to.be.equal(css_color[colour]);
    // })
    // return cy.contains(quote).should("contain.text", "Quote");
  }

  async clear_quote() {
    return cy.contains(quote).click().should("not.exist");
  }
}

module.exports = Homepage;