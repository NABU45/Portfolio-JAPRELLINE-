import React from 'react'
import {data} from './App'

function ChildC(){
    return(
        <>
        <data.consumer>
            {
                (name)=>{
                    <h1>my name is:{name}</h1>
                }
            }

        </data.consumer>

        </>
    );
}
export default ChildC;