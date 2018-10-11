import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: '企业之窗',
    icon: 'windows-o',
    path: 'windows',
  },
  {
    name: '产品中心',
    icon: 'appstore-o',
    path: 'product',
  },
  {
    name: '压载水产品全生命周期服务',
    icon: 'reload',
    path: 'lifecycle',
  },
  {
    name: '异常页',
    icon: 'warning',
    path: 'exception',
    hideInMenu:true,
    children: [
      {
        name: '403',
        path: '403',
      },
      {
        name: '404',
        path: '404',
      },
      {
        name: '500',
        path: '500',
      },
      {
        name: '触发异常',
        path: 'trigger',
        hideInMenu: true,
      },
    ],
  },
  {
    name: '账户',
    icon: 'user',
    path: 'user',
    authority: 'guest',
    children: [
      {
        name: '登录',
        path: 'login',
      },
    ],
  },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
