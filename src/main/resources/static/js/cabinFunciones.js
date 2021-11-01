function postCabin (){
    var data={
        brand:$("#brand").val(),
        rooms:$("#rooms").val(),
        category:$("#category").val(),
        name:$("#name").val(),
    }
//var dataTosend =JSON.stringify(data);

$.ajax({

            dataType: "json",
            data:data,
            url:"http://129.151.122.220:8080/api/Cabin/save",
            type:"POST",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}

function getCabin (){
    
    $.ajax({

        dataType: "json",
        url:"http://129.151.122.220:8080/api/Cabin/all",
        type:"GET",
        success: function(response){
            
            for (i = 0; i< response.items.length; i++){
                $("#items").append("<tr>");
                $("#items").append("<td>"+response.items[i].brand+"</td>");
                $("#items").append("<td>"+response.items[i].rooms+"</td>");
                $("#items").append("<td>"+response.items[i].categoy+"</td>");
                $("#items").append("<td>"+response.items[i].name+"</td>");
                $("#items").append('<td><button onclick="delCabin('+response.items[i].id+')">Borrar</button></td>');
                $("#items").append('<td><button onclick="getCabinId('+response.items[i].id+')">Editar</button></td>');
                $("#items").append("</tr>");
            }
                
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
});
}

function delCabin (idItem){
    var dataDel={
        id:idItem,
        
    }
var dataTosend =JSON.stringify(dataDel);

$.ajax({

            dataType: "json",
            data:dataTosend,
            contentType:"application/json",
            url:"http://129.151.122.220:8080/api/Cabin/",
            type:"DELETE",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}

function getCabinId (idItem){
    
    $.ajax({

        dataType: "json",
        url:"http://129.151.122.220:8080/api/Cabin/"+idItem,
        type:"GET",
        success: function(response){
            
            console.log(response);
            var item= response.items[0];
                $("#brand").val(item.brand);
                $("#rooms").val(item.rooms);
                $("#category").val(item.category);
                $("#name").val(item.name);
            
                
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
});
}

function putCabinId (){
    var data={
        
        brand:$("#brand").val(),
        rooms:$("#rooms").val(),
        category:$("#category").val(),
        name:$("#name").val(),
    }
var dataTosend =JSON.stringify(data);

$.ajax({

            dataType: "json",
            data:dataTosend,
            contentType:"application/json",
            url:"http://129.151.122.220:8080/api/Cabin/",
            type:"PUT",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}