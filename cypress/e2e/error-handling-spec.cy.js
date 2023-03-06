describe('Error handling testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should show route to 404 when an nonexistent route is attempted', () => {
    cy.visit('http://localhost:3000/cheese')
    .url().should('include', '/404')
  })

  it('should display an error message on the 404 page', () => {
    cy.visit('http://localhost:3000/404')
    cy.get('main')
      .contains('ERROR 404')
    cy.get('main')
      .contains('Page not found.')
  })

  it('should display an error message when searching an account that does not exist', () => {
    cy.get('.header')
      .find('.search-form')
      .find('.search-input')
      .type('cheese#99{enter}')
      .get('main').contains('This battletag is invalid or does not exist.')
  }) 
})