import { Button, Modal, Rate } from "antd";
import { ArrowRightOutlined, TruckOutlined } from "@ant-design/icons";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../Hooks/CartContext/cartContext";
import { ThemeContext } from "../../../Hooks/ThemeConvert/ThemeContext";

type Product = {
  id: number;
  title: string;
  images: string[];
  tags: string[];
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
};

function FeatureCard() {
  const ThemeDark = useContext(ThemeContext);
  const { theme } = ThemeDark;
  const cartContext = useContext(CartContext);
  const addToCart = cartContext?.addToCart;
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleShowDetail = (item: Product) => {
    setSelectedProduct(item);
    setOpenModal(true);
  };
  const handleAddToCart = (product: Product) => {
    if (addToCart) {
      addToCart(product);
      alert(`${product.title} đã được thêm vào giỏ hàng!`);
      setOpenModal(false);
    } else {
      alert("Unable to add to cart. Please try again later.");
    }
  };
  return (
    <div className="featureCard mt-28">
      <div className="max-w-[1170px] mx-auto">
        <h3
          className={`text-center ${
            theme === "dark" ? "text-white" : "text-[#0f2137]"
          } text-[26px] font-bold`}>
          Available Restaurant Nearby Area
        </h3>

        <div className="featureCardContent">
          <div className="flex flex-wrap">
            {products.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="mt-[35px] w-[calc(100%/3)] py-0 px-[15px] cursor-pointer"
                onClick={() => handleShowDetail(item)}>
                <img
                  width="100%"
                  src={item.images[0]}
                  alt={item.title}
                  className="hover:-translate-y-[3px] transition-transform duration-300 ease-in-out rounded-lg"
                />
                <h3
                  className={`${
                    theme === "dark" ? "text-white" : "text-[#0f2137]"
                  } text-[18px] font-medium mt-5 hover:text-[#2e8dff] transition-colors duration-300 ease-in-out`}>
                  {item.title}
                </h3>
                <div
                  className={`${
                    theme === "dark" ? "text-white" : "text-[#555]"
                  } text-[15px] mt-2`}>
                  {item.tags?.length ? item.tags.join(" • ") : "General"}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              type="primary"
              className="hover:!bg-[#2abd98] !border-none !text-[16px] !font-bold !shadow-none !px-[29px] !py-[17px] !rounded-[100px] !bg-[#00cc99] !h-auto">
              Discover More <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      </div>

      {/* hiển thị chi tiết sản phẩm */}
      <Modal
        width={900}
        open={openModal}
        footer={null}
        title={selectedProduct?.title || "Chi tiết sản phẩm"}
        onCancel={() => setOpenModal(false)}>
        {selectedProduct && (
          <div className="grid grid-cols-2 gap-6 items-start">
            <div>
              <img
                src={selectedProduct.images[0]}
                alt={selectedProduct.title}
                className="rounded-lg w-full"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#0f2137]">
                {selectedProduct.title}
              </h2>
              <p className="text-[#555]">{selectedProduct.description}</p>

              <div className="flex items-center gap-2">
                <Rate
                  disabled
                  allowHalf
                  defaultValue={selectedProduct.rating}
                />
                <span className="text-[#888]">
                  ({selectedProduct.rating.toFixed(1)})
                </span>
              </div>

              <div className="text-lg font-semibold text-[#00cc99]">
                ${selectedProduct.price}{" "}
                <span className="text-sm text-[#999] line-through ml-2">
                  $
                  {(
                    selectedProduct.price /
                    (1 - selectedProduct.discountPercentage / 100)
                  ).toFixed(2)}
                </span>
              </div>

              <div className="text-sm text-[#f00] font-medium">
                Sale {selectedProduct.discountPercentage}% Off
              </div>

              <p className="text-[#00cc99] font-semibold">
                {" "}
                <TruckOutlined size={150} /> Free Delivery
              </p>

              <Button
                type="primary"
                className="!bg-[#00cc99] hover:!bg-[#2abd98] !border-none !rounded-full !px-6 !py-2"
                onClick={() => handleAddToCart(selectedProduct)}>
                Add to Cart
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default FeatureCard;
