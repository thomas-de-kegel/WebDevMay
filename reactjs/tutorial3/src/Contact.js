import React from "react";

function Contact({MyFunction}) {
    
  return (
    <div>
      <h3>Contact</h3>
      {
        MyFunction()
      }
    </div>
  );
}

export default Contact;
