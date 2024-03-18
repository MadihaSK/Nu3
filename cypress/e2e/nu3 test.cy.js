describe('nu3 login page', () => {
  //it('Test log in functionality', () => {

  beforeEach(() => {
    cy.visit('https://www.nu3.de/account/login')
    //cy.get('#wps-overlay-close-button').click()
    cy.get('#gdpr-confirm-all-button').click()

   })
    //New user registerartion
    it('Test new user creation functionality', () => {
    cy.get('.new-customer > .card > .content-block > .btn').click()
    cy.get('#FirstName').type('User')
    cy.get('#LastName').type('Name')
    cy.get('#Email').type('nameu0108@gmail.com')
    cy.get('#CreatePassword').type('pass12345@')
    cy.get('#create_customer > .btn').click()
    cy.get('.errors').should('exist') // verify error message for register with existing email address
    cy.wait(2000)
  })

//User log in
it('Test user login functionality with valid credentials', () => {

  const email1= 'nameu0108@gmail.com'
  const password1 = 'pass12345@'

    cy.get('input[name="customer[email]"]').type(email1)
    cy.get('input[name="customer[password]"]').type(password1)
    cy.get('#customer_login > :nth-child(5)').click()
    cy.url().should('include', '/account') // assertion to check user redirect to dashboard
    cy.wait(2500)
 })

 it('Should display error message with invalid credentials', () => {
  const email = 'invalid@email.com'
  const password = 'invalidpassword'

  cy.get('input[name="customer[email]"]').type(email)
    cy.get('input[name="customer[password]"]').type(password)
    cy.get('#customer_login > :nth-child(5)').click()
    cy.get('.errors').should('exist') // verify error message on invalid credentials
    cy.wait(2000)
 })

// Continue as guest
it('Test continue as guest', () => { 
cy.get(':nth-child(1) > .card > .content-block > .btn').click()
cy.url().should('include','/cart') // verify that cart link is opened
})
  })



