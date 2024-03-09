import PropertyItem from "../components/Properties";

const Properties = () => {
  return (
    <div className="col-span-2 p-4">
      <div className="text-2xl mb-4">Properties</div>
      <div className="space-y-4">
        <PropertyItem />
      </div>
    </div>
  );
};

export default Properties;
