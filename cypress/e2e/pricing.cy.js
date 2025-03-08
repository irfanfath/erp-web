describe("Pricing Page", () => {
    it("should load pricing page correctly", () => {
      cy.visit("http://localhost:5173/pricing");
      cy.contains("Paket Harga").should("be.visible");
    });
  });