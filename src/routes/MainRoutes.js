import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - PurchaseOrder
const PurchaseOrderList = Loadable(lazy(() => import('pages/InventoryManagement/PurchaseOrder/PurchaseOrderList/PurchaseOrderList')));
const PurchaseOrderCreate = Loadable(lazy(() => import('pages/InventoryManagement/PurchaseOrder/PurchaseOrderCreate/PurchaseOrderCreate')));

// render - GoodsReceiveNote
const GoodsReceiveNoteList = Loadable(lazy(() => import('pages/InventoryManagement/GoodReceivedNote/GRNList/GrnList')));
const GoodsReceiveNoteCreate = Loadable(lazy(() => import('pages/InventoryManagement/GoodReceivedNote/GRNCreate/GRNCreate')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },

    // purchase order
    {
      path: 'purchase-order/list',
      element: <PurchaseOrderList />
    },
    {
      path: 'purchase-order/create',
      element: <PurchaseOrderCreate />
    },


    //goods-receive-note
    {
      path: 'goods-receive-note/list',
      element: <GoodsReceiveNoteList />
    },
    {
      path: 'goods-receive-note/create',
      element: <GoodsReceiveNoteCreate />
    }
  ]
};

export default MainRoutes;
