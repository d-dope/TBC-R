import { getOrders } from "../../../../../../api";
import OrdersList from "../../../../components/OrderList";

const OrdersPage = async () => {
  const orders = await getOrders();

  return <OrdersList orders={orders} />;
};

export default OrdersPage;
