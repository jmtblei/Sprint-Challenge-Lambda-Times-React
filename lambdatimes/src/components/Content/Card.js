import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const CCCard = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const CCCHeadline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const CCCAuthor = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`;

const CCCAuthorIC = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`;

const CCCImage = styled.img`
  width: 40px;
`;

const CCCAuthorSPan = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Card = props => {
  return (
    <CCCard>
      <CCCHeadline>{props.card.headline}</CCCHeadline>
      <CCCAuthor>
        <CCCAuthorIC>
          <CCCImage src={props.card.img} alt=""/>
        </CCCAuthorIC>
        <CCCAuthorSPan>By {props.card.author}</CCCAuthorSPan>
      </CCCAuthor>
    </CCCard>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    author: PropTypes.string,
    headline: PropTypes.string,
    img: PropTypes.string,
    tab: PropTypes.string
  })
}

export default Card;
