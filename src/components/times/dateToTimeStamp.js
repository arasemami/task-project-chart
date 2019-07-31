    
    
    function timeStamp(val){

            let datum = Date.parse(val);
            let timestamp = datum/1000;
            let a = new Date(timestamp*1000);
            let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            let dayOfWeek = days[a.getDay()]

                return  dayOfWeek;  
    }
 


export default timeStamp;


 