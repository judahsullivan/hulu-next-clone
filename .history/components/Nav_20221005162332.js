import request from "../utils/request"

function Nav() {
  return (
    <nav className="relative">
        <div className="flex px-18 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide scroll-smooth">
            {Object.entries(request).map(([key,{
                title, url}]) => (
                    <h2 key={key} className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500'>{title}</h2>
                ))}

        </div>
        <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/2'/>
        
        

    </nav>
  )
}

export default Nav