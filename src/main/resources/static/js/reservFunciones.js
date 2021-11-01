function postRes (){
    var data={
        starDate:$("#starDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        client:$("#client").val(),
        cabin:$("#cabin").val(),
        
    }
//var dataTosend =JSON.stringify(data);

$.ajax({

            dataType: "json",
            data:data,
            url:"http://129.151.122.220:8080/api/Reservation/save",
            type:"POST",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}

function getRes (){
    
    $.ajax({

        dataType: "json",
        url:"http://129.151.122.220:8080/api/Reservation/all",
        type:"GET",
        success: function(response){
            
            for (i = 0; i< response.items.length; i++){
                $("#items").append("<tr>");
                $("#items").append("<td>"+response.items[i].starDate+"</td>");
                $("#items").append("<td>"+response.items[i].devolutionDate+"</td>");
                $("#items").append("<td>"+response.items[i].client+"</td>");
                $("#items").append("<td>"+response.items[i].cabin+"</td>");
                $("#items").append("<td>"+response.items[i].score+"</td>");
                $("#items").append('<td><button onclick="delRes('+response.items[i].id+')">Borrar</button></td>');
                $("#items").append('<td><button onclick="getResId('+response.items[i].id+')">Editar</button></td>');
                $("#items").append("</tr>");
            }
                
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
});
}

function delRes (idItem){
    var dataDel={
        id:idItem,
        
    }
var dataTosend =JSON.stringify(dataDel);

$.ajax({

            dataType: "json",
            data:dataTosend,
            contentType:"application/json",
            url:"http://129.151.122.220:8080/api/Reservation/",
            type:"DELETE",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}

function getResId (idItem){
    
    $.ajax({

        dataType: "json",
        url:"http://129.151.122.220:8080/api/Reservation//"+idItem,
        type:"GET",
        success: function(response){
            
            console.log(response);
            var item= response.items[0];
                $("#myId").val(item.id);
                $("#brand").val(item.brand);
                $("#rooms").val(item.rooms);
                $("#category_id").val(item.category_id);
                $("#name").val(item.name);
            
                
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
});
}

function putResId (){
    var data={
        id:$("#myId").val(),
        brand:$("#brand").val(),
        rooms:$("#rooms").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    }
var dataTosend =JSON.stringify(data);

$.ajax({

            dataType: "json",
            data:dataTosend,
            contentType:"application/json",
            url:"http://129.151.122.220:8080/api/Reservation/",
            type:"PUT",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}