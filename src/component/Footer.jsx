import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#bae8e8] text-gray-200 py-8 mt-3 pb-12">
      <div className="text-center">
  
        <h2 className="text-2xl font-bold text-[#2d334a]">BMI </h2>

    
        <div className="w-24 h-1 bg-[#eac704] mx-auto my-4 rounded"></div>

      
        <p className="text-sm text-[#272343]">© {new Date().getFullYear()} جميع الحقوق محفوظة</p>

   
        <div className="mt-4 flex justify-center space-x-6">
         <Facebook color="#eac704" size={20} className="hover:text-white" />
          <Twitter color="#eac704" size={20} className="hover:text-white"/>
        <Instagram color="#eac704" size={20} className="hover:text-white"/>
        </div>
      </div>
    </footer>
  );
}
