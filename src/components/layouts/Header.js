"use client";

import { MdDraw } from "react-icons/md";
import { Button } from "../ui";
import { useRouter } from "next/navigation";

const Header = () => {
  const handleClick = () => {
    window.open("/consumer", "_blank");
  };

  return (
    <div
      style={{ height: 80 }}
      className="flex justify-between items-center p-2 bg-gray-950"
    >
      <div className="text-4xl flex">
        <MdDraw className="mr-3" />
        App Builder
      </div>
      <Button onClick={handleClick}>Preview</Button>
    </div>
  );
};

export default Header;
