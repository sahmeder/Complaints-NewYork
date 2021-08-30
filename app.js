console.log("yo")

$(function(){
    

    const promise = $.ajax({
    url: "https://data.cityofnewyork.us/resource/qgea-i56i.json"
})

promise.then(
    (data)=>{
        console.log(data[0])
        var el = document.getElementById("divy")
        var newData = jQuery.map(data, function(val, index){
            return {
                complaint : val.cmplnt_num+ '<br>',
                bourough: val.boro_nm + '<br>',
                agency: val.juris_desc+ '<br>',
                resDesc: val.ofns_desc + '<br>'+ '<br>'
            }
        })
        el.innerHTML = JSON.stringify(newData)
        $.each(data, function(i, value){
            
            $("#compNum").html(value.cmplnt_num)
            $("#borough").html(value.boro_nm)
            $("#agency").html(value.juris_desc)
            $("#resDesc").html(value.ofns_desc)
            return (value)
        })
    }, ()=> {
        console.log("Bad Request")
    }
)
})
