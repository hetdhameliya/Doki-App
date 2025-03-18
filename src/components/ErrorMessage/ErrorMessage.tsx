import { IonText } from "@ionic/react";

interface ErrorMessageProps {
  message?: string | undefined  ;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null;
  
  return (
    <IonText 
      color="danger" 
      className="block text-[13px] font-medium text-red-500 mt-1 ml-1"
    >
      {message}
    </IonText>
  );
};
