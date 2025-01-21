Cypress.Commands.add('logStep', (stepDescription) => {
    cy.log(`Step: ${stepDescription}`);
  });