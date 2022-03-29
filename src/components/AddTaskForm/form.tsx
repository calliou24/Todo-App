import { useEffect, useState } from 'react'
import styles from './form.module.css'
import check from '../../assets/images/icon-check.svg'
import { CheckIcon } from '@chakra-ui/icons'

function Form({handdleAdd}:FormTypes) {
  
  const [inputValue, setInputValue] = useState('')
  const [complete, setComplete] = useState(false)
  const [task, setTask] = useState({})
  
  useEffect(()=> {
    setTask({
      name : inputValue,
      complete : complete
    })

  }, [inputValue, complete])

  const handdleSubmit = (e:any) => {
    e.preventDefault()
    handdleAdd(task)
    setInputValue('')
  }

  return (
    <form onSubmit={( e )=> handdleSubmit(e)} className={styles.form}>
      <div id={complete ? styles.taskComplete : undefined} onClick={()=> setComplete(!complete)} className={styles.completeTask}>
        {complete && <img className={styles.check} src={check} alt='check icon'/>}
      </div>
      <input className={styles.input} value={inputValue} onChange={(e)=> setInputValue(e.target.value)} placeholder='Create a new todo'></input>
      <div onClick={handdleSubmit} className={styles.checkIconCont}>
        <CheckIcon className={styles.icon}/>
      </div>
  </form>
  )
}

export default Form

type FormTypes = {
  handdleAdd: any
}