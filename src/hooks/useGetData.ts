import {useState, useEffect} from 'react'
import { TaskDate } from '../components/TodoApp/data/data';

function useGetData(){
  const [ taskList, setTaskList ] = useState(TaskDate);
  const [theme, setTheme] = useState('light')

  const handdleDelete = (taskName: string) => {
		const newTaskList = taskList.filter((e) => {
			const { name } = e;
			if (taskName != name) return e;
			return;
		});
		setTaskList(newTaskList);
	};

	const handdleClearComplete = () => {
		const newTaskList = taskList.filter((e) => {
			const { complete } = e;

			if (complete) return;
			return e;
		});
		setTaskList(newTaskList);
	};

	const handdleAddTask = (task: any) => {
    setTaskList(() => [ ...taskList, task ]);
	};

  const handdleChangeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')  
  }

	const handdleActive = () => {
		const newArray = taskList.filter( e => {
			const {complete} = e 
			if(complete) return
			return e
		})
		setTaskList(newArray)
	}
  
	const handdleFilterComplete = () => {
		const newArray = taskList.filter( e => {
			const {complete} = e 
			if(complete) return e
			return 
		})
		setTaskList(newArray)
	}
	useEffect(()=>{
    const body = document.body
    theme === 'dark' ? body.classList.add('dark') : body.removeAttribute('class')
  },[theme])
	

  return {taskList, theme,setTaskList, handdleChangeTheme, handdleAddTask, handdleClearComplete, handdleDelete, handdleActive, handdleFilterComplete}
}

export default useGetData