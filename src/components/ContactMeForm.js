const ContactMeForm = () => {
  const OnSubmitForm = (data) => {
    // console.log(data.target.form[0].value)
    const fullName = data.target.form.fullName.value;
    const company = data.target.form.company.value;
    const email = data.target.form.email.value;
    const message = data.target.form.message.value;

    if (
      /^[a-zA-Z]{2,} [a-zA-Z]{2,}$/.test(fullName) &&
      company &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      //construct a url for opening the mail app with the following subject and body
      let body = `Hi Moris:)%0D%0A%0D%0AMy name is ${fullName} from ${company}.%0D%0A%0D%0A${message}%0D%0A%0D%0AI saw your CV online and I will be happy to connect.%0D%0AI am available at: ${email}.%0D%0A%0D%0AThanks,%0D%0A${fullName}.`;
      let subject = `I saw your CV online and I will be happy to connect.`;
      let str = `mailto:moris.gateno@gmail.com?subject=${subject}&body=${body}`;
      //opens a window on the app mail populated with the information from the client
      window.open(str, "emailWindow");
    }
  };

  return (
    <div id="contactForm" className="jumbotron">
      <div className="jumbotron-info">
        <br />
        <h1>Contact Me:</h1>
        <form id="form" name="form">
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Full Name"
            required
            pattern="[a-zA-Z]{2,} [a-zA-Z]{2,}"
          />
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company"
            required
          />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-Mail"
            required
            pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
          />

          <textarea
            id="message"
            name="message"
            type="text"
            placeholder="Message"
          ></textarea>
          <input
            id="submit"
            name="submit"
            type="submit"
            value="Send!"
            onClick={OnSubmitForm}
          />
        </form>
      </div>
    </div>
  );
};
export default ContactMeForm;
