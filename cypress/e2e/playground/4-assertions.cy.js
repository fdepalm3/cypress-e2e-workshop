/// Importamos cypress
///<reference types="cypress" />

// Cypress maneja dos tipos de validaciones: implícitas y explicitas.
// Las validaciones implicitas son las que usan should() y and(). Recomienda Cypress
// Las validaciones explícitas son las que usan el expect(). Vienen de la librería Chai
describe("Validaciones más comunes", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
  });

  it("Validaciones más comunes", () => {
    //Validar cantidad de elementos
    cy.get("#content").find("ul").should("have.length", 1);
    cy.get("#content").find("li").should("have.length", 44);
    //Validar la clase CSS
    cy.contains("Welcome to the-internet").should("have.class", "heading");
    //Validar el texto del elemento
    cy.get("#content").find("li").first().should("have.text", "A/B Testing");
    cy.get("#content").find("li").first().should("include.text", "A/B");
    //Validar la visibilidad del elemento
    cy.contains("Welcome to the-internet").should("be.visible");
    //Validar atributo del elemento
    cy.get(".large-4 > div > a").as("pageFooterLink");
    cy.get("@pageFooterLink").should("have.attr", "href").and("include", "http://elementalselenium.com/");
    cy.get("@pageFooterLink").should("have.attr", "target").and("include", "_blank");

    //Validar atributo del elemento usando validaciones explícitas
    cy.get(".large-4 > div > a").as("pageFooterLink");
    cy.get("@pageFooterLink").should(($footerLink)=>{
      expect($footerLink.attr('href')).to.eq('http://elementalselenium.com/')
      expect($footerLink.attr('target')).to.eq('_blank')
    })
  });
});
