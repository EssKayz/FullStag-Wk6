import React from 'react';
import { voteFor } from '../reducers/anecdoteReducer'

const Anecdotes = ({ store }) => {

    const vote = (id) => {
        console.log('vote', id)
        store.dispatch(voteFor(id))
    }

    const list = store.getState().anecdotes.map(anecdote =>
        <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
        </div>
    )

    return (
        list
    )
}

export default Anecdotes
