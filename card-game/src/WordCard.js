import _, { attempt } from 'lodash';
import { useState } from 'react';
import CharacterCard from './CharacterCard';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: '',
        completed: false 
    }
}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activateionHandler = c => {
        console.log('${c} has been activated')

        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('yeah!')
                setState({...state, completed: true})
            }else{
                console.log('reset, next attempt' + '    ' + 'you are try  ' + state.attempt + ' round' )
                console.log('Hind : start of communication ')
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }
        console.log(guess)

        if(state.attempt ==  3){
            console.log('Hind : general greeting ')
        }
    
    }

        return(
            <div>
                {
                    state.chars.map((c, i) => 
                        <CharacterCard value={c} key={i} activateionHandler={activateionHandler} attempt={state.attempt}/>
                    )}
            </div>
        )

}
