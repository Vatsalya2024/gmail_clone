import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SecondSidebar from "./SecondSidebar";
import Main from "./Main";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__component">
        <Sidebar />
        <SecondSidebar/>
        <Main/>
      </div>

    
      {/* RightSidebar */}
    </div>
  );
}

export default App;
