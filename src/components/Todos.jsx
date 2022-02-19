import axios from "axios";
import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import { EditModal } from "./EditModal";
import TodoItem from "./TodoItem";
import { toast } from 'react-toastify';

const Todos = () => {
	const [todos, setTodos] = useState([]);
	const [editModal, setEditModal] = useState(null)

	useEffect(() => {
		// Fetch Todo (Limited to fetching only five)
		const fetchTodos = async () => {
			const res = await axios(
				"https://jsonplaceholder.typicode.com/todos?_limit=10",
				{
					method: "GET",
				}
			);
			setTodos(res.data);
		};
		fetchTodos();
	}, []);

	// Close Edit Modal
	const closeModal =()=> {
		setEditModal(null)
	}

	// Add a TODO
	const addTodo = async(todo) => {
		if(!todo) {
			toast.error("Field cannot be empty")
			return
		}
		const newTodo = {
			userId: 1,
			title: todo,
			completed: false,
		};
		const res = await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo)

		const data = res.data
		setTodos([...todos, data ])
		toast.success("Todo added successfully", { theme: "colored" });
	};

	// Mark a TODO
	const markComplete = (id) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		);
	};

	// Delete a TODO
	const delTodo = async (id) => {
		const res = await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);
		console.log(res.data)
		setTodos([...todos.filter((todo) => todo.id !== id)]);
		toast.error("Todo Deleted!", { theme: "colored" });
	};

	// Edit a TODO
	const editTodo =async(id, text)=> {
		if(!text) {
			toast.error("Field cannot be empty")
			return
		}
		const res = await axios.patch(`http://jsonplaceholder.typicode.com/todos/${id}`, text)
		console.log(res.data)
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.title = text;
				}
				return todo;
			})
		);
		closeModal();
		toast.success("Todo Edited Successfully!", { theme: "colored" });
	}

	return (
		<>
			<div className='todo-list'>
				{todos.length ? (
					todos.map((todo) => (
						<TodoItem
							key={todo.id}
							todo={todo}
							markComplete={markComplete}
							delTodo={delTodo}
							setEditModal={setEditModal}
						/>
					))
				) : (
					<div className='empty-list'>Nothing left to do</div>
				)}
			</div>
			<AddTodo addTodo={addTodo} />

			{editModal && <EditModal closeModal={closeModal} editTodo={editTodo} editModal={editModal} />} 
		</>
	);
};

export default Todos;
