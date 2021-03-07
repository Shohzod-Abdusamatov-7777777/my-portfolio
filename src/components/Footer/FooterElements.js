import styled from "styled-components";

export const FooterContainer = styled.div`
  min-height: 60px;
  height: auto;
  background: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;

export const FooterWrapper = styled.div`
  height: 100%;
  width: 90%;
  font-weight: bold italic;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  & h5 {
    font-size: clamp(0.5rem, 3vw, 1.2rem);
  }
  .share-link {
    margin-left: 1rem;
    transition: 0.5s;
    &:hover {
      transform: scale(1.2);
      transition: 0.5s;
    }
  }
`;
