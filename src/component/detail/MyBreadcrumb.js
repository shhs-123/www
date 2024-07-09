import React from 'react';
import { Breadcrumb } from 'antd';


const MyBreadcrumb = () => (
  <Breadcrumb
    separator=">"
    items={[
      {
        title: 'Home',
      },
      {
        title: 'Whitepaper',
        href: '',
      },

    ]}
  />
);
export default MyBreadcrumb;