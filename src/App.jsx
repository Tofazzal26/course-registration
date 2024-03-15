import { useState } from "react";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import SelectedCart from "./Components/SelectedCart/SelectedCart";

function App() {
  const [cart, setCart] = useState([]);

  const handleCart = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  };

  return (
    <div className="poppins-font container mx-auto">
      <div>
        <Header />
        <div className="flex gap-4">
          <Courses handleCart={handleCart} />
          <SelectedCart cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default App;
