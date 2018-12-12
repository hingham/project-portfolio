'use strict'

console.log('hello');

$('div.themes button').click(function () {
  let curClass = $(this).parent().parent().attr('class').split(' ')[1];
  console.log(this.id, curClass);

  if(this.id==='forest'){
    console.log($('#myVideo').attr('src'));
    $('#myVideo').attr('src', 'media/forest.mp4');

}

if(this.id==='water'){
    console.log($('#myVideo').attr('src'));
    $('#myVideo').attr('src', 'media/water_waves.mp4');

}

if(this.id==='mountain'){
    console.log($('#myVideo').attr('src'));
    $('#myVideo').attr('src', 'media/mountains.mov');

}
  console.log($('.water'));
  $(`.${curClass}`).removeClass(`${curClass}`).addClass(this.id);

})

$('#project-screen button').on('click', function(){
  
})
