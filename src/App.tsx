/* eslint no-eval: 0 */
import { useState, FC } from 'react'
import words from 'lodash.words'
import Result from './components/Result'
import MathOperations from './components/MathOperations'
import Functions from './components/Functions'
import Numbers from './components/Numbers'

import './App.css'

const App: FC = () => {

    const [state, setState] = useState("");

    const items = words(state, /[^-^+^*^/]+/g)
    
    const clickNumberFunc = (number: string) => setState(`${state}${number}`)
    const clickOperationFunc = (operation: string) => setState(`${state}${operation}`)
    const clickEqualFunc = () => {
        if(items.length > 1)
            setState(`${eval(state).toString()}`)
    }
    const clickClearFunc = () => setState("")
    const clickDeleteFunc = () => {
        if(state.length > 0){
            const newState = state.substring(0, state.length - 1)
            setState(newState)
        }
    }

    const value = items.length > 0 ? items[items.length - 1] : "0";

    return (
        <main className='react-calculator'>
            <Result value={ value }/>
            <Numbers onClickNumber={ clickNumberFunc }/>
            <Functions onContentClear={ clickClearFunc } onDelete={ clickDeleteFunc } />
            <MathOperations onClickOperation={ clickOperationFunc } onClickEqual={ clickEqualFunc }/>
        </main>
    )
}

export default App