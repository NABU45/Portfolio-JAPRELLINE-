import React from 'react'
import UserCommentContext from './UserCommentContext';
import { Children } from 'react';

const UserCommentProvider=({children}) =>{
    const [comment, setComment]=React.useState(null);

    return(
        <UserCommentContext.Provider value={{comment, setComment}}>
            {children}
        </UserCommentContext.Provider>
    );
}
export default UserCommentProvider