import React, { useState ,useEffect } from 'react';
import Trial2 from './Trial2';



function Stdfeature({UpdateComp,finalcomp}){
  


  return ( <div>
   <div> <h2>Standard Features</h2> </div>
   <Trial2 url ={"std"} UpdateComp={UpdateComp} finalcomp={finalcomp}/>
    </div>
  )
}

export default Stdfeature