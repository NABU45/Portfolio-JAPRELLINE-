import React, { useContext } from 'react';
import { Data } from './CompA';

function CompC() {
    const user = useContext(Data)
  return (
    <div>
      hello compc {user}
    </div>
  )
}

export default CompC
