import logo from './logo.svg';
import './App.css';
import { Header } from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { TodoItem } from './MyComponents/TodoItem';
import { Footer } from './MyComponents/Footer';


function App() {
let  myVariable = "The app works"
  return (
    <>
<Header/>
<Todos/>
<TodoItem/>
<Footer/>

    </>
    );
}

export default App;
