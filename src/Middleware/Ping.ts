export const ping = store => next => action => {
  console.log(action);
  console.log("ping");
  return next(action);
};

export default ping;
