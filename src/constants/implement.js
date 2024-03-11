import { FaParagraph } from "react-icons/fa";
import { IoRadioButtonOnSharp } from "react-icons/io5";

export const IMPLEMENT_COMPONENTS_CONFIG = [
  {
    id: "paragraph",
    name: "Paragraph",
    icon: <FaParagraph />,
    element: {
      content: "This is the Paragraph",
      children: [],
      element: "p",
      props: {
        style: {
          color: "black",
          "font-size": "18px",
          "margin-bottom": "10px",
        },
      },
    },
  },
  {
    id: "button",
    name: "Button",
    icon: <IoRadioButtonOnSharp />,
    element: {
      content: "button",
      children: [],
      element: "button",
      props: {
        style: {
          color: "black",
          "font-size": "18px",
          display: "block",
          padding: "5px",
          border: "2px solid #000",
          "margin-bottom": "10px",
        },
      },
    },
  },
];
