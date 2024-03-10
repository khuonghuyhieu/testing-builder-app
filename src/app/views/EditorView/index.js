"use client";

import { useState, useEffect, useRef, useCallback } from "react";

import CoreImplement from "./CoreImplement";
import FrameEditor from "./FrameEditor";
import Properties from "./Properties";
import { convertToHTML, setActiveElements } from "@/app/utils";

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
  const [activeProps, setActiveProps] = useState({});

  useEffect(() => {
    const test = setTimeout(() => {
      const frame = frameRef.current;
      if (!frame) return;
      const docs = frame.childNodes;
      if (!docs) return;
      setActiveElements(docs, (id) => {
        setActiveProps({
          id,
        });
      });
    }, 1000);

    return () => {
      clearTimeout(test);
    };
  }, [dom, html]);

  useEffect(() => {
    setHtml("<html>" + convertToHTML(dom) + "</html>");
  }, [dom]);

  return (
    <section className="flex-grow grid grid-cols-12 h-screen">
      <CoreImplement />
      <FrameEditor html={html} dom={dom} setDom={setDom} frameRef={frameRef} />
      <Properties dom={dom} setDom={setDom} activeId={activeProps?.id} />
    </section>
  );
};

export default EditorView;
