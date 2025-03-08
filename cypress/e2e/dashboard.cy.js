describe("Dashboard Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173/login");
      cy.get("input[placeholder='Masukkan username']").type("test_irfan");
      cy.get("input[placeholder='Masukkan password']").type("TestIrfan123");
      cy.get("button").contains("Login").click();
    });
  });