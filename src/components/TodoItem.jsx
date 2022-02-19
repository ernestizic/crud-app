import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, delTodo, markComplete, setEditModal }) => {
	return (
		<div className='todo-item'>
			<p>
				<input type='checkbox' onChange={() => markComplete(todo.id)} />

				<span
					className={
						todo.completed === false ? "todo-title" : "todo-title completed"
					}
				>
					{todo.title}
				</span>
				<FaTrash className='trash' onClick={() => delTodo(todo.id)} />
				<FaEdit
					className='edit'
					onClick={() =>
						setEditModal({
							id: todo.id,
							// userId: todo.userId,
							title: todo.title,
							// completed: todo.completed,
						})
					}
				/>
			</p>
		</div>
	);
};

export default TodoItem;
