import {
  Admin,
  Resource,
  
} from "react-admin";
import jsonServerProvider from 'ra-data-json-server';
import {
  UserList,
  UserEdit,
  UserCreate,
} from './Users';
import authProvider from "./authProvider";
 
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
 
function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
    
<Admin dataProvider={dataProvider}></Admin>
<Resource
        name="superadmin"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
    </Admin>
  );
}
export default App;