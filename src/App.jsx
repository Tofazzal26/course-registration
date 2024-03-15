import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";
import SelectedCart from "./Components/SelectedCart/SelectedCart";

function App() {
  return (
    <div className="poppins-font container mx-auto">
      <div>
        <Header />
        <div className="flex">
          <Courses />
          <SelectedCart />
        </div>
      </div>
    </div>
  );
}

export default App;
