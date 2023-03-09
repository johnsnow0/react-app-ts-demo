import React, { useState } from 'react'
import { Istate as Props } from '../App'

interface IProps {
    people: Props['people']
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        name: '',
        age: '',
        image: '',
        notes: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (!input.name ||
            !input.age ||
            !input.image
        ) {
            return
        }
        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.image,
                note: input.notes
            }
        ]);

        setInput({
            name: '',
            age: '',
            image: '',
            notes: '',
        })
    }


    return (
        <div className='AddToList'>
            <input
                type="text"
                placeholder='name'
                className='AddToList-input'
                value={input.name}
                onChange={handleChange}
                name='name'
            />

            <input
                type="text"
                placeholder='age'
                className='AddToList-input'
                value={input.age}
                onChange={handleChange}
                name='age' />

            <input
                type="text"
                placeholder='image url'
                className='AddToList-input'
                value={input.image}
                onChange={handleChange}
                name='image' />

            <textarea
                placeholder='notes'
                className='AddToList-input'
                value={input.notes}
                onChange={handleChange}
                name='notes' />

            <button className='AddToList-btn'
                onClick={handleClick}>Add to list</button>
        </div>
    )
}

export default AddToList