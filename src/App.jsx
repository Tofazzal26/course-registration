import { useState } from "react";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import SelectedCart from "./Components/SelectedCart/SelectedCart";

export const totalCredit = 15;

function App() {
  const [cart, setCart] = useState([]);

  const handleCart = (course) => {
    const isExisted = cart.find((one) => one.id == course.id);

    const creditValue = cart.reduce((a, b) => a + b.credit, 0);

    if (creditValue + course.credit > totalCredit) {
      return alert("only 15 credit Available");
    }

    const newCart = [...cart, course];
    if (!isExisted) {
      setCart(newCart);
    }
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
