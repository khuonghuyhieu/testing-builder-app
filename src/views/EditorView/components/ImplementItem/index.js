"use client";

const ImplementItem = ({
  key,
  item,
  onClick = () => {},
  onDragStart = () => {},
}) => {
  const { id, name, icon } = item || {};

  return (
    <div
      key={key}
      id={id}
      draggable
      className="bg-gray-900 text-white hover:text-blue-600 select-none cursor-pointer p-4 rounded-lg border hover:border-blue-600 flex flex-col items-center justify-center gap-3"
      onClick={onClick}
      onDragStart={onDragStart}
      onDragOver={(ev) => ev.preventDefault()}
    >
      <p>{name}</p>
      {icon}
    </div>
  );
};

export default ImplementItem;
