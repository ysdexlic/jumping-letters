export const randomizer = (strength) => {
  const randomNumber = Math.floor(Math.random() * strength) + 1;
  const plusOrMinus = Math.random() < 0.5 ? -randomNumber : randomNumber;

  return plusOrMinus;
};
