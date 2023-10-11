import React, { useEffect, useState } from 'react';

const Form = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
       fetch('http://localhost:3000/users').then(res=>res.json()).then(data=>setData(data))
    },[])
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        phone: '',
      });
      const validateEmail = (data) => {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return data.match(validRegex) !== null;
      };
      
      const validatePhone = (data) => {
        const validRegex = /^\+?(88)?0?1[3456789][0-9]{8}\b/;
        return data.match(validRegex) !== null;
      };
    
    const [message,setMessage]=useState('')
 
  
  
    const handleInputChange=event=>{
        const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    }
    const saveDataToJSON=async (data)=>{
        try {
            const response = await fetch('http://localhost:3000/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
      
            if (response.ok) {
              alert('Data saved successfully!');
            } else {
              alert('Error saving data.');
            }
          } catch (error) {
            console.error('Error:', error);
          }
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
       
        const form =event.target;
        const name=form.name.value;
        const email=form.email.value;
        const phone=form.phone.value;
        if (data.some((item) => item.email === email)) {
            alert('Email already exists!');
            return;
          }
        
        if (!validateEmail(email) ) {
            alert('Please enter valid email ');
            return;
          }
          if( !validatePhone(phone)){
            alert('Please enter valid phone number!');
            return;
          }
        if(!name || !email ||!phone || !formData.gender){
            alert('All fields are required!');
            return;
        }
        else{
            
            const newData = { ...formData, id: new Date().getTime() }; 
             saveDataToJSON(newData);
             form.reset();
        }
       
         
       
    }
    
    return (
        <div>
            <form style={{width:"80%"}} onSubmit={handleSubmit}>
  <div class="form-group">
   <div className="d-flex"> <label for="exampleInputEmail1">Name:</label><p className='text-danger'><sup>*</sup>required</p></div>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" name='name'  onChange={handleInputChange}/>
    <p className='text-danger'>{message==="Name is required!"? message:''}</p>
    
  </div>
  <br /><br />
  <div class="form-group">
   <div className="d-flex"> <label for="exampleInputPassword1">Email:</label><p className='text-danger'><sup>*</sup>required</p></div>
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Enter Your Email" name='email'  onChange={handleInputChange} />
    <p className='text-danger'>{message==="Email is required!"? message:''||message==="Invalid email address!"?message:''|| message==='Email already exists!'?message:''}</p>
  </div><br /><br />
  <div className="d-flex"><label htmlFor="">Gender:</label><p className='text-danger'><sup>*</sup>required</p></div>
  <br />
  <div class="input-group">
   
  <select class="form-select" id="inputGroupSelect04" name='gender' onChange={handleInputChange} vlaue={formData.gender}>
    <option selected value="">Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Others">Others</option>
  </select>
  
</div><br /><br />
<div class="form-group">
    <div className="d-flex"><label for="exampleInputEmail1">Phone Number:</label><p className='text-danger'><sup>*</sup>required</p></div>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Phone Number" name='phone' onChange={handleInputChange}   />
    <p className='text-danger'>{message==="Phone number is required!"? message:''|| message==="Invalid Phone number!"?message:''}</p>
    
  </div><br /><br />
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    );
};

export default Form;