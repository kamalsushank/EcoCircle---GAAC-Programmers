export const getUser = () => {
  return JSON.parse(localStorage.getItem("ecoUser"));
};

export const saveUser = (user) => {
  localStorage.setItem("ecoUser", JSON.stringify(user));
};

export const increaseGreenScore = (points = 1) => {
  const user = getUser();
  if (!user) return;

  user.greenScore += points;
  saveUser(user);
};
