/* eslint-disable react/prop-types */
import React from 'react';
import { Fade } from '../Animation';

const IsFetched = ({
  children, isError, isFetched, Loader, Error,
}) => (
  <Fade>
    {
          isFetched
            ? (
              <>
                {!isError
                  ? (
                    children
                  )
                  : (Error)}
              </>
            )
            : (
              <Fade>
                {Loader}
              </Fade>
            )
          }
  </Fade>
);

export default IsFetched;
