import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnclick = () => {
        let a = text.toUpperCase();
        setText(a)
        props.showAlert('Converted to UpperCase', 'success')
    };

    const handleOnLoclick = () => {
        let b = text.toLowerCase();
        setText(b)
        props.showAlert('Converted to LowerCase', 'success')
    };

    const handleOnSpclick = () => {
        let my = text.split(/[ ]+/);
        console.log(my);
        setText(my.join(" "));
        props.showAlert('Extra Space is cleard', 'success')
    };

    const handleOnSeclick = () => {
        setText(
            text.split('.')
                .map((sentence) => {
                    console.log(sentence);
                    sentence = sentence.trim()
                    console.log(sentence);
                    sentence = sentence.substring(0, 1).toUpperCase() + sentence.substring(1).toLowerCase();
                    return sentence
                })
                .join('. ')
        )
        props.showAlert('Converted to SentenceCase', 'success')
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    };
    const [text, setText] = useState("")
    return (
        <>
            <div className="container my-3" style={{ backgroundColor: props.myMode === 'info' ? 'white' : '#2d6195', color: props.myMode === 'info' ? 'black' : 'white' }}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" style={{ backgroundColor: props.myMode === 'info' ? 'white' : 'black', color: props.myMode === 'info' ? 'black' : 'white' }} id="myBox" rows="8" placeholder="Enter Your Text Here" value={text} onChange={handleOnChange}></textarea>
                    <button disabled={text.length == 0} className="btn btn-primary mt-3 mx-2" onClick={handleOnclick}>Convert to UpperCase</button>
                    <button disabled={text.length == 0} className="btn btn-primary mt-3 mx-2" onClick={handleOnLoclick}>Convert to LowerCase</button>
                    <button disabled={text.length == 0} className="btn btn-primary mt-3 mx-2" onClick={handleOnSeclick}>Convert to SentenceCase</button>
                    <button disabled={text.length == 0} className="btn btn-primary mt-3 mx-2" onClick={handleOnSpclick}>Clear Extra Space</button>
                </div>
            </div>
            <div className="container " style={{ backgroundColor: props.myMode === 'info' ? 'white' : '#2d6195', color: props.myMode === 'info' ? 'black' : 'white' }}>
                <h2>Your Text Summery</h2>
                <p>{text.split(" ").filter((number) => { return number != 0 }).length} Words , {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((number) => { return number != 0 }).length} Minutes to Read </p>
                <h2>Text Preview</h2>
                <p>{text === "" ? "Nothing to Preview !" : text}</p>
            </div>
        </>
    )
}


// const handleOnSeclick = () => {
//     let my = text.split(/[ ]+/);
//     let f = my.join(" ");
//     let k = f.toLowerCase();
//     let full = k.split(". ");
//     setText(
//         full.map((n) => {
//                 let cha = full[0].charAt(0).toUpperCase();
//                 n = full[0].replace(full[0].charAt(0), cha);
//                 return n;
//             })
//             .join('. ')
//     )
// };
// ((n)=> {
//     if (text === '') {
//         n = 0;
//     }
//     else {
//         n = text.split(" ").length;
//     }
//     return n;
// })






//     const [text, setText] = useState('');
//     let lines = text
//         .split('\n')
//         .map((str) => { return str === '' ? 0 : 1 })
//         .reduce((sum, a) => sum + a)

//     let words = text
//         .split('\n')
//         .map((str) => { return str === '' ? 0 : str.replace(/\s+/g, ' ').trim().split(' ').length })
//         .reduce((sum, a) => sum + a)

