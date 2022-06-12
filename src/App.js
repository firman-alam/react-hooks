import React from 'react';
import './App.css';
import { useForm } from './useForm';

const App = () => {
  const [value, setValue] = useForm({ email: '', password: '' });
  return (
    <div className="app">
      <input name="email" value={value.email} onChange={setValue} />
      <input name="password" value={value.password} type="password" onChange={setValue} />
    </div>
  );
};

export default App;
