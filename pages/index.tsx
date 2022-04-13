import GradientLayout from "../components/gradientLayot";
import prisma from "../lib/prisma";
import { Box, Text, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { useUser } from "../lib/hooks";
import playlists from "./api/playlists";

export default function Home({ artists }) {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <GradientLayout
      color="gray"
      subtitle="Profile"
      title={`${user.firstName} ${user.lastName}`}
      description={`${user.playlistCount} Public playlists`}
      image="https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">Only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%">
              <Box
                key={artist.name}
                bg="gray.900"
                borderRadius="4px"
                padding="15px"
              >
                <Image
                  src="http://placekitten.com/g/300/300"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="sm">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
}

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});
  return {
    props: { artists },
  };
};
