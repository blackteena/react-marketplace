import React, {useContext} from 'react'
import { useRef } from 'react'

import styles from './Search.module.scss'
import clear from '../../assets/clear.svg' 
import { SearchContext } from '../../App'

const Search = () => {
  const inputRef=useRef();


  const onClickClear=()=>{
    setSearchValue('');
    inputRef.current.focus();
  }

  const {searcValue,setSearchValue}=useContext(SearchContext);

  return (
    <div className={styles.root}>
      <svg className={styles.icon} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9579 10.9565L16.7923 15.7909C17.0692 16.0678 17.0692 16.5155 16.7923 16.7924C16.6542 16.9306 16.4729 17 16.2915 17C16.1101 17 15.9288 16.9306 15.7907 16.7924L10.9564 11.9581C9.7997 12.8945 8.32991 13.4583 6.7291 13.4583C3.01889 13.4583 0 10.4394 0 6.72914C0 3.01889 3.01886 0 6.72907 0C10.4393 0 13.4582 3.01893 13.4582 6.72918C13.4582 8.33 12.8944 9.7998 11.9579 10.9565ZM1.41666 6.72914C1.41666 9.65882 3.79946 12.0416 6.7291 12.0416C9.65872 12.0416 12.0415 9.65882 12.0415 6.72914C12.0415 3.79947 9.65875 1.41664 6.7291 1.41664C3.79946 1.41664 1.41666 3.79947 1.41666 6.72914Z" fill="#5A5A5A" />
      </svg>
      <input ref={inputRef} value={searcValue} onChange={e=>setSearchValue(e.target.value)} className={styles.input} placeholder='Поиск пиццы ...'></input>
      {searcValue&&(
        <img onClick={()=>onClickClear()} className={styles.clearIcon} src={clear}></img>
        )}
    </div>
  ) 
}
 
export default Search 