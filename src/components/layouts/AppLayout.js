import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "calc(100vh - 80px)",
        }}
        className="h-max overflow-auto"
      >
        {children}
      </main>
    </>
  );
};

export default AppLayout;
