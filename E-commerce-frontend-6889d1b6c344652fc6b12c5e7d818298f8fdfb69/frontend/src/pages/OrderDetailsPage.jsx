import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const OrderDetailsPage = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: { city: "New York", country: "USA" },
      orderItems: [
        {
          productId: 1,
          name: "Product 1",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/500/500/?random=1"
        },
        {
          productId: 2,
          name: "Product 2",
          price: 120,
          quantity: 1,
          image: "https://picsum.photos/500/500/?random=2"
        }
      ],
      totalPrice: 100
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl mb-6 font-bold">Order Details</h2>
      {!orderDetails ? (
        <p>No Order details found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border">
          {/* Order info */}
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Order ID: #{orderDetails._id}
              </h3>
              <p className="text-gray-600 ">
                {new Date(orderDetails.createdAt).toLocaleDateString}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0 ">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } px-3 rounded-full text-sm  font-medium mb-2`}
              >
                {OrderDetailsPage.isPaid ? "Approved" : "Pending"}
              </span>
              <span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                } px-3 rounded-full text-sm  font-medium mb-2`}
              >
                {OrderDetailsPage.isPaid ? "Delivered" : "Pending"}
              </span>
            </div>
          </div>
          {/* Customer shipping info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 ">
            <div>
              <h4 className="text-lg mb-2 font-semibold">Payment Info</h4>
              <p className="">Payment Method: {orderDetails.paymentMethod}</p>
              <p className="">
                Status: {orderDetails.isPaid ? "Paid" : "Unpaid"}
              </p>
            </div>
            <div>
              <h4 className="text-lg mb-2 font-semibold">Shipping Info</h4>
              <p className="">Payment Method: {orderDetails.shippingMethod}</p>
              <p className="">
                Address:{" "}
                {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
              </p>
            </div>
          </div>
          {/* Product List */}
          <div className="overflow-x-auto">
            <h4 className="text-lg mb-4 font-semibold">Products</h4>
            <table className="min-w-full text-gray-600 mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Unit Price</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((items) => (
                  <tr key={items.productId} className="border-b">
                    <td className="py-2 px-4 flex items-center">
                      <img
                        src={items.image}
                        alt={items.name}
                        className="w-12 h-12 object-cover rounded-lg mr-4"
                      />
                      <Link
                        to={`/product/item.productId`}
                        className="text-blue-500 hover:underline "
                      >
                        {items.name}
                      </Link>
                    </td>
                    <td className="py-2 px-4">${items.price}</td>
                    <td className="py-2 px-4">${items.quantity}</td>
                    <td className="py-2 px-4">${items.price * items.quantity}</td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
                      </div>
                      
                      {/* Back to Order */}
                      <Link to="/my-orders" className="text-blue-500 hover:underline">
                      Back to my Orders</Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
