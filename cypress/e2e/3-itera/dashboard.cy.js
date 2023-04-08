describe('Dashboarad', () => {
    Cypress.on('uncaught:exception',(err,runnable)=> {
        return false
    })

    beforeEach(() => {
      cy.visit('https://itera-qa.azurewebsites.net/Login')
    })
    
    it('Search Visible Name on Dashboard', () => {
      cy.get('[id="Username"]').clear().type('deta')
      cy.get('[id="Password"]').type('123456').wait(10)
      cy.get('[name="login"]').click()
      cy.get('[id="searching"]').clear().type('Carla Abernathy').wait(10)
      cy.get('[value="Search"]').click()
      cy.get('table').contains('td','Carla Abernathy').should('be.visible')

    })

    it('Search Name on Dashboard Not Found', () => {
        cy.get('[id="Username"]').clear().type('deta')
        cy.get('[id="Password"]').type('123456').wait(10)
        cy.get('[name="login"]').click()
        cy.get('[id="searching"]').clear().type('Bernadeta').wait(10)
        cy.get('[value="Search"]').click()
        cy.get('table').contains('td','No Match').should('be.visible')
  
      })
    
    
    
  })