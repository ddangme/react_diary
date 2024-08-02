import {useSearchParams} from "react-router-dom";

const Home = () => {
    const [params, setParams] = useSearchParams();

    return (
        <div>
            Home -
            {params.get("value")}
        </div>
    );
}

export default Home;