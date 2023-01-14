import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '200px',
                margin: '5px 10px',
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    border: '1px solid #00CC22',
                    outline: '5px solid white',
                    outlineOffset: '-7px',
                },
                '& .MuiSlider-rail': {
                    color: '#8B8B8B'
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
