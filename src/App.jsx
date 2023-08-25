import Header from "./components/Header";
import AnimateRoutes from "./components/AnimateRoutes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimateRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
