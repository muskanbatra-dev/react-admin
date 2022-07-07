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

import {
  SuperadminList,
  SuperadminEdit,
  SuperadminCreate,
} from './Superadmin';

 
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
 
function App() {
  return (
    <Admin dataProvider={dataProvider} >
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
    

      <Resource
              name="superadmin"
              list={SuperadminList}
              edit={SuperadminEdit}
              create={SuperadminCreate}
            />
    </Admin>
  );
}
export default App;