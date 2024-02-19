import './header'
import './App.css'
import Header from './header'
import TwittEed from './tweet-editors'
import Tweet from './twiitte'
function App() {
  return(
    <div className='timeline'>
      <Header/>
      <TwittEed/>
      <Tweet/>

    </div>
  )
}

export default App
