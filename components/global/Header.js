import styled from 'styled-components'
import Image from 'next/image'
import { Button, Wrapper } from '../UI'
import logo from '../../assets/logo.svg'

const Header = () => {
	return (
		<StyledHeader>
			<Wrapper>
				<Row>
					<ImageFrame>
						<ImageContainer>
							<Logo src={logo} height='83' width='100' quality={100} />
						</ImageContainer>
					</ImageFrame>

					<Title>The Dathlete Experiment</Title>

					<ButtonFrame>
						<Button href='https://t.me/TheDathleteExperiment'>
							Join the Telegram
						</Button>
					</ButtonFrame>
				</Row>
			</Wrapper>
		</StyledHeader>
	)
}

export default Header

const StyledHeader = styled.header`
	position: fixed;
	width: 100%;
	background-image: linear-gradient(to right, #ffc115, #f15025, #2c112e);
	padding: 0.4rem 0 0;
`

const Row = styled.header`
	justify-content: space-between;
	display: flex;
	align-items: center;
	width: 100%;
`

const ImageFrame = styled.div`
	flex: 1;
`

const ImageContainer = styled.div`
	max-width: 100px;
`

const Logo = styled(Image)`
	display: block;
`

const Title = styled.p`
	font-size: clamp(18px, 2.5vw, 36px);
	color: white;
	text-shadow: 0px 1px #1b181b;
	flex: 2;
	margin: 0;
	font-family: Montserrat;
	text-align: center;
`

const ButtonFrame = styled.div`
	flex: 1;
	text-align: right;
`
