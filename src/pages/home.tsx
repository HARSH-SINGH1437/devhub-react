import { fetchGitHubProfile } from "@/api/github";
import { useEffect } from "react";

const Home = () => {

    useEffect(()=>{
    fetchGitHubProfile();
    },[])


    return (
        <div>
            <p>Home page data will populate here</p>
        </div>
    )
}

export default Home;