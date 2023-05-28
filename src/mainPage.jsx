import ListMenu from "./components/ListMenu";

const MainPage = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-4xl font-bold mb-8 text-center text-primary">
        Welcome to Doga's Kitchen!
      </div>
      <ListMenu />
    </div>
  );
};

export default MainPage;
