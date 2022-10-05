import { useRouter } from "next/router"
import request from "../utils/request"

function Nav() {
const router = useRouter();

  return (
    <div>
    <nav className=" overflow-x-scroll scrollbar-hide scroll-smooth">
        <div className="flex px-18 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 ">
            {Object.entries(request).map(([key,{
                title, url}]) => (
                    <h2 
                    onClick={() => router.push(`/genre=${key}`)}
                    key={key} 
                    className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500'>{title}</h2>
                ))}

        </div>
       
        
        

    </nav>
     <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/2'/>
     </div>
  )
}

export default Nav