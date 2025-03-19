import { IonButton, IonInput, IonIcon } from "@ionic/react";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { useFormik } from "formik";
import * as Yup from "yup";
import { REGEX } from "../../constants/Regex";
import { useHistory } from "react-router-dom";
import OtpInput from 'react-otp-input';
import { useState, useEffect } from "react";
import { arrowBack } from "ionicons/icons";

export default function EmailVerification() {
    const history = useHistory();
    const [showOTP, setShowOTP] = useState(false);
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(60);
    const [isResendDisabled, setIsResendDisabled] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (showOTP && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsResendDisabled(false);
        }
        return () => clearInterval(interval);
    }, [showOTP, timer]);

    const handleResendOTP = async () => {
        try {
            // Reset OTP input
            setOtp('');
            // Reset timer
            setTimer(60);
            setIsResendDisabled(true);
            // TODO: Add your resend OTP API call here
            console.log("Resending OTP to:", form.values.email);
        } catch (error) {
            console.log("Resend OTP Error:", error);
        }
    };

    const form = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .required("Email is required")
                .matches(REGEX.EMAIL, "Enter a valid email address"),
        }),
        onSubmit: async (values) => {
            try {
                console.log("Email Verification:", values);
                setShowOTP(true); // Show OTP section instead of redirecting
            } catch (error) {
                console.log("Verification Error:", error);
            }
        },
    });

    const handleOTPVerification = async () => {
        try {
            console.log("OTP Verification:", otp);
            history.push("/register");
        } catch (error) {
            console.log("OTP Verification Error:", error);
        }
    };

    const handleBack = () => {
        if (showOTP) {
            setShowOTP(false);
        } else {
            history.goBack();
        }
    };

    return (
        <div className="h-full w-full p-[30px] flex flex-col">

            {/* Centered Content */}
            <div className="flex-1 flex flex-col justify-center space-y-[20px]">
                {/* Back Button */}
                <div className="flex items-center">
                    <IonIcon
                        icon={arrowBack}
                        className="text-[24px] text-[#8A79FD] cursor-pointer"
                        onClick={handleBack}
                    />
                </div>
                <div className="space-y-[5px]">
                    <span className="text-[24px] font-[700] text-[#8A79FD]">
                        {showOTP ? 'OTP Verification' : 'Email Verification'}
                    </span>
                    <p className="text-[16px] text-[#6B7280] mt-[5px] leading-[1.5]">
                        {showOTP
                            ? 'Please enter the OTP sent to your email'
                            : 'Please enter your email address to verify your account'
                        }
                    </p>
                </div>

                {/* Rest of the content */}
                {!showOTP ? (
                    <>
                        {/* Email Input */}
                        <div className="space-y-[5px]">
                            <IonInput
                                label="Email"
                                labelPlacement="floating"
                                fill="outline"
                                placeholder="your.email@example.com"
                                name="email"
                                value={form.values.email}
                                onIonInput={(e) => form.setFieldValue("email", e.detail.value)}
                                onBlur={form.handleBlur}
                            />
                            <ErrorMessage message={form.touched.email ? form.errors.email : undefined} />
                        </div>

                        <IonButton className="capitalize" expand="block" type="submit" disabled={form.isSubmitting} onClick={() => form.handleSubmit()}>
                            Verify Email
                        </IonButton>
                    </>
                ) : (
                    <>
                        <div className="flex justify-center">
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderSeparator={<span className="w-[8px]"></span>}
                                renderInput={(props) =>
                                    <input
                                        {...props}
                                        className="!w-[40px] h-[40px] text-center border-2 rounded-md focus:outline-none focus:border-[#8A79FD] transition-colors"
                                        style={{ borderColor: '#8A79FD', borderRadius: '30px' }}
                                    />
                                }
                            />
                        </div>
                        <IonButton expand="block" onClick={handleOTPVerification} disabled={otp.length !== 6}>
                            Verify OTP
                        </IonButton>
                        <div className="flex flex-col items-center space-y-2">
                            <p className="text-sm text-gray-500">
                                {isResendDisabled ? `Resend OTP in ${timer}s` : "Didn't receive the OTP?"}
                            </p>
                            <IonButton
                         
                                fill="clear"
                                onClick={handleResendOTP}
                                disabled={isResendDisabled}
                                className={`${isResendDisabled} ? 'opacity-50' : '' capitalize`}
                            >
                                Resend OTP
                            </IonButton>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
