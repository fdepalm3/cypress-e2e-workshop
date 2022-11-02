/// Importamos cypress
///<reference types="cypress" />

// Aprendamos como se estructura un test en Cypress.
// Recordemos que Cypress utiliza Mocha como Test Runner, asi que comparten sintaxis

// *describe* se usa para describir un conjunto de test.
describe("Estructura de Test", () => {
  // *before* especifica acciones a ejecutar de empezar un conjunto de test. Se ejecuta una sola vez por conjunto de test
  before(() => {
    cy.log("Ejecutando el before"); // *cy.log()* sirve para mostrar logs
  });

  // *beforeEach* especifica acciones a ejecutar antes de cada test. Se ejecuta varias veces por conjunto de test.
  beforeEach(() => {
    cy.log("Ejecutando el before each");
    // *cy.visit* sirve para navegar a urls
    cy.visit("https://the-internet.herokuapp.com/");
  });

  // *it* es el test en sí mismo. Podemos tener varios *it* dentro de un *describe*
  it("Validar que el logo sea esta visible", () => {
    cy.contains("Welcome to the-internet").should("to.be.visible");
  });

  it("Validar titulo del navegador ", () => {
    cy.title().should("eq", "The Internet");
  });

  // *afterEach* especifica acciones a ejecutar despúes de cada test. Se ejecuta varias veces por conjunto de test.
  afterEach(() => {
    cy.log("Ejecutando el after each");
  });

  // *after* especifica acciones a ejecutar despues de un conjunto de test. Se ejecuta una sola vez por conjunto de test.
  after(() => {
    cy.log("Ejecutando el after all");
  });
});
