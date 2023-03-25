import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import { LoadingSpinner } from "../utils/Loading";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export function UserDate() {
  const [loading, setLoading] = useState(false);
  const [userDate, setUserDate] = useState<User>(null);
  const navigate = useNavigate();

  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
      const fetchUserId = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      setUserDate(response.data);
      setLoading(false);
    };
    fetchUserId();
    setLoading(true);
  }, [userId]);

  return (
    <div className="flex flex-col items-start justify-start">
      <button className="bg-transparent mt-2 ml-2" onClick={() => navigate("/")}>
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.438 18.75 4.688 12l6.75-6.75"></path>
          <path d="M5.625 12h13.688"></path>
        </svg>
      </button>

      {!userDate ? (
        <LoadingSpinner text="Carregando os dados do usuário..." />
      ) : (
        <div className="ml-4">
          <h1 className="text-2xl font-bold py-2">Dados do Usuario:</h1>
          <h2 className="font-bold">
            Nome: <span className="font-normal">{userDate.name}</span>
          </h2>
          <h2 className="font-bold">
            Username: <span className="font-normal">{userDate.username}</span>
          </h2>
          <h2 className="font-bold">
            Email: <span className="font-normal">{userDate.email}</span>
          </h2>
          <h2 className="font-bold">
            Street:{" "}
            <span className="font-normal">{userDate.address.street}</span>
          </h2>
          <h2 className="font-bold">
            Suite: <span className="font-normal">{userDate.address.suite}</span>
          </h2>
          <h2 className="font-bold">
            City: <span className="font-normal">{userDate.address.city}</span>
          </h2>
          <h2 className="font-bold">
            Zipcode:{" "}
            <span className="font-normal">{userDate.address.zipcode}</span>
          </h2>
          <h2 className="font-bold">
            Lat: <span className="font-normal">{userDate.address.geo.lat}</span>
          </h2>
          <h2 className="font-bold">
            Lng: <span className="font-normal">{userDate.address.geo.lng}</span>
          </h2>
          <h2 className="font-bold">
            Phone: <span className="font-normal">{userDate.phone}</span>
          </h2>
          <h2 className="font-bold">
            Website: <span className="font-normal">{userDate.website}</span>
          </h2>
          <h2 className="font-bold">
            Company Name:{" "}
            <span className="font-normal">{userDate.company.name}</span>
          </h2>
          <h2 className="font-bold">
            Company Catch Phrase:{" "}
            <span className="font-normal">{userDate.company.catchPhrase}</span>
          </h2>
          <h2 className="font-bold">
            Company Bs:{" "}
            <span className="font-normal">{userDate.company.bs}</span>
          </h2>
        </div>
      )}
    </div>
  );
}
