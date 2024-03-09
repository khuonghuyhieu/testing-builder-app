"use client";

import { produce } from "immer";
import { v4 as uuid } from "uuid";

import { IMPLEMENT_COMPONENTS_CONFIG } from "@/app/constants";
import { addToVDom } from "@/app/utils";

const FrameEditor = ({ html, dom, setDom, frameRef }) => {
  const handleCreateImplement = (implement) => {
    setDom(
      produce(dom, (copy) => {
        const element = {
          ...implement.element,
          id: uuid(),
        };
        addToVDom(copy, element, "root");
      })
    );
  };

  const handleDrop = (ev) => {
    ev.preventDefault();

    const idElement = ev.dataTransfer.getData("text");
    const findObjByIdElement = IMPLEMENT_COMPONENTS_CONFIG.find(
      (item) => item.id === idElement
    );

    handleCreateImplement(findObjByIdElement);
  };

  return (
    <div
      className="col-span-8 h-full bg-white"
      onDrop={handleDrop}
      onDragOver={(ev) => ev.preventDefault()}
    >
      <div
        ref={frameRef}
        className="p-5 flex flex-col items-center"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  );
};

export default FrameEditor;
