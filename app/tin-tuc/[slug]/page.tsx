import { FC, ReactNode } from 'react';
import BreadcrumbsBlog from '../components/BreadcrumbsBlog';

interface PageProps {
  children?:ReactNode;

}

const Page: FC<PageProps> = ({ children }) => (
    <div>
      <BreadcrumbsBlog />
      {children}
    </div>
  );

export default Page;
