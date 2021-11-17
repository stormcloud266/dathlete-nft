import styled from 'styled-components';
import Image from 'next/image';
import Player from 'react-player';
import { useState } from 'react';

export function LandingPage() {
  return (
    <>
      <Header>
        <div>
          <ImageFrame>
            <Image
              src="/assets/logo.png"
              height="512"
              width="477"
              quality={100}
              style={{ display: 'block' }}
            />
          </ImageFrame>
        </div>
        <Title>The Dathlete Experiment</Title>
        <a href="https://t.me/TheDathleteExperiment">
          <ButtonFrame>
            <Text>Join the Telegram</Text>
          </ButtonFrame>{' '}
        </a>
      </Header>
      <Main>
        <Section>
          <ContentFrame>
            <Title>Accomplish Feats</Title>
            <div style={{ position: 'relative', height: 200, width: 200 }}>
              <Image
                src="https://www.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-19-5a3926af95d9d__700.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                style={{ display: 'block' }}
              />
            </div>
          </ContentFrame>
          <ContentFrame>
            <Title>Crowdfund Goals</Title>
            <div style={{ position: 'relative', height: 200, width: 200 }}>
              <Image
                src="https://www.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-19-5a3926af95d9d__700.jpg"
                layout="fill"
                objectFit="cover"
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
                src="https://www.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-19-5a3926af95d9d__700.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                style={{ display: 'block' }}
              />
            </div>
          </ContentFrame>
        </Section>
        <div
          style={{
            position: 'fixed',
            bottom: '2vw',
            right: '1vw',
            backgroundColor: 'black',
          }}
        >
          <PlayerFrame
            url={'https://www.youtube.com/watch?v=I6J40XRlhmk'}
            width={'45vw'}
            height={'30vw'}
            style={{ margin: 'auto' }}
            controls={true}
          />
        </div>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(230, 255, 255, 1);
  width: 100vw;
  height: 100vh;
`;

const ButtonFrame = styled.span`
  display: block;
  background-color: #6284ff;
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
`;

const Text = styled.p`
  color: black;
  font-size: clamp(12px, 2vw, 18px);
  margin: 0;
  font-family: Raleway;
`;

const Title = styled.p`
  font-size: clamp(18px, 2.5vw, 36px);
  color: black;
  margin: 0;
  font-family: Raleway;
`;

const BackgroundImage = styled.img``;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

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
`;

const ImageFrame = styled.div`
  flex: 1;
  max-width: 100px;
`;

const PlayerFrame = styled(Player)``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentFrame = styled.div`
  margin: 1rem 1rem 1rem 1rem;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;
