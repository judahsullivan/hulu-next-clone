import request from "../utils/request"

function Nav() {
  return (
    <nav>
        <div className="">
            {Object.entries(request).map(([key,{
                title, url}]) => (
                    <h2 key={}>{title}</h2>
                ))}

        </div>
        

    </nav>
  )
}

export default Nav