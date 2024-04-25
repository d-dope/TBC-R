import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DashboardLayout;
