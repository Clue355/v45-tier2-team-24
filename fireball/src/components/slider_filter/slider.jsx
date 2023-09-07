import { Slider } from '@mui/material';
import { useState } from 'react';

function SliderFilter({handleChange, value}) {

  return (
    <div className="w-11/1 p-3 flex flex-col justify-center ">
        <p className="text-center w-full">Mass Range in kg</p>
        <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value} 
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={992.5}
        max={100000} 
        />
    </div>
  );
}

export default SliderFilter;