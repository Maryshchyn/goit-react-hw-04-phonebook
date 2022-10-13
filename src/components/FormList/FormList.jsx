import {FormListUl, FormListLi, FormListButton} from './FormList.styled'

export const FormList = ({ contacts, delitForm }) => <FormListUl>{contacts.map(({id, name, number}) =>
    <FormListLi key={id}>{name}{number}<FormListButton onClick={()=> delitForm(id)}>Видалити</FormListButton></FormListLi>
)}</FormListUl>
    


