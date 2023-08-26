// assets
import { LoginOutlined, ProfileOutlined, CloseSquareOutlined, MoneyCollectOutlined, ReconciliationOutlined, RocketOutlined, GiftOutlined, CheckSquareOutlined, ExportOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  MoneyCollectOutlined,
  ReconciliationOutlined,
  RocketOutlined,
  GiftOutlined,
  ExportOutlined,
  CheckSquareOutlined,
  CloseSquareOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Inventory Management',
  type: 'group',
  children: [
    {
      id: 'PurchaseOrder',
      title: 'Purchase Order',
      type: 'item',
      url: '/purchase-order/list',
      icon: icons.MoneyCollectOutlined
    },
    {
      id: 'GoodsReceiveNote',
      title: 'Goods Receive Note',
      type: 'item',
      url: '/goods-receive-note/list',
      icon: icons.ReconciliationOutlined
    },
    {
      id: 'ItemRequisition',
      title: 'Item Requisition',
      type: 'item',
      url: '/sample-page',
      icon: icons.RocketOutlined
    },
    {
      id: 'ItemIssuance',
      title: 'Item Issuance',
      type: 'item',
      url: '/sample-page',
      icon: icons.GiftOutlined
    },
    {
      id: 'ItemTransfer',
      title: 'Item Transfer',
      type: 'item',
      url: '/sample-page',
      icon: icons.ExportOutlined
    },
    {
      id: 'Acceptance',
      title: 'Acceptance',
      type: 'item',
      url: '/sample-page',
      icon: icons.CheckSquareOutlined
    },
    {
      id: 'ItemDisposal',
      title: 'Item Disposal',
      type: 'item',
      url: '/sample-page',
      icon: icons.CloseSquareOutlined
    }
  ]
};

export default pages;
