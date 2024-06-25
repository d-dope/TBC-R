"use client";

import { createRefund } from "../../../actions";

const OrdersList = ({ orders }: any) => {
  console.log(orders, "orders");

  const refundHandler = async (charge: string) => {
    await createRefund(charge);
  };

  return (
    <div className="p-8 min-h-screen bg-MainBgColor dark:bg-black">
      <div className=" mt-24  flex justify-center  rounded-lg  ">
        <table className="">
          <thead className="border border-primaryColor">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase">
                Status
              </th>

              <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: any) => (
              <tr
                key={order.latest_charge.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                  ${((order.amount || 0) / 100).toFixed(2)}
                </td>
                <td
                  className={`px-6 py-4 text-sm font-medium ${
                    order.latest_charge.refunded
                      ? "text-red-500 dark:text-red-400"
                      : "text-green-500 dark:text-green-400"
                  }`}
                >
                  {order.latest_charge.refunded ? "Refunded" : "Paid"}
                </td>

                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center space-x-4">
                    <a
                      href={order.latest_charge.receipt_url}
                      aria-label="Order Receipt"
                      target="_blank"
                      className="text-blue-600 dark:text-blue-400  hover:text-blue-800 dark:hover:text-blue-500 transition-colors"
                      rel="noopener noreferrer"
                    >
                      View Receipt
                    </a>
                    {!order.latest_charge.refunded && (
                      <button
                        onClick={() => refundHandler(order.latest_charge.id)}
                        type="button"
                        className="p-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
                      >
                        Refund
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersList;
