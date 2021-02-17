import SellingPro from "./products";
import { Header, BackG, Allin1, ImagesAdjustments } from "./styles";
import "./App.css";
import ProductsList from "./Components/ProductsList";

const App = () => {
  return (
    <>
      {/* background Image */}
      <BackG>
        {/* Header styling and components */}
        <Header>
          <h1>KHA'A Store</h1>
          <div>
            <Allin1>
              <b>All in one App</b>
            </Allin1>
          </div>
        </Header>
        {/* products */}
        <ProductsList />
      </BackG>
    </>
  );
};

export default App;
