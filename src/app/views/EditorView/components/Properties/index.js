"use client";

const PropertyItem = ({ label, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="text-lg mb-1">{label}</label>
      <input
        className="p-2 rounded-lg text-black"
        placeholder="Content"
        onChange={onChange}
      />
    </div>
  );
};

export default PropertyItem;
