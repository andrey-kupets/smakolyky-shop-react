import React, { useEffect } from "react";
import { confirmEmail } from "../../services";

export const EmailConfirmer = (props) => {
  const { match: { params: { token } } } = props;

  const load = async () => {
    await confirmEmail(token);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      Confirm
    </div>
  )
}
