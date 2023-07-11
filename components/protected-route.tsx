import { useRouter } from "next/router";
import { useEffect } from "react";
import { isAuthenticated } from "../utils/auth";

const ProtectedRoute = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const Wrapper: React.FC<P> = (props) => {
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        router.push("/signin");
      }
    }, []);

    return isAuthenticated() ? <WrappedComponent {...props} /> : null;
  };

  return Wrapper;
};

export default ProtectedRoute;
