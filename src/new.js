import react from 'react'
import { Children } from 'react/cjs/react.production.min';
import './new.css';

const New=({ne,children})=> {
    const name='zainab';
    const zain='akhiri kamini';
    
    return(
        <>
        <div className='new'>here are some information about the candidate</div>
        <div className='sec'>
            {/* <div className="k" contentEditable='true'></div> */}
            <button>click here</button>
    {ne(name,zain)}

        </div>
        {children}
        </>
    )
}
export default New;