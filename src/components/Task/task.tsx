import { useState } from 'react';
import styles from './task.module.css';

import cross from '../../assets/images/icon-cross.svg';
import check from '../../assets/images/icon-check.svg'


function Task({ taskName, completed, handdleDel }: TaskProps) {
	const [ completedTask, setCompletedTask ] = useState(completed);

	const handdleComplete = () => {
		setCompletedTask(!completedTask);
	};

	return (
		<div className={styles.task}>
			<div className={styles.firstCont}>
				<div
					onClick={handdleComplete}
					id={completedTask ? styles.taskCompleted : undefined}
					className={styles.checker}
				>
					{completedTask && <img src={check} alt="check" />}
				</div>
				<div id={completedTask ? styles.taskNameComplete : undefined} className={styles.taskName}>
					{taskName}
				</div>
			</div>
			<div onClick={() => handdleDel(taskName)} className={styles.delete}>
				<img src={cross} alt="delete task cross" className={styles.crossImg} />
			</div>
		</div>
	);
}

export default Task;

type TaskProps = {
	taskName: string;
	completed: boolean;
	handdleDel: any;
};
