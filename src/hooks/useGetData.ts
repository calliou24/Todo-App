import { useState, useEffect } from 'react';
import { TaskData } from '../components/TodoApp/data/data';
import { toast } from 'react-toastify';

function useGetData() {
	const [ theme, setTheme ] = useState('light');
	const [ taskList, setTaskList ] = useState(TaskData);
	const [ visibleTasks, setVisibleTasks ] = useState(taskList);

	useEffect(
		() => {
			setVisibleTasks(taskList);
		},
		[ taskList ]
	);

	const handdleDelete = (taskName: string) => {
		const newTaskList = taskList.filter((e) => {
			const { name } = e;
			if (taskName != name) return e;
			return;
		});
		setTaskList(newTaskList);
	};

	const handdleComplete = (taskName: string) => {

		console.log('This function is temporaly unavailable :c')

	};

	const handdleClearComplete = () => {
		setTaskList(
			taskList.filter((e) => {
				const { complete } = e;
				if (complete) return;
				return e;
			})
		);
	};

	const handdleAddTask = (task: any) => {
		const { name } = task;
		const taskName = name.toUpperCase().trim();
		if (taskName.length < 2) return '';
		for (let i = 0; i < taskList.length; i++) {
			if (taskList[i].name.toUpperCase().trim() === taskName) {
				return toast.warn('The task already exist');
			}
		}
		return setTaskList(() => [ ...taskList, task ]);
	};

	const handdleFilter = (filter = 'all') => {
		const activeTask = taskList.filter((e) => {
			const { complete } = e;
			if (complete) return;
			return e;
		});
		const completedTask = taskList.filter((e) => {
			const { complete } = e;
			if (complete == true) return e;
			return;
		});
		if (filter == 'all') return setVisibleTasks(taskList);
		else if (filter == 'active') return setVisibleTasks(activeTask);
		else if (filter == 'completed') return setVisibleTasks(completedTask);
	};

	const handdleChangeTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	useEffect(
		() => {
			const body = document.body;
			theme === 'dark' ? body.classList.add('dark') : body.removeAttribute('class');
		},
		[ theme ]
	);

	return {
		theme,
		visibleTasks,
		setTaskList,
		handdleChangeTheme,
		handdleAddTask,
		handdleClearComplete,
		handdleDelete,
		handdleComplete,
		handdleFilter
	};
}

export default useGetData;
