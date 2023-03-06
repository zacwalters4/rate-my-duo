describe('Home page testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should have a header with the title', () => {
    cy.get('.header')
    .contains('Rate my Duo')
  })

  it('should have a search box', () => {
    cy.get('main')
      .find('.search-form')
      .find('.search-input')
      .should('have.attr', 'placeholder', 'Enter a battletag...')
  })

  it('should have an example under the search bar', () => {
    cy.get('main')
      .contains('For example: wutt#1337')
  })

  it('should have an about section', () => {
    cy.get('main')
      .contains('ABOUT')
    cy.get('main')
      .contains('Welcome to Rate my Duo, ')
  })
})