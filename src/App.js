import './app.scss';
import {useState, useEffect} from "react";
import CustomForm from './Components/Form/Form';
import UsersTable from './Components/UserTable/UsersTable';

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
      if(!localStorage.getItem('users')){
        localStorage.setItem('users', JSON.stringify(users))
      }else {
        const savedUsers = JSON.parse(localStorage.getItem('users'))
        setUsers(savedUsers)
      }
  },[])

  return (
    <div className="app">
        <CustomForm setUsers={setUsers}/>
        <UsersTable users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
