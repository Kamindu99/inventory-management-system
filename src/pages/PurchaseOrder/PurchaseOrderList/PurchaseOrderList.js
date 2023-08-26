// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const PurchaseOrder = () => (
    <MainCard title="Sample Card">
        <Typography variant="body2">
            Purchase Order List
        </Typography>
    </MainCard>
);

export default PurchaseOrder;
