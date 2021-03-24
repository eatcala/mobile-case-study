export const getApolloErrorCode = err => {
  if (err.length > 0) {
    return err[0].extensions?.code;
  }
  return null;
};

export const getApolloErrorMessage = err => {
  if (err.length > 0) {
    return err[0].message;
  }
  return null;
};
