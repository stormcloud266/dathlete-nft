import styled from 'styled-components'
import { Button, Wrapper } from '../UI'
import { breakpoints } from '../../styles'
import Player from 'react-player'

const Hero = () => {
	return (
		<StyledHero>
			<Wrapper>
				<Row>
					<TextContainer>
						<Heading>This is going to be awesome</Heading>
						<Button href='https://medium.com'>Read the Medium Article</Button>
					</TextContainer>
					<VideoContainer>
						<VideoAspect>
							<PlayerFrame
								url={'https://www.youtube.com/watch?v=I6J40XRlhmk'}
								width={'100%'}
								height={'100%'}
								controls={true}
							/>
						</VideoAspect>
					</VideoContainer>
				</Row>
			</Wrapper>
		</StyledHero>
	)
}

export default Hero

const StyledHero = styled.section`
	min-height: 100vh;
	padding-top: 12rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media ${breakpoints.md} {
		margin-top: 5rem;
		flex-direction: column;
		align-items: flex-start;
	}
`

const TextContainer = styled.div`
	flex: 1;
	max-width: 66rem;
	padding-right: 1.8rem;

	@media ${breakpoints.md} {
		margin-bottom: 4rem;
	}
`

const Heading = styled.h1`
	font-size: 4.8rem;
	font-size: clamp(3.6rem, 4.5vw, 4.8rem);
	margin-bottom: 3rem;
`

const VideoContainer = styled.div`
	flex: 1;
	@media ${breakpoints.md} {
		width: 100%;
	}
`

const VideoAspect = styled.div`
	aspect-ratio: 16/9;
`

const PlayerFrame = styled(Player)``
