import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
        boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          SOCIAL <span style={{color: 'black'}}>/</span> DOME
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="3rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Social/Dome, a minimalist Social media experience.
        </Typography>

        <Form />
        
      </Box>
    </Box>
  );
};

export default LoginPage;