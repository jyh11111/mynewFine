﻿ 
var clients = [];
$(function () {
    clients = $.clientsInit();
  
    
})
$.clientsInit = function () {
    var dataJson = {
        dataItems: [],
        organize: [],
        role: [],
        duty: [],
        user: [],
        authorizeMenu: [],
        authorizeButton: [],
        departmentid: "",
        loginusercode: "",
        legopart: [],
        position:[]
    };
    var init = function () {
        $.ajax({
            url: "/ClientsData/GetClientsDataJson",
            type: "get",
            dataType: "json",
            async: false,
            success: function (data) {
                dataJson.dataItems = data.dataItems;
                dataJson.organize = data.organize;
                dataJson.role = data.role;
                dataJson.duty = data.duty;
                dataJson.authorizeMenu = eval(data.authorizeMenu);
                dataJson.authorizeButton = data.authorizeButton;
                dataJson.legopart = data.legopart;
                dataJson.position = data.position;
                dataJson.user = data.user;
            }
        });
    }
    init();
    return dataJson;
}