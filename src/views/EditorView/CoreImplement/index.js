"user client";

import { IMPLEMENT_COMPONENTS_CONFIG } from "@/constants";
import ImplementItem from "../components/ImplementItem";
import { addToVDom, handleCreateImplement } from "@/utils";

const CoreImplement = () => {
  return (
    <div className="col-span-2 p-4">
      <div className="text-2xl">Core Implement</div>
      <div className="grid md:grid-cols-2 gap-3 mt-2 grid-cols-1">
        {IMPLEMENT_COMPONENTS_CONFIG.map((implement) => (
          <ImplementItem
            key={implement?.id}
            item={implement}
            onDragStart={(ev) => ev.dataTransfer.setData("text", implement?.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CoreImplement;
