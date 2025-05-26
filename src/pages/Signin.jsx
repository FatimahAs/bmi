import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from 'react-router'
import { useNavigate } from "react-router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (!storedUser) {
      Swal.fire({
        icon: "error",
        title: "لا يوجد مستخدم مسجل",
        text: "يرجى التسجيل أولاً.",
      });
      return;
    }

	  if (email === storedUser.email && password === storedUser.password) {
		localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      Swal.fire({
    icon: "success",
    title: "تم تسجيل الدخول بنجاح!",
    confirmButtonText: "متابعة",
  }).then(() => {
    navigate("/"); 
  });
    } else {
      Swal.fire({
        icon: "error",
        title: "بيانات غير صحيحة",
        text: "يرجى التحقق من البريد وكلمة المرور.",
      });
    }
  };

  return (
   <div className=" bg-gray-100 flex items-center justify-center p-4">
	<div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
		<h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sign In</h2>
		
		<form  onSubmit={handleLogin} className="space-y-4">
		<div>
			<label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
			<input 
			 type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
			className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
			required
			/>
		</div>

		<div>
			<label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
			<input 
						
		 type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
						required
			
			/>
		</div>

		<div className="flex items-center justify-between">
			<label className="flex items-center">
			<input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
			<span className="ml-2 text-sm text-gray-600">Remember me</span>
			</label>
			<a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
		</div>

		<button type="submit" className="w-full bg-[#272343] hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
			Sign In
		</button>
		</form>

		<div className="mt-6 text-center text-sm text-gray-600">
		Don't have an account? 
		<Link to="/signup" className="text-[#272343] hover:text-indigo-500 font-medium">Sign up</Link>
		</div>
	</div>
	</div>
  );
}
