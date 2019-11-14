import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';
import { Redirect } from 'react-router-dom';

const StyledWrapper = styled.div`
  flex-basis: 30%;
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 9999;
  }

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

const StyledAvatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;

class Card extends React.Component {
  state = {
    redirect: false,
  };

  handleClick = () => {
    this.setState({
      redirect: true,
    });
  };

  render() {
    const { id, cardType, title, content, articleUrl, created, twitterName } = this.props;
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to={`${cardType}/${id}`} />;
    }

    return (
      <StyledWrapper onClick={this.handleClick}>
        <InnerWrapper activeColor={cardType}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {cardType === 'twitters' && (
            <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />
          )}
          {cardType === 'articles' && <StyledLinkButton href={articleUrl} target="_blank" />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button secondary>REMOVE</Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}
Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  articleUrl: PropTypes.string,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

Card.defaultProps = {
  cardType: 'notes',
  articleUrl: null,
  twitterName: null,
};
export default Card;

// const Card = ({ cardType, title, content, articleUrl, created, twitterName }) => (
//   <StyledWrapper>
//     <InnerWrapper activeColor={cardType}>
//       <StyledHeading>{title}</StyledHeading>
//       <DateInfo>{created}</DateInfo>
//       {cardType === 'twitters' && (
//         <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />
//       )}
//       {cardType === 'articles' && <StyledLinkButton href={articleUrl} target="_blank" />}
//     </InnerWrapper>
//     <InnerWrapper flex>
//       <Paragraph>{content}</Paragraph>
//       <Button secondary>REMOVE</Button>
//     </InnerWrapper>
//   </StyledWrapper>
// );
