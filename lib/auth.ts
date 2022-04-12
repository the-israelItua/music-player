import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { MUSIX_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user;

      try {
        const { id } = jwt.verify(token, "hello");
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("User not found");
        }
      } catch (error) {
        res.status(401);
        res.json({ error: "Not Authorised" });
        return;
      }
      return handler(req, res, user);
    }

    res.status(401);
    res.json({ error: "Not authorised" });
  };
};
