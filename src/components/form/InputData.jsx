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
      placeholder: "First name",
      name: "name",
      accessKey: "n",
      tabIndex: "100",
      className: "form-input",   
      maxLength: "64",   
      pattern: "^[A-Za-z ]{3,16}$",
      required: true,
      errorMsg: "Your name should be 3-16 characters that do not include special characters!"
    },
    {
      id: "2",
      label: "Email",
      type: "email", 
      placeholder: "Email address",
      name: "email",
      accessKey: "e",
      tabIndex: "101",
      className: "form-input", 
      required: true,
      maxLength: "64",
      pattern: "[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(\.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\.[-a-zA-Z0-9_]+)*\.([cC][oO][mM]))(:[0-9]{1,5})?",
      errorMsg: "Please use the correct name@email.com format.",
    },              
    {
        id: "3",
        label: "Phone",
        type: "phone",
        placeholder: "Phone number",
        name: "phone",
        accessKey: "p",
        tabIndex: "104",
        className: "form-input", 
        required: false,
        maxLength: "10",
        pattern: "/^(\+\d{1,3}[- ]?)?\d{10}$/",
        errorMsg: "Please use the correct phone number format.",
      },
      {
        id: "4",
        label: "Description",
        type: "text",   
        placeholder: "Your best day/time?",
        name: "desc",
        accessKey: "d",
        tabIndex: "105",
        className: "form-input desc", 
        required: true,
        rows: "4",
        maxLength: "200",
        pattern: "^[A-Za-z ]{3,200}$",
        errorMsg: "Please use the correct phone number format.",
      }, 
      {
        id: "5",
        label: "Service",
        type: "text",   
        placeholder: "",
        name: "service", 
        accessKey: "d",
        tabIndex: "105",
        className: "no-show", 
        required: false,
        maxLength: "200",
        pattern: "^[A-Za-z ]{3,200}$",
        errorMsg: "",
      },             
]

export default inputData;