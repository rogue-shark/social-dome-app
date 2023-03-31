import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import Navbar from 'scenes/navbar';
import UserDetailsWidget from 'scenes/widgets/UserDetailsWidget';
import MyPostWidget from 'scenes/widgets/MyPostWidget';
import PostsWidget from 'scenes/widgets/PostsWidget';
import AdvertWidget from 'scenes/widgets/AdvertWidget';
import FriendListWidget from 'scenes/widgets/FriendListWidget';

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />

      <Box
        width='100%'
        padding='2rem 6%'
        display={isNonMobileScreens ? 'flex' : 'block'}
        gap='.5rem'
        justifyContent='space-between'
      >
        {isNonMobileScreens && (
          <Box flexBasis={isNonMobileScreens ? '25%' : undefined}>
            <UserDetailsWidget userId={_id} picturePath={picturePath} />
          </Box>
        )}

        <Box
          flexBasis={isNonMobileScreens ? '37%' : undefined}
          mt={isNonMobileScreens ? undefined : '2rem'}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>

        {isNonMobileScreens && (
          <Box flexBasis='25%'>
            <AdvertWidget />
            <Box m='2rem 0' sx={{ position: 'sticky', top: '20px' }}>
              <FriendListWidget userId={_id} />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
