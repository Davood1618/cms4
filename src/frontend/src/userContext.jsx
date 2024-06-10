import React, { useState } from 'react'
import { createContext } from 'react'

export const userContext = createContext()

const UsernameProvider = ({children}) => {

  const [newvar, editvar]=useState('karim');
  const [newvar2, editvar2]=useState('rahim');


  const cotnextValues={
    newvar,editvar ,newvar2,editvar2
  }
  return(

   <userContext.Provider value={cotnextValues}>

    {children}

  </userContext.Provider>

  )

}

export default UsernameProvider