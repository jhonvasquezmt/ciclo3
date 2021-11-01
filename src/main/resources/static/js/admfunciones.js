function postAdmin (){
    var data={
        
        name:$("#name").val(),
        email:$("#email").val(),
        password:$("#password").val()
    }
//var dataTosend =JSON.stringify(data);

$.ajax({

            dataType: "json",
            data:data,
            url:"http://129.151.122.220:8080/api/Admin/save",
            type:"POST",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}

function getAdmin (){
    
    $.ajax({

        dataType: "json",
        url:"http://129.151.122.220:8080/api/Admin/all",
        type:"GET",
        success: function(response){
            
            for (i = 0; i< response.items.length; i++){
                $("#items").append("<tr>");
                $("#items").append("<td>"+response.items[i].name+"</td>");
                $("#items").append("<td>"+response.items[i].email+"</td>");
                $("#items").append('<td><button onclick="delAdmin('+response.items[i].id+')">Borrar</button></td>');
                $("#items").append('<td><button onclick="getAdminId('+response.items[i].id+')">Editar</button></td>');
                $("#items").append("</tr>");
            }
                
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
});
}

function delAdmin (idItem){
    var dataDel={
        id:idItem,
        
    }
var dataTosend =JSON.stringify(dataDel);

$.ajax({

            dataType: "json",
            data:dataTosend,
            contentType:"application/json",
            url:"http://129.151.122.220:8080/api/Admin",
            type:"DELETE",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}

function getAdminId (idItem){
    
    $.ajax({

        dataType: "json",
        url:"http://129.151.122.220:8080/api/Admin/"+idItem,
        type:"GET",
        success: function(response){
            
            console.log(response);
            var item= response.items[0];
                $("#myId").val(item.id);
                $("#name").val(item.name);
                $("#email").val(item.email);
                $("#password").val(item.password);
            
                
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
});
}

function putAdminId (){
    var data={
        id:$("#myId").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        password:$("#password").val()
    }
var dataTosend =JSON.stringify(data);

$.ajax({

            dataType: "json",
            data:dataTosend,
            contentType:"application/json",
            url:"http://129.151.122.220:8080/api/Admin",
            type:"PUT",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}