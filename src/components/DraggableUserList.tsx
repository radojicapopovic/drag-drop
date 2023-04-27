// src/components/DraggableUserList.tsx
import React, { useState } from "react";
import { DragArea } from "./DragArea";
import { DragItem } from "./DragItem";
import users from "../users.json";

type UserProps = {
  firstName: string;
  lastName: string;
  email: string;
};

const UserItem = ({ firstName, lastName, email }: UserProps) => {
  return (
    <li>
      <span>{firstName} {lastName}</span>
      <span>{email}</span>
    </li>
  );
};

export const DraggableUserList = () => {
  const [exampleUsers, setExampleUsers] = useState(users);

  return (
    <ul>
      <DragArea items={exampleUsers} onChange={setExampleUsers}>
        {exampleUsers.map((user, i) => (
          <DragItem key={i} index={i}>
            <UserItem firstName={user.firstName} lastName={user.lastName} email={user.email} />
          </DragItem>
        ))}
      </DragArea>
    </ul>
  );
};
