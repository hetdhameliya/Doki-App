import { IonButton, IonIcon, IonInput } from "@ionic/react";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { useFormik } from "formik";
import * as Yup from "yup";
import { REGEX } from "../../constants/Regex";
import { useHistory } from "react-router-dom";
import { arrowBack } from "ionicons/icons";

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

  const handleBack = () => {

    history.goBack();

  };
  return (
    <div className="flex flex-col justify-center h-full w-full p-[30px] space-y-[20px]">
      <div className="flex items-center">
        <IonIcon
          icon={arrowBack}
          className="text-[24px] text-[#8A79FD] cursor-pointer"
          onClick={handleBack}
        />
      </div>

      <div className="space-y-[5px]">
        <span className="text-[24px] font-[700] text-[#8A79FD]">
          Welcome Back
        </span>
        <p className="text-[16px] text-[#6B7280] mt-[5px] leading-[1.5]">
          Sign in to your account to continue where you left off.
        </p>
      </div>

      {/* Email Input */}
      <div className="space-y-[5px]">
        <IonInput
          label="Email"
          labelPlacement="floating"
          fill="outline"
          placeholder="your.email@example.com"
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
          placeholder="Enter your secure password"
          type="password"
          name="password"
          value={login.values.password}
          onIonInput={(e) => login.setFieldValue("password", e.detail.value)}
          onBlur={login.handleBlur}
        />
        <ErrorMessage message={login.touched.password ? login.errors.password : undefined} />
      </div>

      {/* Submit Button */}
      <IonButton expand="block" type="submit" disabled={login.isSubmitting} onClick={() => {
        login.handleSubmit()
      }} className="capitalize">
        Login
      </IonButton>

      <div className="text-center">
        <p className="text-gray-600">
          New to our platform?{" "}
          <span
            className="text-primary primary  font-[500] cursor-pointer"
            onClick={() => history.push("/email-verification")}
          >
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
}
