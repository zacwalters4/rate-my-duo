describe('Header testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should have a header with the title', () => {
    cy.get('.header')
    .contains('Rate my Duo')
  })

  it('should have a search box', () => {
    cy.get('.header')
      .get('.search-form')
      .get('.search-input')
      .should('have.attr', 'placeholder', 'Enter a battletag...')
  })

  it('should have a saved button and home button', () => {
    cy.get('.header')
      .get('button').contains('Saved')
    cy.get('.header')
      .get('button').contains('Home')
  })

  it('should navigate to their respective pages when home and saved are clicked', () => {
    cy.get('.header')
      .get('button').contains('Saved')
      .click()
      .url().should('include', '/saved')
    cy.get('.header')
      .get('button').contains('Home')
      .click()
      .url().should('include', '/')
  })
  it('should navigate to the searched names account page', () => {
    cy.get('.header')
      .find('.search-form')
      .find('.search-input')
      .type('Rokit#11457{enter}')
      cy.intercept("GET", "https://overfast-api.tekrop.fr/players/Rokit-11457/stats?gamemode=competitive&platform=pc&hero=all-heroes", {fixture: "account.json"})
      .url().should('include', '/account/Rokit-11457')
  })
})