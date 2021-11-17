import styled from 'styled-components'
import Image from 'next/image'
import { Button } from '../UI'
import logo from '../../assets/logo.svg'

const Header = () => {
	return (
		<StyledHeader>
			<div>
				<ImageFrame>
					<Image
						src={logo}
						height='512'
						width='477'
						quality={100}
						style={{ display: 'block' }}
					/>
				</ImageFrame>
			</div>
			<Title>The Dathlete Experiment</Title>
			<Button href='https://t.me/TheDathleteExperiment'>
				Join the Telegram
			</Button>
		</StyledHeader>
	)
}

export default Header

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	width: 100%;
	position: fixed;

	background: linear-gradient(
		192.04deg,
		#03b3ff 0%,
		#38234a 22.92%,
		#df2d71 56.25%,
		#fb7429 100%
	);

	justify-content: space-between;
	padding: 0 0 0 1rem;
	& > * {
		flex: 1;
		text-align: center;
	}
`

const ImageFrame = styled.div`
	flex: 1;
	max-width: 100px;
`

const Title = styled.p`
	font-size: clamp(18px, 2.5vw, 36px);
	color: black;
	margin: 0;
	font-family: Montserrat;
`
