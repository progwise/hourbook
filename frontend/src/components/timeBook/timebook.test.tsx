import { render, screen } from "@testing-library/react"
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from "node:constants"
import { TimeBook } from './timeBook'

describe('the timebook component...', () => {
    it('...should render the table', () => {
        const { container } = render(<TimeBook></TimeBook>)

        const table = container.querySelector("table")
        expect(table).toBeInTheDocument()
        const headline = container.querySelector("h2")
        expect(headline).toBeInTheDocument()

        const rows = container.querySelectorAll("table tbody tr")

        expect(rows.length).toBe(1)

        screen.debug()

    })
})