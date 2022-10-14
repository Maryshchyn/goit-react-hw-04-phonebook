import { useState, useEffect } from 'react';
import {Form} from './Form/Form'
import {FormList} from './FormList/FormList'
import { nanoid } from 'nanoid';
import { Title } from './Title/Title';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter'

export function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
   return JSON.parse(localStorage.getItem('contacts')) ?? ''
  });

  useEffect(() => {
    localStorage.setItem('contacts',
        JSON.stringify(contacts));
  }, [contacts])

  const findContactByName = name => {
    
    return contacts.find(item => item.name.toLowerCase() === name);
  };

  const addForm = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts([contact, ...contacts]);
  }
 const formSubmitHandler = data => {
    const { name, number } = data;
    const normalizedName = name.toLowerCase();
    if (findContactByName(normalizedName)) {
      alert (`${name} is already in contacts`);
      return;
    }
    addForm(name, number);
  };
  const changeFilter = e => {
    setFilter( e.currentTarget.value );
  };

  const  deleteForm = (constactId) =>{
    setContacts(prefState => ({
      contacts: prefState.contacts.filter(contact => contact.id !== constactId)
    }))
  }
  const normalizeFilter = filter.toLowerCase();
  const vaisibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter))

return (
      <div>
        <Title title="Phonebook"/>
        <Form onSubmit={formSubmitHandler} />
        <Contacts text='Contacts' />
        <Filter filter={filter}  onChange={changeFilter} />
        <FormList contacts={vaisibleContacts} delitForm={deleteForm} />
      </div>
   )

}


// export class App extends Component {
//    state = {
//         contacts:  [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//      ],
//      filter: '',
//   };
  
//   componentDidMount() {
   
//     const contacts = localStorage.getItem('contacts');
//     const parseContacts = JSON.parse(contacts)
//     console.log(parseContacts);
//     if (parseContacts) {
//       this.setState({contacts: parseContacts})
//     }
//   }
//   componentDidUpdate(prevProps, prefState) {
    
//     if (this.state.contacts !== prefState.contacts) {
//       console.log('обновидлсь поле контактс');
//       localStorage.setItem('contacts',
//         JSON.stringify(this.state.contacts));
//     }
//   }

//   findContactByName = name => {
//     const { contacts } = this.state;
//     return contacts.find(item => item.name.toLowerCase() === name);
//   };

//   formSubmitHandler = data => {
//     const { name, number } = data;
//     const normalizedName = name.toLowerCase();
//     if (this.findContactByName(normalizedName)) {
//       alert (`${name} is already in contacts`);
//       return;
//     }
//     this.addForm(name, number);
//   };
 
//  addForm = (name, number) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     this.setState(({contacts}) => ({
//       contacts: [contact, ...contacts],
//     }));
//   }


  // deleteForm = (constactId) =>{
  //   this.setState(prefState => ({
  //     contacts: prefState.contacts.filter(contact => contact.id !== constactId)
  //   }))
  // }
 
  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };
  
  

//   render() {
//     const {contacts, filter } = this.state;
//     const normalizeFilter = filter.toLowerCase();

//     const vaisibleContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizeFilter))
    
//     return (
//       <div>
//         <Title title="Phonebook"/>
//         <Form onSubmit={this.formSubmitHandler} />
//         <Contacts text='Contacts' />
//         <Filter filter={filter}  onChange={this.changeFilter} />
//         <FormList contacts={vaisibleContacts} delitForm={this.deleteForm} />
//       </div>
//    )
//  }
// }
