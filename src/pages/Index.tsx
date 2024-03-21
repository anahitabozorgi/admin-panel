import { Link } from "react-router-dom";

const Index = () => {
    return(
        <div>
            <h1>Index v2 page</h1>
            <Link to={'/about'}>go to about page</Link>
        </div>
    )
}

export default Index;