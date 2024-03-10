import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(classNames(inputs));
}

export const addToVDom = (components, element, parentId) => {
  const indexElement = components.findIndex((e) => e.id === parentId);

  if (indexElement === -1) {
    components.forEach((comp) => addToVDom(comp.children, element, parentId));
  } else {
    components[indexElement].children.push(element);
  }
};

export const convertToHTML = (components) => {
  let html = "";
  for (const component of components) {
    const { element, id, content, children, props } = component;

    const styleAttrs = Object.entries(props.style || {})
      .map(([key, value]) => `${key}:${value}`)
      .join(";");

    html += `
      <${element} id="${id}" style="${styleAttrs}">
        ${content || ""}
        ${convertToHTML(children)}
      </${element}>
    `;
  }

  return html;
};

export const setActiveElements = (docs = [], func) => {
  docs?.forEach((ele) => {
    const id = ele.id;
    if (id && id !== "root") {
      const eleId = document.getElementById(id);

      if (eleId) {
        ele.onclick = () => {
          if (id !== "root") {
            func(id);
          }
        };
      }
    }
  });
};

export const findDomElement = (dom, id) => {
  dom.forEach((item) => {
    if (item?.id === id) return item;

    const found = findDomElement(item.children, id);

    if (found) return found;
  });
};

export const modifyDom = (id, key, value, components, obj_key) => {
  components.forEach((item) => {
    if (item?.id === id) {
      if (obj_key === "content") {
        item.content = value;
      }
      return;
    }

    modifyDom(id, key, value, item?.children, obj_key);
  });
};
