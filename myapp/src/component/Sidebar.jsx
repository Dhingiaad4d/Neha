import React from 'react'

const Sidebar = (onClose) => {
    return (
        <div className='section sidebar-section'>
            <p>Sidebar</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repellat impedit voluptas similique fuga rerum cupiditate id quis
                 asperiores expedita dolor blanditiis amet sequi suscipit dicta ea iure debitis placeat ut enim officia corporis voluptates harum. 
                 Facilis nulla nobis odio deleniti velit perspiciatis tenetur facere suscipit maxim
                 Libero minima sit deserunt eos! Provident odio rerum ut architecto deleniti suscipit neque et. Optio est aspernatur ullam sint?</p>
                <button onClick={onClose}></button>
        </div>
    )
}

export default Sidebar
