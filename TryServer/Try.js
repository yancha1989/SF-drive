import React, {useState} from 'react';
import { useEffect } from 'react'
import "./Hz.css"

function Try () {
    const [name, setName] = useState('');
    const[users, setUsers] = useState([])

    function onNameChange(e) {
        setName(e.target.value);
    }


    useEffect(() => {
        fetch('/users')
        .then(res=> res.json())
        .then(json => setUsers(json))
    }, []);

    function onSubmit(e) {
        e.preventDefault()
    }

    return (
        <div>
            <ol>
                {users.map(u => <li>{u.name}</li>)}
            </ol>
            <form>
                <label>
                    Name
                </label>
                <input value={name} onChange={onNameChange}>
                </input>
                <button onClick={onSubmit}>
                    Add
                </button>
            </form>
        </div>
    )

}

export default Try