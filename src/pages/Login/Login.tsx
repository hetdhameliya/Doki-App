import { IonButton, IonInput } from "@ionic/react";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { useFormik } from "formik";
import * as Yup from "yup";
import { REGEX } from "../../constants/Regex";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  
  const login = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email is required")
        .matches(REGEX.EMAIL, "Enter a valid email address"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          REGEX.STORAGE,
          "Password must contain at least one digit, one lowercase, and one uppercase letter. Min length is 8."
        ),
    }),
    onSubmit: async (values) => {
      try {
        console.log("Login Success:", values);
        history.push("/home")
      } catch (error) {
        console.log("Login Error:", error);
      }
    },
  });

  return (
    <div className="flex flex-col justify-center h-full w-full p-[30px] space-y-[20px]">
      <div>
        <span className="text-[24px] primary font-[700]">My...</span>
      </div>

     
        {/* Email Input */}
        <div className="space-y-[5px]">
          <IonInput
            label="Email"
            labelPlacement="floating"
            fill="outline"
            placeholder="Enter Your Email"
            name="email"
            value={login.values.email}
            onIonInput={(e) => login.setFieldValue("email", e.detail.value)}
            onBlur={login.handleBlur}
          />
          <ErrorMessage message={login.touched.email ? login.errors.email : undefined} />
        </div>

        {/* Password Input */}
        <div className="space-y-[5px]">
          <IonInput
            label="Password"
            labelPlacement="floating"
            fill="outline"
            placeholder="Enter Your Password"
            type="password"
            name="password"
            value={login.values.password}
            onIonInput={(e) => login.setFieldValue("password", e.detail.value)}
            onBlur={login.handleBlur}
          />
          <ErrorMessage message={login.touched.password ? login.errors.password : undefined} />
        </div>

        {/* Submit Button */}
        <IonButton expand="block" type="submit" disabled={login.isSubmitting} onClick={()=>{
          login.handleSubmit()
        }}>
          Login
        </IonButton>

        <div className="text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <span 
              className="text-primary primary  font-[500] cursor-pointer" 
              onClick={() => history.push("/register")}
            >
              Register here
            </span>
          </p>
        </div>
  
    </div>
  );
}
