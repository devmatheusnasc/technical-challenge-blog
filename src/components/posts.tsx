import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  useNavigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { CommentList } from "./CommentList";
import Post from "./post";
import { LoadingSpinner } from "../utils/Loading";

interface PostsType {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export default function Posts() {
  const navigate = useNavigate();
  
  const { data: PostItem, isLoading } = useFetch<PostsType[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const handlePostClick = (postId: number) => {
    navigate(`/posts/${postId}`);
  };

  if (isLoading) {
    <LoadingSpinner text="Carregando seus posts..." />
  }

  return (
    <div className="grid grid-cols-3 gap-4 place-items-start max-lg:grid-cols-2 max-sm:grid-cols-1 max-w-[1230px] w-full mr-6 max-lg:max-w-[700px] max-2xl:max-w-[950px] mx-8">
      {PostItem?.map((post) => {
        return (
          <div key={post.id} onClick={() => handlePostClick(post.id)}>
            <Post title={post.title} body={post.body} />
          </div>
        );
      })}
    </div>
  );
}
