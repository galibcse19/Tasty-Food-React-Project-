import  { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message });
  };

  return (
    <div className="bg-green-400 min-h-screen flex flex-col">
      <main className="container mx-auto mt-10 p-6   shadow-md rounded flex-1">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-6">If you have any questions, please fill out the form below and we will get back to you as soon as possible.</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
                          <div className="lg:flex mb-4 ">
                                <div className="lg:w-1/2 lg:mr-4 sm:w-full">
                                    <label className="label">
                                        <span className="">Name</span>
                                    </label>
                                    <input type="text" name="foodName" placeholder="Enter Your Name" className="input input-bordered w-full" required />
                               </div>  
                               <div className="lg:w-1/2 sm:w-full">
                                    <label className="label">
                                        <span className=" ">Email</span>
                                    </label>
                                    <input type="text" name="quantity" placeholder="Enter Your Email" className="input input-bordered w-full" required />
                               </div>
                            </div> 
           
                         <div>
            <label className='label'>Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder='Type Your Message'
              className="input input-bordered w-full h-40"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div>
            <button className="btn btn-outline bg-emerald-950 text-white px-16 text-lg w-full">Submit</button>
          </div>
        </form>
      </main>
 
    </div>
  );
};

export default Contact;
