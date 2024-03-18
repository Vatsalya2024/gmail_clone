import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SecondSidebar from "./SecondSidebar";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__component">
        <Sidebar />
        <SecondSidebar/>
      </div>

      {/* MainContent */}
      {/* RightSidebar */}
    </div>
  );
}

export default App;
