import request from "../utils/request"

function Nav() {
  return (
    <nav>
        <div>
            {Object.entries(request).map(([key,{
                title, url}]) => {
                    <h2>{</h2>
                })}

        </div>
        

    </nav>
  )
}

export default Nav