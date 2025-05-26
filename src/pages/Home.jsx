import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      navigate("/bmi");
    } else {
      Swal.fire({
        icon: "warning",
        title: "يجب تسجيل الدخول",
        text: "يرجى تسجيل الدخول أولًا للوصول إلى حاسبة الكتلة",
        confirmButtonText: "حسنًا",
      });
    }
  };

	return (
		
			
	 
	  <div className="flex flex-col justify-center items-center h-screen   text-center">
		  <img src="/body-mass.png" className="w-40 h-40 mb-5"/>
      <h1 className="text-3xl  font-medium text-gray-700 mb-4">مرحبًا بك في حاسبة كتلة الجسم</h1>
      <p className="text-gray-700 mb-8">اكتشف حالتك الصحية بناءً على طولك ووزنك</p>
      <button
        onClick={handleStart}
        className="bg-[#eac704] hover:bg-blue-700 text-white py-2 px-6 rounded text-lg transition"
      >
        START
      </button>
    </div>
		
  );
}
