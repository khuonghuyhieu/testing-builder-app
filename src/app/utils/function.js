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
