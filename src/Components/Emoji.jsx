import { useState } from 'react'


function ChangeEmoji() {


const [emoji, setEmoji] = useState('😀');


const changeEmoji = () => {
    if (emoji === '😀') {
        setEmoji('😐');
    } else if (emoji === '😐') {
        setEmoji('😒')
    } else if (emoji === '😒') {
        setEmoji('😡')
    } else if (emoji === '😡') {
        setEmoji('🖕')
    } else if (emoji === '🖕') {
        setEmoji('😀')
    }
};


return (
    <div className='emoji-container'>
        <div className='emoji'>{emoji}</div>
        <button onClick={changeEmoji}>Click Me!</button>
        <div className='emoji'>{emoji}</div>    </div>
);
}


export default ChangeEmoji