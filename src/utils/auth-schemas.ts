import * as Yup from "yup";

const authShape: Yup.ObjectShape = {
  email: Yup.string()
    .email("Email format incorrect.")
    .required("Email is required!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Minimum 8 characters."),
};

export const authValidationSchema = Yup.object().shape(authShape);
export const registrationSchema = Yup.object().shape({
  ...authShape,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords are not equal.")
    .required("Password confirmation is required"),
});
