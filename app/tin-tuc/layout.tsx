import React, { FC, ReactNode } from 'react';
// eslint-disable-next-line import/no-self-import
import LayoutBlog from './layout';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <LayoutBlog>
    {children}
  </LayoutBlog>
);

export default Layout;
