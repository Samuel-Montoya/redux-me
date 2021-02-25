import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { upvote, downvote, login, logout } from './actions'
import './App.css'

function App() {
  useEffect(() => alert('assinine'))
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const likes = useSelector(state => state.posts.likes)
  const dispatch = useDispatch()

  return (
    <div className="App">
      {isLoggedIn ?
        <header className="App-header">
          <p>
            Amount of Likes {likes}
          </p>
          <button onClick={() => dispatch(upvote())}>Upvote</button>
          <button onClick={() => dispatch(downvote())}>Downvote</button>
          <button onClick={() => dispatch(logout())}>Logme OUT</button>
        </header>
        : <section>
          <button onClick={() => dispatch(login())}>LogmeIn Hamachi</button>
        </section>}
    </div>
  )
}

export default App
