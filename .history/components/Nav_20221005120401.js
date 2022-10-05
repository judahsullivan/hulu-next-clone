import request from "../utils/request"

function Nav() {
  return (
    <nav>
        <div>
            {Object.entries(request).map(([key,{
                title, url
            }]))}

        </div>
        

    </nav>
  )
}

export default Nav