import React, { useState } from "react";

// import { useGHStContext } from "../../../utils/ContextProvider";

const SubscribeForm = () => {
  //   SET INPUT
  const [email, setEmail] = useState("");

  return (
    <form
      action={process.env.REACT_APP_MAILCHIMP_ACTION}
      method="GET"

      //   noValidate
    >
      <input type="hidden" name="u" value={process.env.REACT_APP_MAILCHIMP_U} />
      <input
        type="hidden"
        name="id"
        value={process.env.REACT_APP_MAILCHIMP_ID}
      />
      <input
        className="emailInput"
        required
        type="email"
        name="EMAIL"
        id="MERGE0"
        value={email}
        onChange={(val) => {
          setEmail(val.target.value); // SET value from email
        }}
        autoCapitalize="off"
        autoCorrect="on"
      />

      <input
        type="submit"
        value="Subscribe"
        name="subscribe"
        id="mc-embedded-subscribe"
        className="button"
      />
    </form>
  );
};

export default SubscribeForm;
