import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>

      <Card username = "Parth Surve" post = "Software Engineer" />
      <Card username = "Dipak Rathod" />
    </>
  )
}

export default App