// import dynamic from 'next/dynamic'
// import React from 'react'

// const NoSsr = props => <>{props.children}</>

// export default dynamic(() => Promise.resolve(NoSsr), {})
// ssr:false

// import { useEffect } from 'react';
import { useState, useEffect } from 'react';


const NoSsr = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted ? children : null;
};

export default NoSsr;
