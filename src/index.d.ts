// Type definitions for cypress-slack-test

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Navigates Cypress to the required Slack workspace
     *
     * @example `cy.visitWorkspace('example')` goes to `https://example.slack.com
     *
     * @param workspaceName
     */
    visitWorkspace(workspaceName: string): Chainable<Subject>

    /**
     * When on the login page, using this function will fill and submit the login
     * form with the given params
     *
     * @param username
     * @param password
     */
    login(username: string, password: string): Chainable<Subject>

    /**
     * Finds the channel with the given name and navigate to it
     *
     * @param channelName
     */
    goToChannel(channelName: string): Chainable<Subject>

    /**
     * Returns a list of the visible messages of a channel
     */
    getVisibleMessages<K extends keyof HTMLElementTagNameMap>(): Chainable<
      JQuery<HTMLElementTagNameMap[K]>
    >

    /**
     * Send the given message to the current channel
     *
     * @param message
     */
    sendMessage(message: string): Chainable<Subject>
  }
}
