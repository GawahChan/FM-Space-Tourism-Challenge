import styled from "styled-components";

export const subHeading1 = styled.h1`
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.subheading1};
`;

export const subHeading2 = styled.h2`
  font-family: ${({ theme }) => theme.typography.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.subheading2};
  letter-spacing: ${({ theme }) => theme.characterSpace.subheading2};
`;
