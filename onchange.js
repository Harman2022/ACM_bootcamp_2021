import React from 'react';

function App1(){
    function handelchange(e){
        console.log(e.target.value);
}
return(
    <input name="anything" onChange={handelchange}/>
);
}
export default App1;