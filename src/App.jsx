import Navbar from "./Navbar";
import Home from "./Home";
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
