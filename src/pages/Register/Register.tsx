import { IonButton, IonInput, IonPage, IonContent, IonIcon } from "@ionic/react";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { useFormik } from "formik";
import * as Yup from "yup";
import { REGEX } from "../../constants/Regex";
import { useHistory } from "react-router-dom";
import { arrowBack } from "ionicons/icons";

export default function Register() {
  const history = useHistory();

  const register = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .required("Username is required")
        .min(3, "Username must be at least 3 characters"),
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
        console.log("Register Success:", values);
      } catch (error) {
        console.log("Register Error:", error);
      }
    },
  });
  const handleBack = () => {
    history.goBack();
  };

  return (
    <IonPage>
      <IonContent scrollY={true} className="ion-padding">
        <div className="flex min-h-full w-full items-center justify-center">
          <div className="w-full max-w-[400px] p-[30px] space-y-[20px]">
            <div className="flex items-center sticky top-0 bg-white z-10">
              <IonIcon
                icon={arrowBack}
                className="text-[24px] text-[#8A79FD] cursor-pointer"
                onClick={handleBack}
              />
            </div>
            <div className="space-y-[5px]">
              <span className="text-[24px] font-[700] text-[#8A79FD]">
                Create Account
              </span>
              <p className="text-[16px] text-[#6B7280] mt-[5px] leading-[1.6]">
                Create your account to access our features and get started.
              </p>
            </div>

            {/* Username Input */}
            <div className="space-y-[5px]">
              <IonInput
                label="Username"
                labelPlacement="floating"
                fill="outline"
                placeholder="john.doe123"
                name="username"
                value={register.values.username}
                onIonInput={(e) => register.setFieldValue("username", e.detail.value)}
                onBlur={register.handleBlur}
              />
              <ErrorMessage message={register.touched.username ? register.errors.username : undefined} />
            </div>

            {/* Email Input */}
            <div className="space-y-[5px]">
              <IonInput
                label="Email"
                labelPlacement="floating"
                fill="outline"
                placeholder="your.email@example.com"
                name="email"
                value={register.values.email}
                onIonInput={(e) => register.setFieldValue("email", e.detail.value)}
                onBlur={register.handleBlur}
              />
              <ErrorMessage message={register.touched.email ? register.errors.email : undefined} />
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
                value={register.values.password}
                onIonInput={(e) => register.setFieldValue("password", e.detail.value)}
                onBlur={register.handleBlur}
              />
              <ErrorMessage message={register.touched.password ? register.errors.password : undefined} />
            </div>

            <IonButton className="capitalize" expand="block" type="submit" disabled={register.isSubmitting} onClick={() => {
              register.handleSubmit()
            }}>
              Register
            </IonButton>

            <div className="text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <span
                  className="text-primary primary font-[500] cursor-pointer"
                  onClick={() => history.push("/login")}
                >
                  Login here
                </span>
              </p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}
