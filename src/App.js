import "../src/styles/app.css";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import CreateNote from "./components/CreateNote";
import { BrowserRouter,Route,Routes} from "react-router-dom"
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
    <Toaster/>
    <Header/>
    <Routes>
      <Route path="/" element={ <NoteList />}/>
      <Route path="/add" element={ <CreateNote />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
