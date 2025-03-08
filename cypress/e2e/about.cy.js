describe("About Page", () => {
    it("should load about page correctly", () => {
      cy.visit("http://localhost:5173/about");
      cy.contains("Siapa Kami").should("be.visible");
      cy.contains("Visi Kami").should("be.visible");
      cy.contains("Tentang Kami").should("be.visible");
    });
  });