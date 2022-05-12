export default function Checkbox(props){
   return (
       <div className="input-group" style={{marginTop:2,marginBottom:2}}>

           <div className="dropdown">
               <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   {props.label}
               </button>
               <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                   <a className="dropdown-item" href="#">Action</a>
                   <a className="dropdown-item" href="#">Another action</a>
                   <a className="dropdown-item" href="#">Something else here</a>
               </div>

           </div>

           </div>

   );
}