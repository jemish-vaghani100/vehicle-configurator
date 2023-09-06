
import { Navigate, useNavigate } from 'react-router-dom';

export default function Logout ()  {
    const navigate=useNavigate;
    // Add logic to perform logout actions here
    // For example, clearing user data or tokens from localStorage
    // Then, update the loginStatus state to null or "failure"
    sessionStorage.removeItem("username");
    navigate('/');

   
    

  };


