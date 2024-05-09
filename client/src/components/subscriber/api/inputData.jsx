const inputData = [
    {
      id: "0",
      type: "text",
      placeholder: "enter text",
      name: "website",
      tabIndex: "100",
      className: "no-show",
    },
    {
      id: "1",
      label: "First name",
      type: "text",    
      name: "fname",
      accessKey: "f",
      tabIndex: "101",
      className: "form-input",   
      maxLength: "64",   
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
      errorMsg: "First name should be 3-16 characters that do not include special characters!"
    },
    {
      id: "2",
      label: "Email",
      type: "email",    
      name: "email",
      accessKey: "e",
      tabIndex: "102",
      className: "form-input", 
      required: true,
      maxLength: "64",
      pattern: "[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(\.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\.[-a-zA-Z0-9_]+)*\.([cC][oO][mM]))(:[0-9]{1,5})?",
      errorMsg: "Please use the correct email@email.com format.",
    },              

]

export default inputData;