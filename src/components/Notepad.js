

function NoteBook(){
    /*  const inputRef=useRef(null);
      const resultref=useRef(null);
      const [Note,setNote]=useState([]);
*/
      const handleSubmit =(e)=>{
            return(
                <div></div>
            );
        }
    return (
        <div className="Form">
<form onSubmit={handleSubmit}>
            <fieldset>
    <div className="Field">
<textarea height="100px" width="150px" placeholder="enter your task" onChange={e => setNote(e.target.value)}/>
</div>
<div className="Field">
<button type="submit">submit</button> 

<button type="submit">delete</button> 
</div>
<p ref={resultref}>
</p>
</fieldset>
</form>
</div>
    );
    }
export default NoteBook;