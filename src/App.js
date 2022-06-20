import Home from './Home'

   var todos=[
    {
      id: 1,
      title: "Setup development environment",
      completed: true
    },
    {
      id: 2,
      title: "Develop website and add content",
      completed: false
    },
    {
      id: 3,
      title: "Deploy to live server",
      completed: false
    }
  ]
 

const  App=()=> {
  return (
    <>
<Home/>
    <ul>
    {    todos.map(todo => (
      <li>{todo.id} { todo.title}</li>
      
    ))     }
    </ul>
    
    </>

    
  
  
  
    
)}






export default App;
