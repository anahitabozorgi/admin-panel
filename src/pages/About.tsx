import { useEffect } from "react";
import { Link,useSearchParams } from "react-router-dom";

const About = () => {
    const [searchParams, setSearchParams]= useSearchParams()
    useEffect(()=>{
       console.log(searchParams.get("msg")) 
    }, [])
    return(
        <div>
            <h1>About page</h1>
            <Link to={'/'}><h1>go to home page</h1></Link>
            <h2>{searchParams.get("msg")}</h2>
            

        </div>
    )
}

export default About;