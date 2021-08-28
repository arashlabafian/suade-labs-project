describe("Delete Row", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("has title", () => {
    cy.contains("People Table");
  });

  it("should delete the first row", () => {
    const firstRowDropdown = cy.get("[data-id=drop]").eq(0);
    firstRowDropdown.click();
    cy.get("[data-id=delete]").eq(0).click();
  });
});

describe("Form Editor", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("open modal", () => {
    const firstRowDropdown = cy.get("[data-id=drop]").eq(0);
    firstRowDropdown.click();
    cy.get("[data-id=edit]").eq(0).click();
    cy.get(".modal-dialog ").should("be.visible");
  });
  it("should fill the firm", () => {
    const firstRowDropdown = cy.get("[data-id=drop]").eq(0);
    firstRowDropdown.click();
    cy.get("[data-id=edit]").eq(0).click();
    cy.get("[data-id=name]").click().clear().type("arash");
    cy.get("[data-id=age]").click().clear().type(22);
    cy.get("[data-id=eye-color]").click().clear().type("black");
    cy.get("[data-id=gender]").click().clear().type("male");
    cy.get("[data-id=preferredPet]").click().clear().type("Dog");
    cy.get("[data-id=preferredFruit]").click().clear().type("Banana");
    cy.get("[data-id=save]").click();
    cy.get(".modal-dialog ").should("not.be.visible");
  });
});

describe("Chart", () => {
  it("should open charts", () => {
    cy.get("[data-id=Charts]").click();
  });
  it("has eye color chart", () => {
    cy.get("#bar-chart").should("be.visible");
  });
  it("has gender chart", () => {
    cy.get("#doughnut-chart").should("be.visible");
  });
});

describe("Map", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/map");
  });

  it("should open map", () => {
    cy.get("[data-id=Geographic]").click();
  });
  it("has geo map", () => {
    cy.get(".vue2leaflet-map").should("be.visible");
  });
});
