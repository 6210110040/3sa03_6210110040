import CharacterCard from './CharacterCard';

const word = "Hello";
function App() {
  return (
    <div>
      {
          Array.from(word).map((c, i) => <CharacterCard value={c}/>)
      }

    </div>
 );
}


export default App;
