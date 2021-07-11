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
                if(state.attempt == 6 ){
                    console.log('Congrats, you are on the right track.')
                }
            }else{
                console.log('reset, next attempt' + '    ' + 'you are try  ' + state.attempt + ' round' )
                console.log('Hind : start of communication ')
                setState({...state, guess: '', attempt: state.attempt + 1})

                if(state.attempt == 6 ){
                    console.log('you tried very well ')
                    setState({...state, completed: true})
                }
            }
        }
        console.log(guess)

        if(state.attempt ==  3){
            console.log('Hind : general greeting ')
        }else if (state.attempt == 5 ){
            console.log('we think you are overthinking it is just a word Hello')
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
