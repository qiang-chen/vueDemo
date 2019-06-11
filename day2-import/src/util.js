export default function Time(navdate){
        let date=new Date();
        date.setTime(navdate);
        let year=date.getFullYear(),
        month=date.getMonth()+1,
        day=date.getDay(),
        hour=date.getHours(),
        min=date.getMinutes(),
        sec=date.getSeconds()

        return `${year}-${month}-${day} ${hour}:${min}:${sec}`
}   


export function format (num) {  
    var reg=/\d{1,3}(?=(\d{3})+$)/g;   
    return (num + '').replace(reg, '$&,');  
}