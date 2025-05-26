import { useState, useEffect } from "react";
import { useNavigate } from "react-router"; 

function Bmi() {
	
const navigate = useNavigate();
	
	const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");
  const [idealWeight, setIdealWeight] = useState(null);
	const [image, setImage] = useState("");
	
  

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "غير مصرح",
        text: "يرجى تسجيل الدخول أولًا",
      }).then(() => {
        navigate("/login");
      });
    }
  }, []);
  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      alert("يرجى إدخال قيم صحيحة للطول والوزن");
      return;
    }

    const bmiValue = (w / (h * h)).toFixed(1);
    setBmi(bmiValue);

    const ideal = (22 * h * h).toFixed(1);
    setIdealWeight(ideal);

    let s = "";
    let img = "";
    if (bmiValue < 18.5) {
      s = "نقص في الوزن";
      img = "/thin.png";
    } else if (bmiValue < 25) {
      s = "وزن مثالي";
      img = "/thin1.png";
    } else if (bmiValue < 30) {
      s = "زيادة في الوزن";
      img = "/thin2.png";
    } else {
      s = "سمنة";
      img = "/fatcat.png";
    }

    setStatus(s);
    setImage(img);
  };
  return (
	 <div className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4 mt-8 text-center">
      <h1 className="text-2xl font-bold mb-4">حاسبة كتلة الجسم (BMI)</h1>

      <input
        type="number"
        placeholder="الوزن بالكيلوجرام"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <input
        type="number"
        placeholder="الطول بالسنتيمتر"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <button
        onClick={calculateBMI}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        حساب
      </button>

     {bmi && (
  <div className="mt-6 grid grid-cols-2 gap-4">
    <div className="bg-blue-100 border border-blue-300 rounded-xl p-4 shadow-md">
      <h3 className="text-lg font-semibold text-blue-800"> كتلة الجسم</h3>
      <p className="text-2xl font-bold text-blue-900">{bmi}</p>
    </div>

    <div className="bg-green-100 border border-green-300 rounded-xl p-4 shadow-md">
      <h3 className="text-lg font-semibold text-green-800"> التصنيف</h3>
      <p className="text-xl font-bold text-green-900">{status}</p>
    </div>

    <div className="bg-yellow-100 border border-yellow-300 rounded-xl p-4 shadow-md">
      <h3 className="text-lg font-semibold text-yellow-800">الوزن المثالي</h3>
      <p className="text-xl font-bold text-yellow-900">{idealWeight} كجم</p>
    </div>

    <div className="bg-gray-100 border border-gray-300 rounded-xl p-4 shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-2"> شكل الجسم المتوقع</h3>
      <img
        src={image}
        alt="شكل الجسم"
        className="mx-auto w-40 h-40 object-contain"
      />
    </div>
  </div>
)}

    </div>
  )
}

export default Bmi;
