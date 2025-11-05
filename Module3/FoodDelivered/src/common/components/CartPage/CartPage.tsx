import React, { useContext } from "react";
import { CartContext } from "../../../Hooks/CartContext/cartContext";
import { Button, List, message } from "antd";
import { ThemeContext } from "../../../Hooks/ThemeConvert/ThemeContext";

const CartPage: React.FC = () => {
  const ThemeDark = useContext(ThemeContext);
  const { theme } = ThemeDark;
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    return <div>Loading...</div>;
  }
  const { cart, removeFromCart, clearCart } = cartContext;

  return (
    <div
      className={`max-w-[800px] mx-auto mt-20 ${
        theme === "dark" ? "text-white" : "text-black"
      }`}>
      <h2 className="text-2xl font-bold mb-4">Giỏ hàng của bạn</h2>

      <List
        bordered
        dataSource={cart}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                danger
                type="link"
                onClick={() => {
                  removeFromCart(item.id);
                  message.info(`Đã xóa ${item.title}`);
                }}>
                Xóa
              </Button>,
            ]}>
            <List.Item.Meta
              avatar={<img src={item.images[0]} alt={item.title} width={60} />}
              title={
                <div
                  className={`${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                  {item.title}
                </div>
              }
              description={
                <div className="flex gap-3 text-sm">
                  <span
                    className={`${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}>
                    Số lượng:{" "}
                    <span
                      className={`${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      } font-medium`}>
                      {item.quantity}
                    </span>
                  </span>

                  <span
                    className={`${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}>
                    Giá:{" "}
                    <span
                      className={`${
                        theme === "dark" ? "text-green-400" : "text-green-600"
                      } font-semibold`}>
                      ${item.price}
                    </span>
                  </span>
                </div>
              }
            />
          </List.Item>
        )}
      />

      {cart.length > 0 && (
        <div className="text-right mt-4">
          <Button
            type="primary"
            danger
            onClick={() => {
              clearCart();
              message.success("Đã xóa toàn bộ giỏ hàng!");
            }}>
            Xóa tất cả
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
