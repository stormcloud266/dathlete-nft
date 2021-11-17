import styled from 'styled-components'

const Cards = () => {
	return (
		<Section>
			<ContentFrame>
				<Title>Accomplish Feats</Title>
				<div style={{ position: 'relative', height: 200, width: 200 }}>
					<Image
						src='https://www.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-19-5a3926af95d9d__700.jpg'
						layout='fill'
						objectFit='cover'
						quality={100}
						style={{ display: 'block' }}
					/>
				</div>
			</ContentFrame>
			<ContentFrame>
				<Title>Crowdfund Goals</Title>
				<div style={{ position: 'relative', height: 200, width: 200 }}>
					<Image
						src='https://www.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-19-5a3926af95d9d__700.jpg'
						layout='fill'
						objectFit='cover'
						quality={100}
						style={{ display: 'block' }}
					/>
				</div>
				<Text></Text>
			</ContentFrame>

			<ContentFrame>
				<Title>Immutable Athletes</Title>
				<div style={{ position: 'relative', height: 200, width: 200 }}>
					<Image
						src='https://www.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-19-5a3926af95d9d__700.jpg'
						layout='fill'
						objectFit='cover'
						quality={100}
						style={{ display: 'block' }}
					/>
				</div>
			</ContentFrame>
		</Section>
	)
}

export default Cards

const Text = styled.p`
	color: black;
	font-size: clamp(12px, 2vw, 18px);
	margin: 0;
	/* font-family: Raleway; */
`

const Title = styled.p`
	font-size: clamp(18px, 2.5vw, 36px);
	color: black;
	margin: 0;
	font-family: Montserrat;
`

const Section = styled.section`
	width: 100%;
	display: flex;
	justify-content: space-around;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const ContentFrame = styled.div`
	margin: 1rem 1rem 1rem 1rem;
	display: flex;
	flex: 1;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
`
