import { Box } from "@chakra-ui/layout";
import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="256px" bg="black">
        <Sidebar />
      </Box>
      <Box paddingLeft="256px" paddingBottom="100px">
        <Box height="calc(100vh - 100px">{children}</Box>
      </Box>

      <Box position="absolute" left="0" bottom="0">
        Player
      </Box>
    </Box>
  );
};

export default Layout;
