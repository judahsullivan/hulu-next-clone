import { m } from "framer-motion"




function HeaderItems({Icon, title}) {

  
  return (
    <div className="flex flex-col items-center cursor-pointer ease-in-out duration-100 group w-12 md:w-20 hover:text-white hover:animate-bounce">
        <Icon
        className='h-8 mb-1 '/>
        <p className=' opacity-0 tracking-widest group-hover:opacity-100'>{title}</p>
    </div>

  )
}

export default HeaderItems