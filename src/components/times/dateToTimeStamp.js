    
    
    function timeStamp(val){

            var datum = Date.parse(val);
            var timestamp = datum/1000;
            var a = new Date(timestamp*1000);
            var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            var dayOfWeek = days[a.getDay()]

                return  dayOfWeek;  
    }
 


export default timeStamp;


 