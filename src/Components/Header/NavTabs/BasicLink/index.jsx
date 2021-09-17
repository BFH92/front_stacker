import React from 'react';
import { Link } from 'react-router-dom';

const BasicLink = (props) => {

  return (
    <Link to={props.to}>
      {props.label}
    </Link>
  );
};

export default BasicLink;
