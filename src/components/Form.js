import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required!"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(5).required(),
    newPassword: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "Password don't match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder="Full Name" {...register("fullName")} />
        <p>{errors.fullName?.message}</p>
        <input type="text" placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>
        <input type="number" placeholder="Age" {...register("age")} />
        <p>{errors.age?.message}</p>
        <input
          type="password"
          placeholder="Enter Password"
          {...register("newPassword")}
        />
        <p>{errors.newPassword?.message}</p>
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
};
