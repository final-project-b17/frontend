import { FiLogIn } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <>
         <nav className="container mx-auto bg-indigo-600 py-4">
            <div className="flex justify-around">
               <div className="flex gap-28">
                  <img src="../../src/assets/no bg putih.png" alt="logo_belajar" className="w-16 h-16" />
                  <form action="search" className="font-poppins flex">
                     <input
                        className="border-none py-6 px-10 rounded-s-2xl bg-white text-sm w-96"
                        placeholder="Cari kursus terbaik..."
                        type="text"
                        name="search"
                     />
                     <div className=" bg-white rounded-e-2xl flex items-center px-4">
                        <BiSearchAlt type="submit" className="border bg-indigo-600 text-white w-10 h-10 rounded-xl py-1 cursor-pointer" />
                     </div>
                  </form>
               </div>
               <Link as={Link} to={'/'} className="flex items-center gap-2 font-poppins text-white font-medium text-xl hover:text-green-500 cursor-pointer">
                  <div>
                     <FiLogIn className="w-8 h-8" />
                  </div>
                  <div>
                     <p>Masuk</p>
                  </div>
               </Link>
            </div>
         </nav>
      </>
   )
}

export default Navbar;