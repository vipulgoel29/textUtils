import React from "react";
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 *
 */
export default function Alert(props) {
  const capitalize = (word) => {
    return word[0].toUpperCase() + word.substring(1);
  };

  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      </div>
    )
  );
}

// #endregion
