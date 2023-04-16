import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/contactOperations.js";
import { Container } from "./Styles/Container.styled.jsx";
import {Title1, Title2} from './Styles/Titles.styled.jsx'
import  ContactForm  from "./Form/ContactForm";
import ContactList from "./ContactsList/ContactsList.jsx";
import Filter from "./Filter/Filter.jsx";
import { Loader } from "./Loader/Loader.js";

export function App (){
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);

  useEffect(() =>{ 
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <Container>
      <Title1>Phonebook</Title1>
      <ContactForm/>

      <Title2>Contacts</Title2>
      <Filter/> 
      <ContactList/>
      {isLoading && <Loader/>}
    </Container>
  )
};

