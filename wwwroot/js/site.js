// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code
$(document).ready(function () {

    console.log("Entrou no js")



    $("#btnTranslate").on("click", function (event) {
      
        console.log("Entrou no click")
        var theUrl = "https://api.deepl-free.com/v2/translate?auth_key=5652c0b9-adcf-7f2e-f6a2-3a577f700dc9:fx&text=Test&target_lang=pt-BR";

        var text = $("#textArea").val();


        var target_lang = $("#selectLanguage").val();

        httpGet(theUrl, text, target_lang);

    })



});

function httpGet(theUrl, text, target_lang) {
    var xmlHttp = new XMLHttpRequest();
    var deepl = theUrl;
    xmlHttp.open("POST", deepl, false); // false for synchronous request

    var t = text;

    var tl = target_lang;

    xmlHttp.send(t, tl);
    return xmlHttp.responseText;
}



