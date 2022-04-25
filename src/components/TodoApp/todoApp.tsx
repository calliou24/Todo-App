import styles from './todo-app.module.css';
import Form from '../AddTaskForm/form';

import moon from '../../assets/images/icon-moon.svg';
import sun from '../../assets/images/icon-sun.svg';

import Task from '../Task/task';
import useGetData from '../../hooks/useGetData';
import { Reorder } from 'framer-motion';

function TodoApp() {
	const {
		theme,
		visibleTasks,
		setTaskList,
		handdleChangeTheme,
		handdleAddTask,
		handdleClearComplete,
		handdleDelete,
		handdleComplete,
		handdleFilter
	} = useGetData();

	return (
		<div className={styles.todoApp}>
			<header>
				<div className={styles.head}>
					<h1 className={styles.logoText}>TODO</h1>
					<div onClick={handdleChangeTheme} className={styles.changeTheme}>
						<img
							className={styles.themeIcon}
							src={theme === 'light' ? moon : sun}
							alt="icon theme swicher"
						/>
					</div>
				</div>
				<Form handdleAdd={handdleAddTask} />
			</header>
			<div className={styles.taskCont}>
				{visibleTasks.length > 0 ? (
					<Reorder.Group className={styles.taskList} axis="y" values={visibleTasks} onReorder={setTaskList}>
						{visibleTasks.map((e) => (
							<Reorder.Item className={styles.item} key={e.name} value={e}>
								<Task
									handdleComplete={handdleComplete}
									handdleDel={handdleDelete}
									taskName={e.name}
									completed={e.complete}
								/>
							</Reorder.Item>
						))}
					</Reorder.Group>
				) : (
					<h3 className={styles.addTask}>( Add a task )</h3>
				)}
				<div className={styles.taskStatus}>
					<div className={styles.itemsLeft}>{visibleTasks.length} items left</div>
					<div className={styles.taskFilters}>
						<button onClick={() => handdleFilter('all')} className={styles.btn}>
							All
						</button>
						<button onClick={() => handdleFilter('active')} className={styles.btn}>
							Active
						</button>
						<button onClick={() => handdleFilter('completed')} className={styles.btn}>
							Completed
						</button>
					</div>
					<div className={styles.clearBtn}>
						<button className={styles.btn} onClick={handdleClearComplete}>
							Clear Completed
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TodoApp;
