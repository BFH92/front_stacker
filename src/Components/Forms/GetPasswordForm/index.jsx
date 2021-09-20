import React from "react";
import "./get_password_form.scss";
//formvalidation
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const GetPasswordForm = ({ user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: user.email,
    },
  });

  return (
    <>
      <div className="form__container--getpassword">
        <form className="form">
          <div className="input__container">
            <label>
              email
              <input
                type="text"
                {...register("email", {
                  required: true,
                  pattern:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                })}
                onChange={(e) => user.setEmail(e.target.value)}
              />
            </label>
            <ErrorMessage
              errors={errors}
              name="email"
              render={() => (
                <p>
                  <strong>Email valide requis</strong>
                </p>
              )}
            />
          </div>
          <button onClick={()=>handleSubmit(user.sendPasswordInstructions)}>
            Changer de mot de passe
          </button>
        </form>
      </div>
    </>
  );
};

export default GetPasswordForm;
