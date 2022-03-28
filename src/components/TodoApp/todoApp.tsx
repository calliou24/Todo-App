import { useEffect, useState } from 'react';

import styles from './todo-app.module.css';
import Form from '../AddTaskForm/form';

import moon from '../../assets/images/icon-moon.svg';
import sun from '../../assets/images/icon-sun.svg';

import Task from '../Task/task';
import useGetData from '../../hooks/useGetData';
import { Reorder } from 'framer-motion';

function TodoApp() {
	const { 
		taskList,
		setTaskList,
		theme, 
		handdleChangeTheme, 
		handdleAddTask, 
		handdleClearComplete, 
		handdleDelete, 
		handdleActive,
		handdleFilterComplete
	} = useGetData();

	return (
		<div className={styles.todoApp}>
			<header>
				<div className={styles.head}>
					<h1 className={styles.logoText}>TODO</h1>
					<div onClick={handdleChangeTheme} className={styles.changeTheme}>
						<img className={styles.themeIcon} src={theme === 'light' ? moon : sun} alt="icon theme swicher" />
					</div>
				</div>
				<Form handdleAdd={handdleAddTask} />
			</header>
			<div className={styles.taskCont}>
				<Reorder.Group className={styles.taskList} axis='y' values={taskList} onReorder={setTaskList} >
					{taskList.map((e) => (
						<Reorder.Item className={styles.item} key={e.name} value={e}>
							<Task handdleDel={handdleDelete} taskName={e.name} completed={e.complete} />
						</Reorder.Item>
					))}
				</Reorder.Group>
				<div className={styles.taskStatus}>
					<div className={styles.itemsLeft}>{taskList.length} items left</div>
					<div className={styles.taskFilters}>
						<button className={styles.btn}>All</button>
						<button onClick={handdleActive} className={styles.btn}>Active</button>
						<button onClick={handdleFilterComplete} className={styles.btn}>Completed</button>
					</div>
					<div className={styles.clearBtn}>
						<button className={styles.btn} onClick={handdleClearComplete}>Clear Completed</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TodoApp;
