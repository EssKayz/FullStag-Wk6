import React from 'react';
import { createAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'

const NewAnecdote = (props) => {

    const addAnecdote = (event) => {
        event.preventDefault()
        props.createAnecdote(event.target.anecdote.value)
        event.target.anecdote.value = ''
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <input name="anecdote" />
                <button type="submit">lisää</button>
            </form>
        </div>

    )
}

const connectedAddink = connect(null, { createAnecdote })(NewAnecdote)

export default connectedAddink
