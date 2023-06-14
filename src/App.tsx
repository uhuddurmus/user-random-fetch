// App.tsx

import "./App.css";
import { useAppDispatch, useAppSelector } from "./Redux/store";
import { clearUser, fetchUser } from "./Redux/features/userSlice";
import UserCard from "./components/UserCard";
import LoadingSpinner from "./components/LoadingSpinner";
import FetchButton from "./components/FetchButton";
import NoDataMessage from "./components/NoDataMessage";
import { Container } from "react-bootstrap";

function App() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);
  const currentUser = user.data && user.data.results[0];

  const handleFetchUser = () => {
    dispatch(clearUser());
    dispatch(fetchUser());
  };

  return (
    <Container fluid className="app-container d-flex justify-content-center align-items-center">
      <div className="background-image"></div>

      <div className="content">
        <FetchButton handleFetchUser={handleFetchUser} />

        {!user.data && !user.loading && <NoDataMessage />}

        {user.loading && <LoadingSpinner />}

        {user.error && <p>{user.error}</p>}

        {user.data && <UserCard currentUser={currentUser} />}
      </div>
    </Container>
  );
}

export default App;
