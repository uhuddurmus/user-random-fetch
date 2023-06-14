// components/UserCard.tsx

import React from "react";
import { Card } from "react-bootstrap";

interface UserCardProps {
  currentUser: any;
}

const UserCard: React.FC<UserCardProps> = ({ currentUser }) => {
  return (
    <Card className="mt-4 bg-white bg-opacity-75" style={{ width: "25rem" }}>
      <div className="text-center">
        <Card.Img
          variant="top"
          src={currentUser?.picture.large}
          alt="User Image"
          className="img-fluid img-thumbnail w-75 text-center"
        />
      </div>
      <Card.Body>
        <Card.Title>
          Name: {currentUser?.name.title} {currentUser?.name.first} {currentUser?.name.last}
          <hr />
        </Card.Title>
        <Card.Text>
          <div className="info-row">
            <span className="info-label">Email:</span> {currentUser?.email}
          </div>
          <hr />
          <div className="info-row">
            <span className="info-label">Date of Birth:</span> {currentUser?.dob.date}
          </div>
          <hr />

          <div className="info-row">
            <span className="info-label">Phone:</span> {currentUser?.phone}
          </div>
          <hr />

          <div className="info-row">
            <span className="info-label">Location:</span>{" "}
            {currentUser?.location.street.number} {currentUser?.location.street.name},{" "}
            {currentUser?.location.city}, {currentUser?.location.state},{" "}
            {currentUser?.location.country},{currentUser?.location.postcode}
          </div>
          <hr />

          <div className="info-row">
            <span className="info-label">Timezone:</span>{" "}
            {currentUser?.location.timezone.offset} {currentUser?.location.timezone.description}
          </div>
          <hr />

          <div className="info-row">
            <span className="info-label">Nationality:</span> {currentUser?.nat}
          </div>
          <hr />

          <div className="info-row">
            <span className="info-label">ID:</span> {currentUser?.id.name} - {currentUser?.id.value}
          </div>
          <hr />

          <div className="info-row">
            <span className="info-label">Registered:</span> {currentUser?.registered.date}
          </div>
          <hr />

          <div className="info-row">
            <span className="info-label">Cell:</span> {currentUser?.cell}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
