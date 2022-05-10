export default function Checkbox(props){
   return (
       <div className="input-group">

               <div className="btn-group">
                   <button className="btn btn-secondary btn-sm" type="button">
                       Small split button
                   </button>

                   <button type="button" className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                       <span className="sr-only">Toggle Dropdown</span>
                   </button>
                   <div className="dropdown-menu"></div>

           </div>
       </div>
   );
}