import React, { useState, useEffect } from "react";
import axios from "axios";
import { User } from "./user";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { List } from "@phosphor-icons/react";

interface UserProps {
  name: string;
  id: number;
}

export function Users() {
  const [isBurguer, setIsBurger] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const navigate = useNavigate();

  const { data: userDate, isLoading } = useFetch<UserProps[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  const handleSelectedUser = (userId: number) => {
    setSelectedUserId(userId);
    navigate(`/users/${userId}`);
  };

  return (
    <div>
      <button
        className="absolute top-2 right-4 md:hidden"
        onClick={() => setIsBurger(!isBurguer)}
      >
        <List size={24} />
      </button>
      {isBurguer && (
        <nav className="flex flex-col gap-4 justify-start items-end absolute right-0 pr-4 pt-4 top-12 bg-zinc-900 w-full h-screen z-20">
          {userDate?.map((item) => {
            const isActive = item.id === selectedUserId;
            return (
              <div key={item.id} onClick={() => handleSelectedUser(item.id)}>
                <User name={item.name} isActive={isActive} />
              </div>
            );
          })}
        </nav>
      )}
      <div className="max-w-54 h-screen mt-4 flex flex-col pl-8 items-start justify-start gap-4 max-[768px]:hidden">
        <span className="font-bold">Usuarios:</span>
        {userDate?.map((item) => {
          const isActive = item.id === selectedUserId;
          return (
            <div key={item.id} onClick={() => handleSelectedUser(item.id)}>
              <User name={item.name} isActive={isActive} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
