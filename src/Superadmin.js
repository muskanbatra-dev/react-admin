import {
    List,
    Datagrid,
    TextField,
    
    
    Edit,
    SimpleForm,
    TextInput,
    Create,
  } from 'react-admin';
   
  export const SuperadminList = props => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
       
        <TextField source="address.street" label="Address" />
        <TextField source="phone" />
        
        
      </Datagrid>
    </List>
  );
   
  export const SuperadminEdit = props => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <TextInput source="username" />
        
        <TextInput source="address.street" label="Address" />
        <TextInput source="phone" />
        
        
      </SimpleForm>
    </Edit>
  );
   
  export const SuperadminCreate = props => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="username" />
       
        <TextInput source="address.street" label="Address" />
        <TextInput source="phone" />
        
        
      </SimpleForm>
    </Create>
  )