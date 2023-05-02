import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [catagories, setCatagories] = useState([])

    useEffect(() =>{
        fetch ('https://the-news-dragon-server-ruhan-ia.vercel.app/category')
        .then(res => res.json())
        .then(data=> setCatagories(data))
        .catch(error => console.log(error.message))
    }, [])
    return (
        <div>
           <h4>All Catagories</h4>
           <div className='ps-4'>
           {
            catagories.map(category => <p key={category.id}>
                <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>

            </p>)
           }
           </div>
        </div>
    );
};

export default LeftNav;