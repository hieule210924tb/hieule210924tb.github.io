import React from "react";

type FormData = {
  name: string;
  phone: number;
  address: string;
  guests: number;
  date: string;
  eventType: string;
};

const BookingForm = () => {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    phone: 0,
    address: "",
    guests: 0,
    date: "",
    eventType: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, address, guests, date, eventType } = formData;
    if (!name || !phone || !address || !guests || !date || !eventType) {
      alert("Vui lòng điền đầy đủ thông tin");
    } else {
      alert(`${JSON.stringify(formData)}`);
    }
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed "
      style={{
        backgroundImage:
          'url("https://form-react-eight.vercel.app/static/media/background.27990635aa519cc109aa.jpg")',
      }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-4">
          Liên Hệ Đặt Tiệc
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Lorem Ipsum đơn giản là một đoạn văn bản giả của ngành in ấn và sắp
          chữ, được xào trộn để tạo thành một cuốn sách mẫu.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Họ và tên</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nhập họ và tên"
              className="w-full border-b p-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700">Số lượng khách</label>
            <input
              type="number"
              min={1}
              name="guests"
              onChange={handleChange}
              placeholder="Số lượng khách"
              value={formData.guests || ""}
              className="w-full border-b p-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700">Số điện thoại</label>
            <input
              type="number"
              name="phone"
              placeholder="Số điện thoại"
              value={formData.phone || ""}
              onChange={handleChange}
              className="w-full border-b p-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700">Ngày tổ chức sự kiện</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border-b p-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700">Địa chỉ</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              placeholder="Nhập địa chỉ"
              onChange={handleChange}
              className="w-full border-b p-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700">Loại sự kiện</label>
            <input
              type="text"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              placeholder="Nhập loại sự kiện"
              className="w-full border-b p-2 focus:outline-none"
            />
          </div>

          <div className="col-span-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="package" className="w-4 h-4" />
              <span className="text-gray-700">
                Nhận gói sự kiện (MC, ánh sáng, sân khấu,…)
              </span>
            </label>
          </div>

          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition">
              GỬI THÔNG TIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
