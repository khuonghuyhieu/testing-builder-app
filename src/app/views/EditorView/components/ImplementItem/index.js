import { FaParagraph } from "react-icons/fa";

const ImplementItem = () => {
  return (
    <div className="bg-gray-900 text-white hover:text-blue-600 select-none cursor-pointer p-4 rounded-lg border hover:border-blue-600 flex flex-col items-center justify-center gap-3">
      <p>Paragraph</p>
      <FaParagraph />
    </div>
  );
};

export default ImplementItem;
