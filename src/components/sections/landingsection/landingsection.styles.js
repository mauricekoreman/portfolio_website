import styled from "styled-components";

export const LandingSectionContainer = styled.div`
  /* 
  display: flex;
  height: 80vh;
  padding: 20rem 0 0 13rem;
  justify-content: space-between;
  width: 100%;
  */

  padding: 0 var(--inner-content);
  background: linear-gradient(#fff 70%, var(--primary-color) 25%);
  padding-bottom: 10em;
  width: 100%;
  overflow: hidden;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1em;
  margin: 4rem 0 8rem 0;
`;

export const ImageContainer = styled.figure`
  /* For the bigger screen sizes maybe */
  /* --imageSize: clamp(40rem, 25vw + 1rem, 52rem);
  width: var(--imageSize);
  height: var(--imageSize); 
  margin-right: calc(35% - (var(--imageSize) / 2));
  */

  width: 70%;
  height: 70%;
  position: relative;
  display: grid;
  place-items: center;
  margin: 0 auto;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  z-index: 3;
`;

export const Frame = styled.img`
  height: 110%;
  width: 110%;
  position: absolute;
  z-index: 2;
`;
