describe('Account page testing', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://overfast-api.tekrop.fr/players/Rokit-11457/stats?gamemode=competitive&platform=pc&hero=all-heroes", {fixture: "account.json"})
    cy.visit('http://localhost:3000/account/Rokit-11457')
  })

  it('should display the account name and score', () => {
    cy.get('main')
      .contains('Rokit#11457')
    cy.get('main')
      .contains('416045')
  })

  it('should have a save button', () => {
    cy.get('main')
      .find('button')
      .contains('Save')
  })

  it('should have a list of stats shown', () => {
    cy.get('main')
      .find('.account-stats')
      .contains('Objective Kills')
    cy.get('main')
      .find('.account-stats')
      .contains('Final Blows')
    cy.get('main')
      .find('.account-stats')
      .contains('Deaths')
  })
})