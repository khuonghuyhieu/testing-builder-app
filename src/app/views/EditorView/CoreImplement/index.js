import ImplementItem from "../components/ImplementItem";

const CoreImplement = () => {
  return (
    <div className="col-span-2 p-4">
      <div className="text-2xl">Core Implement</div>
      <div className="grid md:grid-cols-2 gap-3 mt-2 grid-cols-1">
        <ImplementItem />
        <ImplementItem />
        <ImplementItem />
        <ImplementItem />
        <ImplementItem />
        <ImplementItem />
        <ImplementItem />
      </div>
    </div>
  );
};

export default CoreImplement;
