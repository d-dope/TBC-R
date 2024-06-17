import { getSession } from "@auth0/nextjs-auth0";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = async ({
  children,
}) => {
  const session = await getSession();
  const isAdmin =
    Array.isArray(session?.user?.role) && session?.user.role.includes("Admin");
    if (!isAdmin) {
        return <h1>You Are Not Admin Retard!</h1>;
      }
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default DashboardLayout;
