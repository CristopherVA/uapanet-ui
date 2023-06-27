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
        display={'flex'}
        justifyContent={'center'}
      >
        <Typography fontWeight="bold" fontSize="36px" color="#041248"  display={'flex'} alignItems={'center'}>
          <img src="https://www.uapa.edu.do/wp-content/uploads/2022/06/Logo-azul-UAPA.png" height={50} alt="" /> <span style={{ marginTop:15, position: 'relative', left: -8 }}>NET</span>
        </Typography>
      </Box>

      <Box

        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography display={'flex'} justifyContent={"center"} alignItems={"center"} fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          <Typography fontSize={20} fontWeight={800} color="#041248"></Typography>
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
