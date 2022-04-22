import React, { useEffect } from "react";
import { confirmEmail } from "../../services";

export const EmailConfirmer = (props) => {
  const { match: { params: { token } } } = props;

  const sendConfirm = async () => {
    await confirmEmail(token);
  };

  useEffect(() => {
    sendConfirm();
  }, []);

  return (
    <div>
      Register confirmed
    </div>
  )
}
