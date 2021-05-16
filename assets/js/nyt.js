$('.search-btn').on('click',function(){
    
})
function clearAll(){
    $('.about-what').val("")
    $('.count').val("")
    $('.pub-year').val("")
    $('.start-year').val("")
    $('.end-year').val("")


}
function clearAllResult(){
    $('.agex-main-response').html("")
    if($('.agex-main-response').html()){
        document.getElementsByClassName('clear-news-btn')[0].style.visibility='visible' 
      }
}

function ajaxObject(){
   
var aboutInput = $('.about-what').val()
var countInput = $('.count').val()
var startYearInput = $('.start-year').val()
var endYearInput = $('.end-year').val()
var obj = {
    q:aboutInput,
    numberOfRecords:countInput,
    'api-key': 'xLVvfg22jIB0HAQkQRcpdG7AQCaKBd6c'
    }
    if(startYearInput){
    obj["start-year"]=startYearInput + "0101"
    }
    if(endYearInput){
    obj["end-year"]=endYearInput + "1231"
    }
    return obj
}

 function responseFunction(response){
     var news = response.response.docs
    for(let j = 0;j<news.length;j++){
        var newsmain = news[j]
        
       
    }
    var title = newsmain.headline.main;
    var abstract = newsmain.abstract;
    var webUrl = newsmain.web_url;
    $('.agex-main-response').append(`<div class="news">
    <h2><a href="${webUrl}" target="_blank">${title}</a></h2>
    <p>${abstract}</p><hr>
    </div>`)
 }
$('.clear-news-btn').on('click',clearAllResult)
$('.clear-values-btn').on('click',clearAll)
$('.search-btn').on('click',function(){
    clearAllResult()
    var data = ajaxObject();
$.ajax({
    url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
    data: data,
    method: 'GET',
}).done(responseFunction);
})