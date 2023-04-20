import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />

      <Box as="main" mx="auto" px={4} py={8} maxWidth="800px">
        {children}
      </Box>
    </>
  );
};

export default Layout;
