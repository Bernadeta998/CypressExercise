describe('Login Itera', () => {
    Cypress.on('uncaught:exception',(err,runnable)=> {
        return false
    })

    beforeEach(() => {
      cy.visit('https://itera-qa.azurewebsites.net/Login')
    })
    it('Failed Login - Empty Credentials', () => {
        cy.get('[id="Username"]')
        cy.get('[id="Password"]')
        cy.get('[name="login"]').click()
        cy.get('.alert-danger').contains('Wrong username or password')
        cy.get('.field-validation-error').contains('Please enter password')
      })
      
    it('Failed Login - Wrong Credentials', () => {
        cy.get('[id="Username"]').clear().type('deta')
        cy.get('[id="Password"]').type('1234').wait(10)
        cy.get('[name="login"]').click()
        cy.get('.alert-danger').contains('Wrong username or password')
      })

    it('Success Login', () => {
      cy.get('[id="Username"]').clear().type('deta')
      cy.get('[id="Password"]').type('123456').wait(10)
      cy.get('[name="login"]').click()
      //cy.get('.div').should('have.class','container body-content')//.get('div').get('.h3').contains('Welcome deta')
      cy.contains('Dashboard')
      cy.contains('Welcome deta')
    })

    it('Success Logout', () => {
        cy.get('[id="Username"]').clear().type('deta')
        cy.get('[id="Password"]').type('123456').wait(10)
        cy.get('[name="login"]').click()
        //cy.get('.div').should('have.class','container body-content')//.get('div').get('.h3').contains('Welcome deta')
        cy.contains('Log out').click()
      })
   
  })