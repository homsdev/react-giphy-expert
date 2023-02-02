import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    /*const onAddCategory = (event) => {
        event.preventDefault();
        if (inputValue.trim() <= 1) return;
        setCategories((categories) => [...categories, inputValue]);
        setInputValue('');
    }*/

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }


    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                placeholder="Search Gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

