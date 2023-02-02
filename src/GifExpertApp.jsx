import { useState } from 'react';
import { AddCategory } from './components';
import { GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (value) => {
        if (categories.includes(value)) return;
        setCategories([...categories, value]);
    }

    return (
        <>
            <h1>Gift Expert App</h1>
            <AddCategory onNewCategory={(value) => onAddCategory(value)}></AddCategory>

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }

        </>
    )
}



