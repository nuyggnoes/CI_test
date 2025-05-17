describe("Login flow", () => {
    it("logs in and redirects to home", () => {
        cy.visit("http://localhost:3000/test/login");

        cy.get('input[name="email"]').type("test@test.com");
        cy.get('input[name="password"]').type("1234");

        cy.contains("LOGIN").click();

        cy.url().should("eq", "http://localhost:3000/");

        cy.getCookie("token").should("exist");
    });
});
