const errorsHandler = (formErr, firebaseErr) => {
  let showErr = false;
  const errorsArray = [];

  if (Object.keys(formErr).length > 0)  {
      showErr = true;
      for (let key in formErr) {
          errorsArray.push(formErr[key]);
      }
  }

  if (Object.keys(firebaseErr).length > 0)  {
      showErr = true;
      errorsArray.push(firebaseErr.message);
  }

  return {
    showErr,
    errorsArray
  }
}

export default errorsHandler;