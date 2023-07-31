import React from 'react'

import styles from './NotFoundBlock.module.scss'

const NotFound = () => {
  return (
    <div className={styles.not_found}>  
      <h1>
        Извините по данному запросу ничего не найдено
      </h1>
      <p className={styles.text}>
        К сожалению данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  )
}

export default NotFound