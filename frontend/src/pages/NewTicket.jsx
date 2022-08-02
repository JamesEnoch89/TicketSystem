import { useState } from 'react';
import { useSelector } from 'react-redux';

function NewTicket(props) {
  const { user } = useSelector((state) => state.auth);
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState('iPhone');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className='heading'>
        <h1>Create a New Ticket!</h1>
        <p>Please fill out the form below</p>
      </section>

      <section className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Customer Name</label>
          <input
            value={name}
            type='text'
            className='form-control'
            disabled></input>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Customer Email</label>
          <input
            value={email}
            type='text'
            className='form-control'
            disabled></input>
        </div>
        <form onSubmit={onSubmit}></form>
        <div className='form-group'>
          <label htmlFor='product'>Customer Product</label>
          <select
            name='product'
            id='product'
            value={product}
            onChange={(e) => setProduct(e.target.value)}>
            <option value='iPhone'>iPhone</option>
            <option value='MacBook Pro'>MacBook Pro</option>
            <option value='MacBook Air'>MacBook Air</option>
            <option value='iPad'>iPad</option>
            <option value='iMac'>iMac</option>
            <option value='Apple Watch'>Apple Watch</option>
            <option value='AirPods'>AirPods</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Describe the issue</label>
          <textarea
            name='description'
            id='description'
            placeholder='Description'
            className='form-control'
            value={description}
            onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div className='form-group'>
          <button className='btn btn-block'>Submit</button>
        </div>
      </section>
    </>
  );
}

export default NewTicket;
