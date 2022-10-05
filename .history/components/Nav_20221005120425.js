import request from "../utils/request"

function Nav() {
  return (
    <nav>
        <div>
            {Object.entries(request).map(([key,{
                title, url}]) => {
                    <h1></h1></h1>
                })}

        </div>
        

    </nav>
  )
}

export default Nav