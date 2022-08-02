import styled from "styled-components";

export const Heading1 = styled.h1`
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.heading1};
`;

export const Heading2 = styled.h2`
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.heading2};
`;

export const Heading3 = styled.h3`
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.heading3};
`;

export const Heading4 = styled.h4`
  font-family: ${({ theme }) => theme.typography.primary};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.heading4};
`;

export const Heading5 = styled.h5`
  font-family: ${({ theme }) => theme.typography.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.heading5};
  letter-spacing: ${({ theme }) => theme.characterSpace.heading5};
`;

export const HeadingNumber = styled.h5`
  font-family: ${({ theme }) => theme.typography.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
  font-size: ${({ theme }) => theme.fontSize.heading5};
  letter-spacing: ${({ theme }) => theme.characterSpace.heading5};
  color: ${({ theme }) => theme.colours.headingNumber};
`;
