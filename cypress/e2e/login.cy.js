describe("Login Page", () => {
  it("should allow user to login with correct credentials", () => {
    cy.visit("http://localhost:5173/login");
    cy.get("input[placeholder='Masukkan username']").type("test_irfan");
    cy.get("input[placeholder='Masukkan password']").type("TestIrfan123");
    cy.get("button").contains("Login").click();
    cy.url().should("include", "/");
  });

  it("should show an error message with incorrect credentials", () => {
    cy.visit("http://localhost:5173/login");
    cy.get("input[placeholder='Masukkan username']").type("wrong_user");
    cy.get("input[placeholder='Masukkan password']").type("wrong_password");
    cy.get("button").contains("Login").click();
    cy.contains("Username atau password salah!").should("be.visible");
  });
});