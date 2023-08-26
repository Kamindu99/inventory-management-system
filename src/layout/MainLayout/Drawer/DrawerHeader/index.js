import PropTypes from 'prop-types';

// material-ui
import { Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    // only available in paid version
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        <h1>Inventory Management</h1>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <img src='https://t3.ftcdn.net/jpg/04/84/07/96/360_F_484079647_NinhuMOohQqMlG7AZNOrJrqwt04V17Fe.webp' alt='' style={{ width: '100%' }} />
        <br />
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export default DrawerHeader;
