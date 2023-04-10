import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 4.5rem;
  }

  p {
    color: ${({ theme }) => theme.textLight};
    font-size: 1.5rem;
    font-weight: 300;
    text-align: justify;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;
