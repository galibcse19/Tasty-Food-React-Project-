 

const AddFood = () => {
    return (
         <div className="bg-green-400 text-white">
            <div className="mx-28 py-24">
                <p className="text-4xl mb-4">Add a Food</p>
                <div className="">
                     <form >
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-4">
                                    <label className="label">
                                        <span className="">Food Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter Food Name" className="input input-bordered w-full" required />
                               </div>  
                               <div className="w-1/2">
                                    <label className="label">
                                        <span className=" ">Available Quantity</span>
                                    </label>
                                    <input type="number" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" required />
                               </div>
                            </div> 
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-4">
                                    <label className="label">
                                        <span className="">Supplier</span>
                                    </label>
                                    <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" required />
                               </div>  
                               <div className="w-1/2">
                                    <label className="label">
                                        <span className=" ">Taste</span>
                                    </label>
                                    <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" required />
                               </div>
                            </div> 
                            <div className="flex mb-4">
                                <div className="w-1/2 mr-4">
                                    <label className="label">
                                        <span className="">Category</span>
                                    </label>
                                    <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" required />
                               </div>  
                               <div className="w-1/2">
                                    <label className="label">
                                        <span className=" ">Details</span>
                                    </label>
                                    <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" required />
                               </div>
                            </div> 
                            <div className="w-full mb-8">
                                    <label className="label">
                                        <span className=" ">Photo URL</span>
                                    </label>
                                    <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
                            </div>
                            <input className="btn btn-block" type="submit" value="ADD COFFEE" />
                    </form>    
                </div>
            </div>
        </div>
    );
};

export default AddFood;