describe("Home Page", () => {
    it("should load home page correctly", () => {
        cy.visit("http://localhost:5173/");
        cy.contains("Login").should("be.visible");
        cy.contains("Sistem ERP untuk Bisnis Anda").should("be.visible");
        cy.contains("Lihat Detail").should("be.visible");

    });
});