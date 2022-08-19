import { tokenTypes } from "../config/tokens.js";
import { config } from "../config/config.js";
import moment from "moment";
import jwt from 'jsonwebtoken';

const generateToken = (user, type, secret = config.jwt.secret) => {
  const payload = {
    userId: user._Id,
    iat: moment().unix(),
    type,
  };
  return jwt.sign(payload, secret);
};

export const generateAuthTokens = async (user) => {
  const accessToken = generateToken(user, tokenTypes.ACCESS);
  return accessToken;
};
