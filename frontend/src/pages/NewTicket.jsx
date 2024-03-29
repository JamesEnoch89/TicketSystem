import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createTicket, reset } from '../features/tickets/ticketSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

function NewTicket(props) {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tickets
  );
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState('iPhone');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
      navigate('/tickets');
    }

    dispatch(reset());
  }, [dispatch, navigate, isError, isSuccess, message]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTicket({ product, description }));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton url='/'></BackButton>
      <section className='heading'>
        <h1>Create a New Ticket!</h1>
        <p>Please fill out the form below</p>
      </section>
      <form onSubmit={onSubmit}>
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
      </form>
    </>
  );
}

export default NewTicket;
