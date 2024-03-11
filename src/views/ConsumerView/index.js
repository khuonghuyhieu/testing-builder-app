"use client";

const ConsumerView = () => {
  const children = localStorage.getItem("html");

  if (!children) return <>Note Found</>;

  return (
    <div
      className="p-5 flex flex-col items-center"
      dangerouslySetInnerHTML={{
        __html: children,
      }}
    />
  );
};

export default ConsumerView;
