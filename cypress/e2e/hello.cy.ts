/// <reference types="Cypress" />

describe('Hello World Project', () => {
  it('redirects user to the reactjs page', () => {
    cy.visit('http://localhost:3000')

    const learnReact = cy.contains("Learn React")

    learnReact
    .should('have.attr', 'href', 'https://reactjs.org')
    .should('have.attr', 'target', '_blank')

    learnReact.get('a').then(element => {
        cy
        .request(element.prop("href"))
        .its('status')
        .should('eq', 200);
    })
  })
})