import { Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GradientLayout {
  color: string;
  children: ReactNode;
  image: string;
  subtitle: string;
  title: string;
  description: string;
  roundImage?: boolean;
}

const GradientLayout: React.FC<GradientLayout> = ({
  color,
  children,
  image,
  subtitle,
  title,
  description,
  roundImage,
}) => {
  return (
    <Box
      height="calc(100vh - 100px)"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding="40px" align="end">
        <Box padding="20px">
          <Image
            boxSize="160px"
            boxShadow="2xl"
            src={image}
            borderRadius={roundImage ? "100%" : "3px"}
          />
        </Box>
        <Box padding="20px" lineHeight="40px" color="white">
          <Text fontSize="sm" fontWeight="bold" casing="uppercase">
            {subtitle}
          </Text>
          <Text fontSize="6xl" fontWeight="bold" casing="uppercase">
            {title}
          </Text>
          <Text fontSize="sm" fontWeight="100" casing="uppercase">
            {description}
          </Text>
        </Box>
      </Flex>

      <Box>{children}</Box>
    </Box>
  );
};

export default GradientLayout;
