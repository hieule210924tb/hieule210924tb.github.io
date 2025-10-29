import React, { useState, useEffect } from "react";
import { LeftOutlined, RightOutlined, TruckOutlined } from "@ant-design/icons";
import { Button, Modal, Rate } from "antd";
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

const RestaurantsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const limit = 6;
  const fetchProducts = async () => {
    const skip = page * limit;
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const data = await res.json();
    setProducts(data.products);
    setTotal(data.total);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const handleShowDetail = (item: Product) => {
    setSelectedProduct(item);
    setOpen(true);
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="featureCardContent">
      <div className="flex flex-wrap">
        {products.map((item) => (
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
            <h3 className="text-[#0f2137] text-[18px] font-medium mt-5 hover:text-[#2e8dff] transition-colors duration-300 ease-in-out">
              {item.title}
            </h3>
            <div className="text-[#555] text-[15px] mt-2">
              {item.tags?.length ? item.tags.join(" • ") : "General"}
            </div>
          </div>
        ))}
      </div>
      {/* modal chi tiết sản phẩm*/}
      <Modal
        width={900}
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
        title={selectedProduct?.title || "Chi tiết sản phẩm"}>
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
                className="!bg-[#00cc99] hover:!bg-[#2abd98] !border-none !rounded-full !px-6 !py-2">
                Add to Cart
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* Phân trang */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <Button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
          className="!bg-[#00cc99] hover:!bg-[#2abd98] !border-none !text-white !font-bold !rounded-[100px] !px-5 !py-2">
          <LeftOutlined />
        </Button>

        <span className="text-[16px] font-medium text-[#0f2137]">
          Trang {page + 1} / {totalPages || 1}
        </span>

        <Button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page + 1 >= totalPages}
          className="!bg-[#00cc99] hover:!bg-[#2abd98] !border-none !text-white !font-bold !rounded-[100px] !px-5 !py-2">
          <RightOutlined />
        </Button>
      </div>
    </div>
  );
};

export default RestaurantsPage;
