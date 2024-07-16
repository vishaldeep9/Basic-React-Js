import React from "react";
import ChildArray from "./ChildArray";

const ParentArray = () => {
  const contactData = [
    {
      name: "Shubham",
      number: "+918143233476",
      age: 20,
    },
    {
      name: "vishal",
      number: "+919732433232",
      age: 23,
    },
    {
      name: "vivek",
      number: "+918987633476",
      age: 26,
    },
    {
      name: "Akshay",
      number: "+918908764231",
      age: 24,
    },
    {
      name: "shakti",
      number: "+914323433476",
      age: 29,
    },
    {
      name: "Ajit",
      number: "+917856233476",
      age: 24,
    },
    {
      name: "shyam",
      number: "+918143290668",
      age: 20,
    },
  ];

  //* that contact object is passed as props in child component
  const contactList = contactData.map((contact,i) => (
    //returning
    <ChildArray data={contactData} key={i} index={i} />
  ));
  return (
    <div>
      {/*------------- printing -----------*/}
      {contactList}
      {/* {contactData.map((contact=>{
        return(
            <h2>Name is {contact.name} and Mobile Number is {contact.number} and Age is {contact.age}</h2>
        )
      }))} */}
    </div>
  );
};

export default ParentArray;
