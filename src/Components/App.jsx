import './App.css'
import Header from './Header/header'
import TwittEed from './Body/tweet-editors'
import Tweet from './Body/twiitte'
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
