import React, { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react';

const OptionMenu = forwardRef((props, ref) => {
	const [displayMenu, setDisplayMenu] = useState(false);

    const menuRef = useRef()

	useImperativeHandle(ref, () => ({
		toggleMenu() {
			setDisplayMenu(!displayMenu);
		},
	}));

    useEffect(()=> {
        const closeMenu =(e)=> {
            if (menuRef.current && !menuRef.current.contains(e.target) && displayMenu === true) {
                setDisplayMenu(false)
            }
        }
        window.addEventListener("click", closeMenu)

        return ()=> {
            window.removeEventListener('click', closeMenu)
        }
    }, [displayMenu])

    // Functions
    // Edit
    const editTodo =()=> {
        props.setEditModal({
            id: props.todo.id,
            title: props.todo.title,
        })
        setDisplayMenu(!displayMenu)
    }
    // Delete 
    const deleteTodo =()=> {
        props.delTodo(props.todo.id)
        setDisplayMenu(!displayMenu)
    }
	return (
		<>
			{displayMenu && (
				<div className='menu' ref={menuRef}>
					<button onClick={editTodo}>Edit todo</button>
					<button onClick={deleteTodo}>Delete todo</button>
				</div>
			)}
		</>
	);
});

export default OptionMenu;
