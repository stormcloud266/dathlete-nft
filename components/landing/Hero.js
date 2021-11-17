import styled from 'styled-components'
import { Button, Wrapper } from '../UI'
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
						<PlayerFrame
							url={'https://www.youtube.com/watch?v=I6J40XRlhmk'}
							width={'622px'}
							height={'350px'}
							controls={true}
						/>
					</VideoContainer>
				</Row>
			</Wrapper>
		</StyledHero>
	)
}

export default Hero

const StyledHero = styled.section`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
const Row = styled.div`
	margin-top: 10rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const TextContainer = styled.div`
	max-width: 66rem;
	padding-right: 1.8rem;
`
const Heading = styled.h1`
	font-size: 4.8rem;
	margin-bottom: 3rem;
`
const VideoContainer = styled.section``

const PlayerFrame = styled(Player)`
	margin-left: auto;
	margin-right: 0;
	text-align: right;
`
