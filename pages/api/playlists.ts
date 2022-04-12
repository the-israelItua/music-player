import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";
import user from "./user";

export default validateRoute(async (req, res, user) => {
  const playlists = await prisma.playlist.findMany({
    where: {
      userId: user.id,
    },
  });

  res.json(playlists);
});
