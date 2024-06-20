// cart/page.tsx

import { getSession } from "@auth0/nextjs-auth0";
import CheckoutLayout from "../../../components/CheckoutLayout";
import { getProductDetail, getUserCartAction } from "../../../../../actions";

const CheckoutPage = async () => {
  const session = await getSession();
  const id = session?.user.sub;
  const sessionEmail = session?.user.email;
  const fetchedProducts = await getUserCartAction(id);
  return (
    <section className="w-full min-h-screen flex justify-center items-center flex-col bg-[#271111] dark:bg-mainDarkBG2">
      <CheckoutLayout products={fetchedProducts} sessionId={id} sessionEmail={sessionEmail} />
    </section>
  );
};

export default CheckoutPage;
