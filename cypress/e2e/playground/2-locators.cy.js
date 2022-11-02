/// Importamos cypress
///<reference types="cypress" />

// Los locators nos sirven para identificar los elementos con los cuales queremos interactuar
// Existen varios tipos de Locators como xPaths relativos, xpath absolutos , id, name, CSS Selector
// Por defecto cypress utiliza CSS Selector.
// Todo elemento web tiene su CSS Selector  (puede ser la clase, el name, innertext, o cualquier atributo de CSS)

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/");
  });

  it("Localizar elementos de distintas formas", () => {
    //Para buscar los elementos antes de interactuar podemos usar *cy.get()* y *cy.contains()*

    //Localizar elemento usando la clase CSS
    cy.get(".heading").should("be.visible");
    //Localizar elemento usando el texto. Hay que tener en cuenta que Cypress trae siempre el primer elemento
    cy.contains("Welcome to the-interne").should("be.visible");
    //Localizar elemento usando id
    cy.get("#content").should("be.visible");
    //Localizar elemento recorriendo el DOM
    cy.get("#content > h1").should("be.visible");
    //Localizar elemento segun el tag HTML
    cy.get("h1").should("be.visible");
    //Localizar el elemento usando XPath. Hay que instalar el plugin https://www.npmjs.com/package/@cypress/xpath
    cy.xpath('//*[@id="content"]/h1').should("be.visible");

    //*as* permite guardar un elemento localizado para su reutilización bajos un alias
    cy.get(".heading").as("logo");
    cy.get("@logo").should("be.visible");

    //Localizar varios elementos usando *find*
    cy.get("#content").find("li").should("have.length", 44);

    //Localizar varios elementos usando *within*
    cy.get("#content").within(() => {
      cy.get("li").first().find("a").should("have.text", "A/B Testing");
      cy.get("li").eq(1).find("a").should("have.text", "Add/Remove Elements");
      cy.get("li").eq(2).find("a").should("have.text", "Basic Auth");
      cy.get("li").last().find("a").should("have.text", "WYSIWYG Editor");
    });
  });
});
