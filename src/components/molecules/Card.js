import React from 'react';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px;
  background-color: ${({ yellow, theme }) => (yellow ? theme.primary : 'white')};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const Card = () => (
  <StyledWrapper>
    <InnerWrapper yellow>
      <StyledHeading>Hello Roman</StyledHeading>
      <DateInfo>3 days</DateInfo>
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo ducimus fuga
        repellendus illum
      </Paragraph>
      <Button secondary>REMOVE</Button>
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;

// const CardWrapper = styled.div`
//   margin: 10px;
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
// `;

// const HeadingWRapper = styled.div`
//   background-color: ${({ theme }) => theme.primary};
//   padding: 20px;
// `;

// const HeadingAnnotation = styled(Heading)`
//   font-size: ${({ theme }) => theme.fontSize.xs};
// `;

// const ContentWrapper = styled.div`
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   min-height: 350px;
// `;

// const Card = () => (
//   <CardWrapper>
//     <HeadingWRapper>
//       <Heading>Heading</Heading>
//       <HeadingAnnotation>3 Days</HeadingAnnotation>
//     </HeadingWRapper>
//     <ContentWrapper>
//       <Paragraph>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ipsa.Lorem ipsum dolor sit
//         amet, consectetur adipisicing elit. Magnam, ipsa.
//       </Paragraph>
//       <Button secondary>naciś</Button>
//     </ContentWrapper>
//   </CardWrapper>
// );
