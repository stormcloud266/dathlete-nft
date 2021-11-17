import styled from 'styled-components'
import { Header } from '../components/global'
import { Hero } from '../components/landing'

export function LandingPage() {
	return (
		<>
			<Header />
			<Main>
				<Hero />
			</Main>
		</>
	)
}

const Main = styled.main`
	display: flex;
	align-items: center;
	flex-direction: column;
`
