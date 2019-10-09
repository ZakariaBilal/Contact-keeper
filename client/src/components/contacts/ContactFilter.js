import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/ContactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;

  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  const onSubmit = e => e.preventDefault();

  return (
    <form onSubmit={onSubmit}>
      <input
        ref={text}
        type='text'
        placeholder='filter Contacts...'
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
