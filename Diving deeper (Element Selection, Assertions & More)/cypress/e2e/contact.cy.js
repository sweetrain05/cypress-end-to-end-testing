/// <reference types="Cypress" />

describe('contact form', () => {
    it('should submit the form', () => {
        cy.visit('http://localhost:5173/about');

        cy.get('[data-cy="contact-input-message"]').type('Hello world!');
        cy.get('[data-cy="contact-input-name"]').type('John Doe');
        cy.get('[data-cy="contact-input-email"]').type('test@example.com');
        cy.get('[data-cy="contact-btn-submit"]')
            .contains('Send Message')
            .and('not.have.attr', 'disabled');
        cy.get('[data-cy="contact-btn-submit"]').click();
        cy.get('[data-cy="contact-btn-submit"]')
            .contains('Sending...')
            .should('have.attr', 'disabled');
    });
});
