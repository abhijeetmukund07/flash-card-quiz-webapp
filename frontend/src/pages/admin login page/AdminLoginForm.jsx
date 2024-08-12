// import React from "react";
// import './AdminLoginForm.css'
// function AdminLoginForm() {
//   return (
//     <div>
//       <form className="form w-25 mx-auto mt-5">
//         <span className="heading">Admin Sign In</span>

//         <span className="Mail">E-Mail</span>
//         <input placeholder="Enter E-Mail" type="text" className="input" />
//         <span className="Password">Password</span>
//         <input placeholder="Enter Password" type="text" className="input" />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default AdminLoginForm;

import React from "react";
import { useForm } from "react-hook-form";
import "./AdminLoginForm.css";

function AdminLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form className="form w-25 mx-auto mt-5" onSubmit={handleSubmit(onSubmit)}>
        <span className="heading">Admin Sign In</span>

        <span className="Mail">E-Mail</span>
        <input
          placeholder="Enter E-Mail"
          type="text"
          className="input"
          {...register("email", { required: "E-Mail is required" })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <span className="Password">Password</span>
        <input
          placeholder="Enter Password"
          type="password"
          className="input"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdminLoginForm;
