// components/NoDataMessage.tsx

import React from "react";

const NoDataMessage: React.FC = () => {
  return (
    <p className="text-center text-muted mt-4 bg-white card bg-opacity-75">
      Please press the "Fetch User" button to get random user data.
    </p>
  );
};

export default NoDataMessage;
