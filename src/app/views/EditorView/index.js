import CoreImplement from "./CoreImplement";
import FrameEditor from "./FrameEditor";
import Properties from "./Properties";

const EditorView = () => {
  return (
    <section className="flex-grow grid grid-cols-12 h-screen">
      <CoreImplement />
      <FrameEditor />
      <Properties />
    </section>
  );
};

export default EditorView;
