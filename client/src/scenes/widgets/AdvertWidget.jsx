import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:8080/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      
        <Typography color={main}>MissBeauty Cosmetics</Typography>
        <Typography color={medium}>👉 missbeautycosmetics.com</Typography>
      
      <Typography color={medium} m="0.5rem 0">
        Your pathway to stunning and immaculate beauty! Make sure your skin
        is exfoliating and shining like a beauty pageant.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;