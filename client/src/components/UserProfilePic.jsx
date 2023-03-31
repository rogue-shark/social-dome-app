import { Box } from "@mui/material";
import { BASE_URL } from "services/helper";

const UserProfileImg = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user profile pic"
        src={`${BASE_URL}/assets/${image}`}
      />
    </Box>
  );
};

export default UserProfileImg;