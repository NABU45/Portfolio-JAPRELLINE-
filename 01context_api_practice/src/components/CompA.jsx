import React, { createContext } from 'react'
import CompB from './CompB'
const Data = createContext();
function CompA() {
  return (
    <div>
        <Data.Provider value={'japrelline'}>
         <CompB />
        </Data.Provider>
    </div>
  )
}

export default CompA;
export {Data};
