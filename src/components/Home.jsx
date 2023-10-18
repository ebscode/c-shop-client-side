import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import { useState } from "react";


const Home = () => {
    const Loader=useLoaderData()
    const [visible,setvisible]=useState(Loader.slice(0,4))
    // const [coffee,setcoffee]=useState(Loader)
    const handleshow=()=>{
        if(Loader.length>4){
            setvisible(Loader)
        }
    }

    return (
        <div >
<div className="grid grid-cols-3 gap-4">
{
    visible.map(get=><Product key={get._id} loader={get} coffee={visible} setvisible={setvisible} ></Product>)
    
    

}
</div>

<div>
<button onClick={handleshow} className="btn btn-primary">show all </button>
</div>

        </div>
        
    );
};

export default Home;