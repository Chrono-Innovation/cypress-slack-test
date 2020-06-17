Cypress.Commands.add('visitWorkspace', (workspace) => {
  if (!workspace) throw new Error('Param [workspace] is required')
  return cy.visit(`https://${workspace}.slack.com`)
})

Cypress.Commands.add('login', (username, password) => {
  if (!username) throw new Error('Param [username] is required')
  if (!password) throw new Error('Param [password] is required')

  cy.get('#email').type(username)
  cy.get('#password').type(password)
  cy.get('#signin_btn').click()
})

Cypress.Commands.add('goToChannel', (channelName) => {
  cy.findAllByText(channelName).scrollIntoView().click()
})

Cypress.Commands.add('getVisibleMessages', () => {
  return cy.get('[data-qa="message_container"]')
})

Cypress.Commands.add('sendMessage', (message, force = false) => {
  cy.findByRole('textbox', { name: /message/i }).type(message)
  cy.findByRole('button', { name: /send message/i }).click({ force })
})
