import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import MainBody from "./Components/Mainbody/MainBody";
import ContextDataLayer from "./Contexts/Context";
import { GlobalDataLayer } from "./Styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalDataLayer />
      <ContextDataLayer >
      <Header />
      <MainBody />
      </ContextDataLayer>
    </>
  );
}

export default App;
