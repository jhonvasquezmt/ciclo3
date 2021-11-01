function postCate (){
    var data={
        
        name:$("#name").val(),
        description:$("#description").val(),
        
    }
//var dataTosend =JSON.stringify(data);

$.ajax({

            dataType: "json",
            data:data,
            url:"http://129.151.122.220:8080/api/Category/save",
            type:"POST",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}

function getCate (){
    
    $.ajax({

        dataType: "json",
        url:"http://129.151.122.220:8080/api/Category/all",
        type:"GET",
        success: function(response){
            
            for (i = 0; i< response.items.length; i++){
                $("#items").append("<tr>");
                $("#items").append("<td>"+response.items[i].name+"</td>");
                $("#items").append("<td>"+response.items[i].cabins+"</td>");
                $("#items").append('<td><button onclick="delCate('+response.items[i].id+')">Borrar</button></td>');
                $("#items").append('<td><button onclick="getCateId('+response.items[i].id+')">Editar</button></td>');
                $("#items").append("</tr>");
            }
                
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
});
}

function delCate (idItem){
    var dataDel={
        id:idItem,
        
    }
var dataTosend =JSON.stringify(dataDel);

$.ajax({

            dataType: "json",
            data:dataTosend,
            contentType:"application/json",
            url:"http://129.151.122.220:8080/api/Category/",
            type:"DELETE",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}

function getCateId (idItem){
    
    $.ajax({

        dataType: "json",
        url:"http://129.151.122.220:8080/api/Category/"+idItem,
        type:"GET",
        success: function(response){
            
            console.log(response);
            var item= response.items[0];
                $("#name").val(item.name);
                $("#description").val(item.description);
                
        },
        error: function(jqXHR, textStatus, errorThrown){

        }
});
}

function putCateId (){
    var data={
        name:$("#name").val(),
        description:$("#description").val(),
        
    }
var dataTosend =JSON.stringify(data);

$.ajax({

            dataType: "json",
            data:dataTosend,
            contentType:"application/json",
            url:"http://129.151.122.220:8080/api/Category/",
            type:"PUT",
            success: function(response){
                console.log(response);
            },
            error: function(jqXHR, textStatus, errorThrown){

            }
});
}