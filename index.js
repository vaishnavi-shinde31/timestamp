let a;
let time;
let date;
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};
setInterval(()=>{
    a=new Date();
    date = a.toLocaleDateString(undefined, options);
    time=a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    document.getElementById('d1').innerHTML= time + "<br>" + date; 
},1000)



