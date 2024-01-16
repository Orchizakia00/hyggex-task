
import Faq from './Components/Faq'
import Header from './Components/Header'
import Math from './Components/Math'
import Navbar from './Components/Navbar'
import Publisher from './Components/Publisher'
import Title from './Components/Title'

function App() {

  return (
    <div className='w-[90%] mx-auto'>
      <Navbar />
      <Header />
      <Title />
      <Math />
      <Publisher />
      <Faq />
    </div>
  )
}

export default App
