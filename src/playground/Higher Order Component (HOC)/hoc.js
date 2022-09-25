
// Higher Order Component (HOC) -- A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract class

import React from "react";
import ReactDOM from 'react-dom';

// regular component
const Info = (props) => (
    <div>
    <h1>INFO</h1>
    <p>This info is: {props.info}</p>
    </div>
)

// HOC component
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
       {props.isAdmin &&  <p>This is private info. Please don't share!</p>}
        <WrappedComponent {...props}/>
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);

// challenge ex 2 authorization

//HOC requireAuthentication
const requireAuthentication = (WrappedComponent) => {
    // return (props) => (
    //     <div>
    //     {!props.isAuthenticated && <p>Please Login to view the Info</p>}
    //     <WrappedComponent {...props} />
    //     </div>
    // )
    return (props) => (
        <div>
        {props.isAuthenticated ? (
            <WrappedComponent {...props} />
        ) : (<p>Please Login to view the Info</p>)}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="main file test" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="AUTHENICATION" />, document.getElementById('app'))