import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetContactsQuery } from "../../features/api/contactApi";
import { addContact } from "../../features/services/contactSlice";

const ContactIndex = () => {
  const token = Cookies.get("token");
  const { data } = useGetContactsQuery(token);
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state?.contact?.contacts);

  const addContactToRTK = () => {
    dispatch(addContact({ contacts: data?.contacts?.data }));
  };

  useEffect(() => {
    addContactToRTK();
  }, [data]);

  return <div>{contacts?.map((contact) => contact)}</div>;
};

export default ContactIndex;
