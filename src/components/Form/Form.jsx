import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        phone: '',
      });
    
    const [message,setMessage]=useState('')
    const handleName=(event)=>{
              const name=event.target.value;
              if(!name){
                setMessage('Name is required!')
              }
    }
    const handlePhone=(event)=>{
        const phone=event.target.value;
        if(!phone){
            setMessage('Phone number is required!')
        }
    }
    const handleEmail=(event)=>{
        const email=event.target.value;
        if(!email){
            setMessage('Email is required!')
        }
    }
    const handleInputChange=event=>{
        const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    }
    const handleSubmit=event=>{
        const form =event.target;
        const name=form.name.value;
        const email=form.email.value;
        const phone=form.phone.value;
        if(!name || !email ||!phone || !formData.gender){
            alert('All fields are required!');
            return;
        }
    }
    return (
        <div>
            <form style={{width:"80%"}} onSubmit={handleSubmit}>
  <div class="form-group">
   <div className="d-flex"> <label for="exampleInputEmail1">Name:</label><p className='text-danger'><sup>*</sup>required</p></div>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" name='name' onKeyUp={handleName} onChange={handleInputChange}/>
    <p className='text-danger'>{message}</p>
    
  </div>
  <br /><br />
  <div class="form-group">
   <div className="d-flex"> <label for="exampleInputPassword1">Email:</label><p className='text-danger'><sup>*</sup>required</p></div>
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Enter Your Email" name='email' onKeyUp={handleEmail} onChange={handleInputChange}/>
    <p className='text-danger'>{message}</p>
  </div><br /><br />
  <div className="d-flex"><label htmlFor="">Gender:</label><p className='text-danger'><sup>*</sup>required</p></div>
  <br />
  <div class="input-group">
   
  <select class="form-select" id="inputGroupSelect04" onChange={handleInputChange} vlaue={formData.gender}>
    <option selected value="">Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Others">Others</option>
  </select>
  
</div><br /><br />
<div class="form-group">
    <div className="d-flex"><label for="exampleInputEmail1">Phone Number:</label><p className='text-danger'><sup>*</sup>required</p></div>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Phone Number" name='phone' onKeyUp={handlePhone} onChange={handleInputChange}/>
    <p className='text-danger'>{message}</p>
    
  </div><br /><br />
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    );
};

export default Form;