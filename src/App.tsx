import './App.css'
import memesData from "./data/memes.json"
import { Meme } from './components/Meme'

function App() {
  return (
    <>
      <h2>Memes</h2>
      {memesData.map((meme) => (
        <Meme key={meme.id} title={meme.title} imageUrl={meme.imageUrl} />
      ))}
    </>
  )
}
export default App