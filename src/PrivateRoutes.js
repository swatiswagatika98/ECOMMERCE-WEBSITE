import React from 'react';


export default function PrivateRoutes({ component: Component, alt:Alt, user, portal, setPortal}) {

  if (user) {
   return <Component portal={portal} setPortal={setPortal}/>;
  }else{
    return <Alt/>
  }
}