import {
    List,
    Datagrid,
    TextField,
    
    
    Edit,
    SimpleForm,
    TextInput,
    Create,
  } from 'react-admin';
   
  export const UserList = props => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
       
        <TextField source="address.street" label="Address" />
        <TextField source="phone" />
        
        <TextField source="company.name" label="Company" />
  </Datagrid>*
    </List>
  );
   
  export const UserEdit = props => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <TextInput source="username" />
        
        <TextInput source="address.street" label="Address" />
        <TextInput source="phone" />
        
        <TextInput source="company.name" label="Company" />
      </SimpleForm>
    </Edit>
  );
   
  export const UserCreate = props => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="username" />
       
        <TextInput source="address.street" label="Address" />
        <TextInput source="phone" />
        
        <TextInput source="company.name" label="Company" />
      </SimpleForm>
    </Create>
  )