import helpers from 'helpers';
import React from 'react';

type Props = {
  temperature: number;
}

const DegreeCelsius: React.FC<Props> = ({ temperature }) => {
  return (
    <span>
      {helpers.addPositiveSign(temperature)}°C
    </span>
  )
}

export default DegreeCelsius;