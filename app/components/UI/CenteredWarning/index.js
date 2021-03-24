import React from 'react';
import PropTypes from 'prop-types';

import { Centerer, Warning, Description, Title, CTA } from './styles';

const CenteredWarning = ({ title, description, ctaText, ctaFunc }) => {
  return (
    <Centerer>
      <Warning>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {ctaText && <CTA onPress={() => ctaFunc()}>{ctaText}</CTA>}
      </Warning>
    </Centerer>
  );
};

export default CenteredWarning;

CenteredWarning.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  ctaFunc: PropTypes.func.isRequired,
};
