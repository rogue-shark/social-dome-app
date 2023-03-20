import { Box } from "@mui/material";

const UserProfileImg = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user profile pic"
        src={`http://localhost:8080/assets/${image}`}
      />
    </Box>
  );
};

export default UserProfileImg;