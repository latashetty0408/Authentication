import { Search } from "lucide-react"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [name, setName] = useState()
  const navigate = useNavigate()
  
  const getData = () => {
    let userData = sessionStorage.getItem('userData');
    console.dir(userData, {depth:10});
    if(!userData) {
      navigate('/login')
      return;
    }
    userData = JSON.parse(userData);
    setName(`${userData.firstName} ${userData.lastName}`);
  } 
  useEffect(()=> {
    getData()
  },[name])
  return (
    <header className="flex justify-between items-center mb-8 md:flex-row flex-col">
      <div>
      <h1 className="text-2xl font-bold text-gray-900">Hi, {name}</h1>
      <h1 className="text-2xl font-bold text-gray-900">Welcome to Venus!</h1>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </header>
  )
}

