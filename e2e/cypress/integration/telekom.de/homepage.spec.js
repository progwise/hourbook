describe('The telekom homepage', () => {

    beforeEach(() => {
        cy.visit('www.telekom.de')
    }
    )

    it('...renders lockdown info', () => {
        cy.contains('Lockdown: Info')
    })

    it('...can accept all cookies', () => {
        cy.get('button').contains('Accept All').click()
    })

})