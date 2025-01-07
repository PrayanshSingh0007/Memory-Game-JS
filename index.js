const emojis = ["🐶","🐶", "🐱", "🐱", "🐭","🐭", 
 "🐹","🐹",  "🐰","🐰", "🦊", "🦊","🐻", "🐻","🐼", "🐼"]


 var shuf_emojis = emojis.sort(() => (Math.random() > .5 ) ? 2 : -1 );
document.addEventListener('DOMContentLoaded', () => {
    for(let i = 0; i < emojis.length; i++){
        let box = document.createElement('div');
        box.className= 'item';
        box.innerHTML = shuf_emojis[i];

        box.onclick = function(){
            box.classList.add('boxopen')
            setTimeout(() => {
               if(document.querySelectorAll('.boxopen').length > 1){
                   if(document.querySelectorAll('.boxopen')[0].innerHTML
                    ==document.querySelectorAll('.boxopen')[1].innerHTML){
                       document.querySelectorAll('.boxopen')[0].classList.add
                        ('boxmatch');
                          document.querySelectorAll('.boxopen')[1].classList.add
                            ('boxmatch');

                            document.querySelectorAll('.boxopen')[0].classList.remove
                            ('boxopen');
                            document.querySelectorAll('.boxopen')[0].classList.remove
                            ('boxopen');

                            if(document.querySelectorAll('.boxmatch').length == emojis.length){
                                alert('You Win');
                            }
                    }
                   else{
                       document.querySelectorAll('.boxopen')[1].classList.remove(
                            'boxopen'
                       )
                        document.querySelectorAll('.boxopen')[0].classList.remove(
                             'boxopen'
                          )
                   }
               }
            }, 1000);
        }

        document.querySelector('.game').appendChild(box);
    }
});