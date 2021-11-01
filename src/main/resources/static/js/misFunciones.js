function postClient (){
    var data={
        id:$("#myId").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val()
    }
//var dataTosend =JSON.stringify(data);

$.ajax({

            dataType: "json",
            data:data,
            url:"http://129.151.122.220:8080/api/Client/save",
            type:"POST",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}

function getClient (){
    
    $.ajax({

        dataType: "json",
        url:"http://129.151.122.220:8080/api/Client/all",
        type:"GET",
        success: function(response){
            
            for (i = 0; i< response.items.length; i++){
                $("#items").append("<tr>");
                $("#items").append("<td>"+response.items[i].name+"</td>");
                $("#items").append("<td>"+response.items[i].email+"</td>");
                $("#items").append("<td>"+response.items[i].age+"</td>");
                $("#items").append('<td><button onclick="delClient('+response.items[i].id+')">Borrar</button></td>');
                $("#items").append('<td><button onclick="getClientId('+response.items[i].id+')">Editar</button></td>');
                $("#items").append("</tr>");
            }
                
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
});
}

function delClient (idItem){
    var dataDel={
        id:idItem,
        
    }
var dataTosend =JSON.stringify(dataDel);

$.ajax({

            dataType: "json",
            data:dataTosend,
            contentType:"application/json",
            url:"http://129.151.122.220:8080/api/Client/",
            type:"DELETE",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}

function getClientId (idItem){
    
    $.ajax({

        dataType: "json",
        url:"http://129.151.122.220:8080/api/Client/"+idItem,
        type:"GET",
        success: function(response){
            
            console.log(response);
            var item= response.items[0];
                $("#myId").val(item.id);
                $("#name").val(item.name);
                $("#email").val(item.email);
                $("#age").val(item.age);
            
                
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
});
}

function putClientId (){
    var data={
        id:$("#myId").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val()
    }
var dataTosend =JSON.stringify(data);

$.ajax({

            dataType: "json",
            data:dataTosend,
            contentType:"application/json",
            url:"http://129.151.122.220:8080/api/Client/",
            type:"PUT",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}