import {render, screen} from '@testing-library/react'
import {Icons} from './index'
import BlinkistLogo from '../../../images/BlinkistLogo.svg';

describe("Display logo", () => {
    test("Should display logo", () => {
        render(<Icons source={BlinkistLogo} />)
        const logo = screen.getByRole("img")
        expect(logo).toBeInTheDocument()
    })
})