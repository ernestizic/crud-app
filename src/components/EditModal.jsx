import React, { useState } from "react";

export const EditModal = ({ editModal, editTodo, closeModal}) => {
	const [text, setText] = useState(editModal.title);

	const handleSubmit = (e) => {
		e.preventDefault();
		editTodo(editModal.id, text);
		setText("");
	};
	return (
		<div className="backdrop">
			<div className="edit-modal">
				<div className='edit-header'>
					<h3>Edit Todo</h3>
					<span className="times" onClick={closeModal}>&times;</span>
				</div>

				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder="Type and hit 'Enter'"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</form>
			</div>
		</div>
	);
};
