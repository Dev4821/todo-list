
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import NavbarComp from './myComponents/NavbarComp';
import Todos from './myComponents/Todos';
import Footer from './myComponents/Footer';


function App() {
  const onDelete =(todo)=>
  {
    console.log("I am onDelete", todo);
  }
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go to the market to get this job done"
    }
  ]
  return (

    <div>
   <NavbarComp title="MyTodosList" searchBar={false}/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>

   
  </div>
  );
}

export default App;
