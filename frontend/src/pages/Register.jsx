import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
  });

  const { name, email, password, confirmedPassword } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess && user) {
      toast.success('User registered successfully!');
      navigate('/user');
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmedPassword) {
      toast.error('passwords do not match!');
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Enter your name'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Enter password'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='confirmedPassword'
              name='confirmedPassword'
              value={confirmedPassword}
              onChange={onChange}
              placeholder='Confirm password'
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Sign Up</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
