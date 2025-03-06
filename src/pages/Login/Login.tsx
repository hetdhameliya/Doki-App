import { IonButton, IonInput } from '@ionic/react'
import React from 'react'

export default function Login() {
  return (
    <div className='flex flex-col  justify-center h-full w-full p-[30px] space-y-[20px] '>

      <div>
        <span className='text-[24px] primary font-[700]'>My...</span>
      </div>
      <div>
        <IonInput label="Email" labelPlacement="floating" fill="outline" placeholder="Enter Your Email"></IonInput>

      </div>

      <div>
        <IonInput
          label="Password"
          labelPlacement="floating"
          fill="outline"
          placeholder="Enter Your Password"
          type="password"
          clearOnEdit={false}
        />

      </div>
      <IonButton expand="block">Login</IonButton>

    </div>
  )
}
