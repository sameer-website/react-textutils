import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to Uppercase!", "Success");
  }

  const handleLoClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to Lowercase!", "Success");
  }

  const handleClearClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleCopy=()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const firLetterUp = () => {
    let newText = text.split(" ");
    let finalArr = []
    newText.forEach((element) => {
      let afterUp = element[0].toUpperCase();
      afterUp = afterUp.concat(element.substring(1))
      finalArr.push(afterUp);
    })
    setText(finalArr.join(" "));
  }

  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  // function sameer(){
  //   if(text.split(" ").length){
  //     const ans=text.pop();
  //     return text.split(" ").length

  //   }

  // }

  const [text, setText] = useState('');

  return (
    <>
    <div className='container' style={{color:props.mode === 'dark' ? 'white':'#042743'}}>
        <h2 className='mb-2'>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? '#13466e':'white',color:props.mode === 'dark' ? 'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={firLetterUp}>Capitalize first letter</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark' ? 'white':'#042743'}}>
    <h2>Your text summery</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!=0}).length}words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} minutes read</p>
    <h1>Preview</h1>
    <p>{text.length>0 ? text:'Nothing to preview!'}</p>
    </div> 
    </>
  )
}
