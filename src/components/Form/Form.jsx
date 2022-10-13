import {TitleForm, TitleLabel, TitleInput, TitleButton} from './Form.styled'

const { Component } = require("react");


class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    hendleChange = e => {
    const { name, value } = e.currentTarget
    this.setState({
      [name]: value
    })
    };

    hendlerOnSubmit = e => {
    e.preventDefault();
      console.log(this.state)
      this.props.onSubmit(this.state)         

      this.setState({ name: '',
        number: ''})
  }
    
    render() {
        return (
             <TitleForm onSubmit={this.hendlerOnSubmit}>
        <TitleLabel>
          Name
     <TitleInput
        type="text"
        name="name"
        value={this.state.name}
        onChange={this.hendleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
          /></TitleLabel>
        <TitleLabel>
          Number
      <TitleInput
        type="tel"
            name="number"
            value={this.state.number}
        onChange={this.hendleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
          />
        </TitleLabel>
        <TitleButton type='submit'>Add contact</TitleButton>
      </TitleForm>
        )
    }
}
export default Form;