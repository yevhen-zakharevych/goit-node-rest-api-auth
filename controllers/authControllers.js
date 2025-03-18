import * as authServices from "../services/authService.js";

export const signup = async (req, res) => {
  const { email, subscription } = await authServices.signupUser(req.body);

  res.status(201).json({
    email,
    subscription,
  });
};

export const signin = async (req, res) => {
  const result = await authServices.signinUser(req.body);

  res.json({ ...result });
};

export const getCurrent = async (req, res) => {
  const { email, subscription } = req.user;

  res.json({
    email,
    subscription,
  });
};

export const logout = async (req, res) => {
  const { id } = req.user;
  await authServices.logoutUser({ id });

  res.status(204).send();
};
