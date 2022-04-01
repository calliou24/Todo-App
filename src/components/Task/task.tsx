import React, { useState } from 'react';
import styles from './task.module.css';

import cross from '../../assets/images/icon-cross.svg';
import check from '../../assets/images/icon-check.svg';

const Task = React.memo(({ handdleComplete, taskName, completed, handdleDel }: TaskProps) => {

	return (
		<div className={styles.task}>
			<div className={styles.firstCont}>
				<div
					onClick={()=> handdleComplete(taskName)}
					id={completed ? styles.taskCompleted : undefined}
					className={styles.checker}
				>
					{completed && <img src={check} alt="check" />}
				</div>
				<div id={completed ? styles.taskNameComplete : undefined} className={styles.taskName}>
					{taskName}
				</div>
			</div>
			<div onClick={() => handdleDel(taskName)} className={styles.delete}>
				<img src={cross} alt="delete task cross" className={styles.crossImg} />
			</div>
		</div>
	);
});

export default Task;

type TaskProps = {
	taskName: string;
	completed: boolean;
	handdleDel: any;
	handdleComplete : any
};
