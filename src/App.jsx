import Canvas from "./canvas"
import Home from "./pages/Home"
import Customize from "./pages/Customize"

function App() {

  return (
    <main className="app transition-all ease-in">
      <Home/>
      <Canvas/>
      <Customize/>
    </main>
  )
}

export default App
