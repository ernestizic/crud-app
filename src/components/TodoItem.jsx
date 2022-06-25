import React, { useRef } from "react";
// import { FaEdit, FaTrash } from "react-icons/fa";
import OptionMenu from "./OptionMenu";

const TodoItem = ({ todo, delTodo, markComplete, setEditModal }) => {
	const toggleRef = useRef(null)
	return (
		<div className='todo-item'>
			<div>
				<input type='checkbox' onChange={() => markComplete(todo.id)} />

				<span
					className={
						todo.completed === false ? "todo-title" : "todo-title completed"
					}
				>
					{todo.title}
				</span>

				<div className="more-options">
					<span className="more-options-icon" onClick={()=> {toggleRef.current.toggleMenu()}}>...</span>
					<OptionMenu ref={toggleRef} setEditModal={setEditModal} todo={todo} delTodo={delTodo} />
				</div>

				{/* <FaTrash className='trash' onClick={() => delTodo(todo.id)} />
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
				/> */}
			</div>
		</div>
	);
};

export default TodoItem;
