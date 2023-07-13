// import { useRouter } from "next/router";

// import { useEffect, useState } from "react";

// const withAuth = (WrappedComponent) => {
//   const Wrapper = (props) => {
//     const [userObject, setUserObject] = useState({});

//     const router = useRouter();

//     // Perform authentication or authorization check

//     const isAuthenticated = true;

//     useEffect(() => {
//       setUserObject(JSON.parse(localStorage.getItem("my-user")));
//     }, []);

//     useEffect(() => {
//       if (!userObject) {
//         router.push("/signin"); // Redirect to login page if not authenticated
//       }
//     }, [userObject, router]);

//     // Render the wrapped component if authenticated

//     return userObject ? <WrappedComponent {...props} /> : null;
//   };

//   return Wrapper;
// };

// export default withAuth;
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const [userObject, setUserObject] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();

    useEffect(() => {
      const checkAuth = () => {
        const user = JSON.parse(localStorage.getItem("my-user"));
        if (!user) {
          router.push("/signin"); // Redirect to login page if not authenticated
        } else {
        }
        setUserObject(user);
      };

      checkAuth();
    }, [router]);

    // Render the wrapped component if authenticated
    return userObject ? <WrappedComponent {...props} /> : null;
  };

  return Wrapper;
};

export default withAuth;
