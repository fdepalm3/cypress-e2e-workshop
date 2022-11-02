/// Importamos cypress
/// <reference types='cypress' />

// Podemos realizar e interceptar peticiones http para hacer validaciones,obtener datos de pruebas u 
// obtener algún dato que nos facilite la navegación. Por ejemplo, el token para inciar sesión

describe("Uso de request en Cypress", () => {
  beforeEach(() => {
    //*cy.visit* sirve configurar la url base
    cy.visit("https://restful-booker.herokuapp.com");
  });

  it("Validar requests", () => {
    //*cy.request* realiza una request petición http y devuelvo la respuesta
    cy.request("POST", "/auth", {
      username: "admin",
      password: "password123",
    }).then((response) => {
      //Realizamos las validaciones corresponde sobre el respuesta
      expect(response.status).to.eq(200);
      expect(response).to.have.property("headers");
      expect(response).to.have.property("duration");
      expect(response.body["token"]).to.not.be.null;
      expect(response.body["token"]).have.to.length(15);
    });
  });
});
