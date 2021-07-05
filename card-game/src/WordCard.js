import _ from 'lodash';
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
    }

    return{
        <div>
            {
                state.chars.map((c, i)) =>
                    <CharacterCard value={c} key={i} activateionHandler={activateionHandler}/>
            }
        </div>
    }
}
