"use client";

import { useMemo } from "react";
import { produce } from "immer";

import PropertyItem from "../components/Properties";
import { findDomElement, modifyDom } from "@/utils";

const Properties = ({ dom, setDom, activeId }) => {
  const findActive = useMemo(() => {
    if (!activeId) return null;

    const findElement = findDomElement(dom, activeId);

    if (!findElement) return null;

    return findElement;
  }, [activeId, dom]);

  const handleChangeValueElement = (ele) => {
    const value = ele.target.value;

    setDom(
      produce(dom, (c_dom) => {
        modifyDom(activeId || "", "content", value, c_dom, "content");
      })
    );
  };

  return (
    <div className="col-span-2 p-4 bg-black">
      <div className="text-2xl mb-4">Properties</div>
      <div className="space-y-4">
        <PropertyItem label="Content" onChange={handleChangeValueElement} />
      </div>
    </div>
  );
};

export default Properties;
