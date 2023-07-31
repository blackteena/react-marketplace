import React from 'react'
import { useDispatch,useSelector } from 'react-redux';

import {setCategoryId} from '../redux/slices/filterSlice'

export default function Categories(){

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const dispatch=useDispatch()
  const value=useSelector(state=>state.filter.categoryId) 

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => dispatch(setCategoryId(i))} className={value === i ? 'active' : ''}>
            {categoryName}   
          </li>
        ))}
      </ul>
    </div>
  );
};




