import Image from 'next/image'
import styled from 'styled-components'
import { breakpoints } from '../../styles'
import { Wrapper } from '../UI'

const Cards = () => {
	const data = [
		{
			title: 'Title Placeholder',
			image:
				'https://www.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-19-5a3926af95d9d__700.jpg',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic distinctio neque vero!',
		},
		{
			title: 'Title Placeholder',
			image:
				'https://www.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-19-5a3926af95d9d__700.jpg',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic distinctio neque vero!',
		},
		{
			title: 'Title Placeholder',
			image:
				'https://www.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-19-5a3926af95d9d__700.jpg',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic distinctio neque vero!',
		},
	]
	return (
		<Section>
			<Wrapper>
				<Row>
					{data.map(({ image, title, description }) => (
						<CardBg>
							<Card>
								<Image src={image} height={70} width={70} />
								<Title>{title}</Title>
								<Text>{description}</Text>
							</Card>
						</CardBg>
					))}
				</Row>
			</Wrapper>
		</Section>
	)
}

export default Cards

const Section = styled.section`
	margin-bottom: 6rem;
	@media ${breakpoints.md} {
		margin-top: 4rem;
	}
`
const Row = styled.div`
	display: flex;
	@media ${breakpoints.md} {
		width: 100%;
		max-width: 56rem;
		flex-direction: column;
	}
`

const CardBg = styled.div`
	flex: 1;
	margin-right: 2rem;
	border-radius: 10px;
	padding: 0.2rem;

	background-image: linear-gradient(
		to right,
		#3a343a 50%,
		#f15025 50%,
		#ffc115
	);
	background-size: 200%;
	background-position: 0% 50%;
	transition: all 0.3s;

	&:last-child {
		margin-right: 0;
	}

	&:hover {
		background-position: 100% 50%;
		transform: scale(1.02);
	}

	@media ${breakpoints.md} {
		margin-right: 0;
		margin-bottom: 2rem;
		&:last-child {
			margin-bottom: 0;
		}
	}
`

const Card = styled.div`
	text-align: center;
	padding: 4.6rem 1rem;
	border-radius: 10px;
	position: relative;
	z-index: 3;
	background-color: #1a181a;
`

const Title = styled.h3`
	margin-top: 1rem;
	margin-bottom: 1rem;
`
const Text = styled.p``
