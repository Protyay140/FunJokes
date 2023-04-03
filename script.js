
console.log($('#head').outerText);


function random(word) {
    $.get('https://v2.jokeapi.dev/joke/Any?contains='+word, function(data){
    var fun;    
    if(data.setup == undefined)
            fun = data.joke;
    else
        fun = data.setup;
        
    // console.log(fun);
    $('.joke').html(`" ${fun} "`).css('color','black');
    });
}

// $('.btn').click(random);

$('#btn').click((e)=>{
    e.preventDefault();
    var word = search.value;
    random(word); 
})
