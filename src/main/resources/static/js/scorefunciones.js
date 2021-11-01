function postSc (){
    var data={
        scoreValue:$("#scorevalue").val(),
        message:$("#message").val(),
        reservation:$("#reservation").val(),
        
    }
//var dataTosend =JSON.stringify(data);

$.ajax({

            dataType: "json",
            data:data,
            url:"http://129.151.122.220:8080/api/Score/save",
            type:"POST",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}

function getSc (){
    
    $.ajax({

        dataType: "json",
        url:"http://129.151.122.220:8080/api/Score/all",
        type:"GET",
        success: function(response){
            
            for (i = 0; i< response.items.length; i++){
                $("#items").append("<tr>");
                $("#items").append("<td>"+response.items[i].scoreValue+"</td>");
                $("#items").append("<td>"+response.items[i].message+"</td>");
                $("#items").append("<td>"+response.items[i].reservation+"</td>");
                $("#items").append('<td><button onclick="delRes('+response.items[i].id+')">Borrar</button></td>');
                $("#items").append('<td><button onclick="getResId('+response.items[i].id+')">Editar</button></td>');
                $("#items").append("</tr>");
            }
                
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
});
}

function delSc (idItem){
    var dataDel={
        id:idItem,
        
    }
var dataTosend =JSON.stringify(dataDel);

$.ajax({

            dataType: "json",
            data:dataTosend,
            contentType:"application/json",
            url:"http://129.151.122.220:8080/api/Score/",
            type:"DELETE",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}

function getScId (idItem){
    
    $.ajax({

        dataType: "json",
        url:"http://129.151.122.220:8080/api/Score/"+idItem,
        type:"GET",
        success: function(response){
            
            console.log(response);
            var item= response.items[0];
                $("#myId").val(item.id);
                $("#scoreValue").val(item.scoreValue);
                $("#message").val(item.message);
                $("#reservation").val(item.reservation);
                
            
                
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
});
}

function putScId (){
    var data={
        scoreValue:$("#scorevalue").val(),
        message:$("#message").val(),
        reservation:$("#reservation").val(),
        
    }
var dataTosend =JSON.stringify(data);

$.ajax({

            dataType: "json",
            data:dataTosend,
            contentType:"application/json",
            url:"http://129.151.122.220:8080/api/Score/",
            type:"PUT",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}