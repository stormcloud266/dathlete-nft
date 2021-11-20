import styled from 'styled-components';
import { Header } from './global';
import { Hero, Cards } from './landing';

export function LandingPage() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Cards />
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
