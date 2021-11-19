import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");
    const [email, setEmail] = useState("")
    const handelOnChange = (event)=>{
        // console.log('On Change');
        setText(event.target.value);
    }
    const handelUpClick = ()=>{
        // console.log('upper Case was Clicked');
        let t1=text.toUpperCase();
        setText(t1);
        props.showAlert('converted to upperercase!','success');
    }
    const handelLoClick = ()=>{
        let t2 = text.toLowerCase();
        setText(t2);
        props.showAlert('converted to lowercase!','success');
    }
    const handelClear = ()=>{
        let t2 =""
        setText(t2);
        props.showAlert('Clear texts','success');
    }
    const emailExtracter = ()=>{
        let email= text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
        // console.log(email);
        if(email == null){
            setEmail("");
        }else{
            
            setEmail(email.join("\n"));
        }
        props.showAlert('Extract all emails','success');
    }
    const handelCopy = ()=>{
        const text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert('copied!','success');
    }
    const handelExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('extra spaces are removed','success');
    }
    
    return (
        <>
        <div className="container">
            <h1 className="my-3" style={{color:props.Mode==="dark" ?'white':'black'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8" style={{backgroundColor:props.Mode==="dark" ?'#79a196':'white',color:props.Mode==="dark" ?'white':'black'}}></textarea>
            </div>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelUpClick}>Convert to UpperCase</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelLoClick}>Convert to LowerCase</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelClear}>Clear text</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={emailExtracter}>Email extract</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelCopy}>Copy text</button>
            <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handelExtraSpace}>Remove ExtraSpace</button>
        </div>
        <div className="container my-3" style={{color:props.Mode==="dark" ?'white':'black'}}>
            <h2>
                Your Text summary
            </h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} wards and {text.length} characters</p>
            <p>{0.008 *text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        <div className="container my-3" style={{color:props.Mode==="dark" ?'white':'black'}}>
            <h3>All Extracted emails are :</h3>
            <div className="mb-3" >
                <textarea className="form-control" value={email} onChange={handelOnChange} id="mailBox" rows="8" style={{backgroundColor:props.Mode==="dark" ?'#79a196':'white',color:props.Mode==="dark" ?'white':'black'}} ></textarea>
            </div>
        </div>
        </>
    )
}
