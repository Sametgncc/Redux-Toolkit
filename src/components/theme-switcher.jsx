import React from 'react'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setMode } from '../store/slices/theme-slice';

const ThemeSwitcher = () => {

  const mode = useSelector((state) => state.theme.mode);

  const dispatch = useDispatch();

  const handleChange = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    dispatch(setMode(newMode));
  }

  return (
    <Form.Check 
        type="switch"
        id="themeSwitcher"
        label={mode === 'light' ? 'Dark' : 'Light'}
        onClick={handleChange}
      />
  )
}

export default ThemeSwitcher
