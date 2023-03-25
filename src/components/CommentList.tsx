import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface CommentProp {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

export function CommentList() {
  const navigate = useNavigate();
  const { postId } = useParams<{ postId: string }>();
  const [comments, setComments] = useState<CommentProp[]>([]);

  useEffect(() => {
    const fetchComment = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      setComments(response.data);
    };
    fetchComment();
  }, [postId]);

  return (
    <div>
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
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <div className="flex ml-4 flex-col mb-16 shadow-sm">
              <h3>Name: {comment.name}</h3>
              <h3>Email: {comment.email}</h3>
              <h3>Body: {comment.body}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
