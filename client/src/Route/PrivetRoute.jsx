import Loading from "../components/Loading";
import { useAuth } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate state={{ from: location }} replace to="/signin"></Navigate>;
  }
  return <>{children}</>;
};

export default PrivetRoute;
