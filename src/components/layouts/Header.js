"use client";

import { MdDraw } from "react-icons/md";
import { Button } from "../ui";

const Header = () => {
  return (
    <div
      style={{ height: 80 }}
      className="flex justify-between items-center p-2 bg-gray-950"
    >
      <div className="text-4xl flex">
        <MdDraw className="mr-3" />
        App Builder
      </div>
      <Button>Preview</Button>
    </div>
  );
};

export default Header;
