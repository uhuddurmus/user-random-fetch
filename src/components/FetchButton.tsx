// components/FetchButton.tsx

import React from "react";
import { Button } from "react-bootstrap";

interface FetchButtonProps {
  handleFetchUser: () => void;
}

const FetchButton: React.FC<FetchButtonProps> = ({ handleFetchUser }) => {
  return (
    <Button variant="primary" onClick={handleFetchUser}>
      Fetch User
    </Button>
  );
};

export default FetchButton;