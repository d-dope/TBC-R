import { ReactNode } from 'react';
import Header from '../../components/Header';
import  Footer  from '../../components/Footer';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DashboardLayout;
