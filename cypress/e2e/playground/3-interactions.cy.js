/// Importamos cypress
///<reference types="cypress" />

// Una vez localizados los elementos web, debemos interactuar con ellos para lograr el comportamiento deseado del test.
// Si bien existen muchísimas formas de interactuan con los elementos, en la mayoría de las ocasiones vamos a usar las mismas.

describe("Interacciones más comunes", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
  });

  it("Clicks", () => {
    // *click* sirve para hacer click izquierdo sobre un elemento
    cy.contains("Form Authentication").click();
  });

  it("Escribir y Borrar", () => {
    cy.contains("Form Authentication").click();

    // *type* sirve para escribir el texto en un elemento web.
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("supersecretpassword");
    // *clear* sirve para borrar el texto en un elemento web
    cy.get("#username").clear();
  });

  it("Checkboxes", () => {
    cy.contains("Checkboxes").click();

    //*check* sirve para activar un checkbox
    cy.get("#checkboxes").find("input").first().check();
    //*check* sirve para activar un uncheckbox
    cy.get("#checkboxes").find("input").last().uncheck();
  });

  it("Dropdowns", () => {
    cy.contains("Dropdown").click();

    //*select* sirve para activar un seleccionar una opción de un Dropdown
    cy.get("#dropdown").select("Option 1");
  });

  it.only("Hover", () => {
    cy.contains("Hovers").click();

    cy.get(".example").find("img").first().trigger("mouseover");
    cy.get(".example").find(".figcaption").first().invoke("show");
  });
});
