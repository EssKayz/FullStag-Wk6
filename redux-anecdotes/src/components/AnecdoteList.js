import React from 'react';
import { voteFor } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'

const Anecdotes = (props) => {
    console.log('check ', props.anecdotes)
    const list = props.anecdotes.map(anecdote =>
        <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => props.voteFor(anecdote.id)}>vote</button>
            </div>
        </div>
    )

    return (
        list
    )
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes
    }
}

const mapDispatchToProps = {
    voteFor,
}

const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(Anecdotes)

export default ConnectedAnecdotes
