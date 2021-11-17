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
	background: rgba(230, 255, 255, 1);
	width: 100vw;
	height: 100vh;
`
