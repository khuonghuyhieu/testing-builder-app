"use client";

import { useState, useEffect, useRef } from "react";

import CoreImplement from "./CoreImplement";
import FrameEditor from "./FrameEditor";
import Properties from "./Properties";
import { convertToHTML } from "@/app/utils";

const EditorView = () => {
  const frameRef = useRef();
  const [html, setHtml] = useState("");
  const [dom, setDom] = useState([
    {
      element: "body",
      id: "root",
      children: [],
      props: {
        style: {},
      },
    },
  ]);

  useEffect(() => {
    setHtml("<html>" + convertToHTML(dom) + "</html>");
  }, [dom]);

  return (
    <section className="flex-grow grid grid-cols-12 h-screen">
      <CoreImplement />
      <FrameEditor html={html} dom={dom} setDom={setDom} frameRef={frameRef} />
      <Properties />
    </section>
  );
};

export default EditorView;
