import React from "react";
import { useEffect, useState } from "react";
import { Configuration, BlinkyBackEndApi } from "../generated-sources/openapi";
import Spinner from "../components/Spinner/Spinner";
import DeskPage from "./DeskPage";
import LoginForm from "../components/LoginForm/LoginForm";

export const BookingScreen = () => {
  const [user, setUser] = useState<string | undefined>();

  return (
    <div>
      {!user ? (
        <LoginForm setUserName={setUser} />
      ) : (
        <div>{<DeskPage activeUser={user} />} </div>
      )}
    </div>
  );
};
