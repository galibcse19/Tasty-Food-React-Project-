 
import { useLoaderData } from "react-router-dom";
import FoodCard from "./FoodCard";
import { useEffect, useState } from "react";

const Card = () => {
    const loaderFood= useLoaderData();
    const [itemsPerPage,setItemsPerPage]= useState(9);
    const [currentPage,setCurrentPage] = useState(0);
    const [foods,setFoods]= useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/food?page=${currentPage}&size=${itemsPerPage}`)
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [currentPage,itemsPerPage]);
     
    const count = loaderFood.length;
    console.log(count);
    const numberOfPages = Math.ceil(count/itemsPerPage);

    // const pages = []
    // for(let i=0; i<numberOfPages; i++){
    //     pages.push(i)
    // }
    const pages= [...Array(numberOfPages).keys()];
    console.log(pages);

    const handleItemsPerPage= e =>{
        const val= parseInt(e.target.value);
        setItemsPerPage(val)
        setCurrentPage(0)
    }
    const handlePreviousPage =()=>{
        if(currentPage>0){
            setCurrentPage(currentPage-1)
        }
    }
    const handleNextPage=()=>{
        if(currentPage<numberOfPages-1){
            setCurrentPage(currentPage+1)
        }
    }

    return (
        <div className="pb-10 bg-emerald-950">
            <div className="text-3xl text-center py-6">
            Food delivery from Jashore’s <br /> best restaurants.
            </div>
            <div className=" pb-6 text-xl text-center">Total Restaruant in Jashoe: {count}</div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 lg:mx-10">
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
             <div className="text-center my-10">
                {/* <p className="pb-4">Current Page: {currentPage}</p> */}
                <button onClick={handlePreviousPage} className="btn btn-outline hover:bg-white mr-4">Prev</button>
                {
                    pages.map(page=><button 
                        onClick={()=> setCurrentPage(page)}
                        key={page}  className={(currentPage === page && `bg-white btn btn-outline mr-4 hover:bg-white`) || `btn btn-outline mr-4 hover:bg-white`}>{page+1}</button>)
                }
                <button onClick={handleNextPage} className="btn btn-outline hover:bg-white mr-4">Next</button>
                <select value={itemsPerPage} onChange={handleItemsPerPage} className="w-10 h-12 rounded-md" name="" id="">
                    <option value="6">6</option>
                    <option value="9">9</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                    <option value="18">18</option>
                    <option value="30">30</option>
                    <option value="60">60</option>

                </select>
             </div>
        </div>
    );
};

export default Card;