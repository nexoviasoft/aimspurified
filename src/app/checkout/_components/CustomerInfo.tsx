"use client";

import { IoCartOutline } from "react-icons/io5";

interface CustomerInfoProps {
  name: string;
  setName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  address: string;
  setAddress: (v: string) => void;
  district?: string;
  setDistrict?: (v: string) => void;
  deliveryType?: "inside" | "outside" | "";
  setDeliveryType?: (v: "inside" | "outside" | "") => void;
  paymentMethod?: "cod" | "prepaid";
  setPaymentMethod?: (v: "cod" | "prepaid") => void;
  onSubmit: () => void;
  submitting?: boolean;
}

const CustomerInfo = ({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  address,
  setAddress,
  district,
  setDistrict,
  paymentMethod,
  setPaymentMethod,
  onSubmit,
  submitting,
}: CustomerInfoProps) => {
  return (
    <section>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        {/* customer info start */}
        <div className="flex flex-col gap-3  border border-gray-100 bg-white p-4 shadow-sm rounded-lg">
          <h1 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-2">
            Customer Information
          </h1>
          <div className="flex flex-col gap-3">
            <div className="grid min-[550px]:grid-cols-2 grid-cols-1 gap-3">
              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-600">Email (optional)</span>
                <input
                  className="border border-gray-200 outline-none py-2.5 px-3 text-sm focus:border-black placeholder:text-gray-400 bg-gray-50/30 focus:bg-white transition-all rounded-lg"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-600">Full Name *</span>
                <input
                  className="border border-gray-200 outline-none py-2.5 px-3 text-sm focus:border-black placeholder:text-gray-400 bg-gray-50/30 focus:bg-white transition-all rounded-lg"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="grid min-[550px]:grid-cols-2 grid-cols-1 gap-3">
              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-600">Area / City</span>
                <input
                  className="border border-gray-200 outline-none py-2.5 px-3 text-sm focus:border-black placeholder:text-gray-400 bg-gray-50/30 focus:bg-white transition-all rounded-lg"
                  type="text"
                  placeholder="Enter your area or city"
                  value={district || ""}
                  onChange={(e) => setDistrict?.(e.target.value)}
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-600">Full Address *</span>
                <input
                  className="border border-gray-200 outline-none py-2.5 px-3 text-sm focus:border-black placeholder:text-gray-400 bg-gray-50/30 focus:bg-white transition-all rounded-lg"
                  type="text"
                  placeholder="Enter your full address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="grid grid-cols-1">
              <label className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-600">Phone Number *</span>
                <input
                  className="border border-gray-200 outline-none py-2.5 px-3 text-sm focus:border-black placeholder:text-gray-400 bg-gray-50/30 focus:bg-white transition-all rounded-lg"
                  type="tel"
                  inputMode="numeric"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => {
                    const onlyDigits = e.target.value.replace(/\D/g, "");
                    setPhone(onlyDigits);
                  }}
                  required
                />
              </label>
            </div>
          </div>
        </div>
        {/* customer info end  */}

        {/* delivery type & payment method */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-3 border border-gray-100 bg-white p-4 shadow-sm rounded-lg">
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-2">
              Delivery Charge
            </h2>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-3 p-3 border border-primary bg-primary/5 rounded-lg cursor-default">
                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="accent-primary w-4 h-4"
                />
                <span className="text-sm font-medium text-gray-900">
                  Delivery Charge Fee: Free
                </span>
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-3  border border-gray-100 bg-white p-4 shadow-sm rounded-lg">
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-2">
              Payment Method
            </h2>
            <div className="flex flex-col gap-2">
              <label className={`flex items-center gap-3 p-3  border cursor-pointer transition-all rounded-lg ${paymentMethod === "cod" ? "border-primary bg-primary/5" : "border-gray-100 hover:border-gray-200"}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod?.("cod")}
                  className="accent-primary w-4 h-4"
                />
                <span className="text-sm font-medium">Cash on Delivery</span>
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="bg-black hover:bg-gray-900 transition-all text-white text-sm font-bold py-3.5 flex items-center justify-center gap-2 disabled:opacity-70 shadow-md shadow-black/10 hover:shadow-lg hover:-translate-y-0.5 mt-2 !rounded-full"
        >
          <IoCartOutline size={18} />
          {submitting ? "Ordering..." : "Confirm Order"}
        </button>
      </form>
    </section>
  );
};

export default CustomerInfo;
