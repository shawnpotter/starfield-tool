import { render } from '@testing-library/react'
import WeaponPlanner from '../page'

it('renders weapon planner page unchanged', () => {
	const { container } = render(<WeaponPlanner />)
	expect(container).toMatchSnapshot()
})
