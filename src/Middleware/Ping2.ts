export const ping2 = store => next => action => {
  console.log("ping2");
  return next(action);
};

export default ping2;
