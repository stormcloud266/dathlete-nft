import styled from 'styled-components'

const Button = ({ href, children }) => {
	return (
		<a href={href}>
			<ButtonFrame>
				<Text>{children}</Text>
			</ButtonFrame>{' '}
		</a>
	)
}

export default Button

const ButtonFrame = styled.span`
	display: inline-block;
	background-color: #6284ff;
	padding: 0.4rem 2.4rem;
	outline: none;
	border: none;
	border-radius: 15px;
	background-image: linear-gradient(270deg, #fb0c66 0%, #f89056 100%);
	&::hover {
		background-position: right center; /* change the direction of the change here */
		color: #fff;
		text-decoration: none;
	}
	z-index: 1;
`

const Text = styled.p`
	color: black;
	font-size: clamp(12px, 2vw, 18px);
	margin: 0;
	/* font-family: Raleway; */
`
