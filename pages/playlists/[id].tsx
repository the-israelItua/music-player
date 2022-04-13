import GradientLayout from "../../components/gradientLayot";
import prisma from "../../lib/prisma";
import { Box, Text, Flex } from "@chakra-ui/layout";
import SongTable from "../../components/SongsTable";
import { validateToken } from "../../lib/auth";

const getBgColor = (id) => {
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "gray",
    "teal",
    "yellow",
  ];
  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
};

const Playlist = ({ playlist }) => {
  return (
    <GradientLayout
      color={getBgColor(playlist.id)}
      subtitle="Playlist"
      title={`${playlist.name}`}
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
    >
      <Box color="white" paddingX="40px" paddingTop="20px">
        <SongTable songs={playlist.songs} />
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async ({ query, req }) => {
  const { id } = validateToken(req.cookies.MUSIX_ACCESS_TOKEN);
  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });

  return {
    props: { playlist },
  };
};

export default Playlist;
