function scrollAppear(){
    var introText= document.querySelector('.jezik_intro');
    var intoPosition= introText.getBoundingClientRect().top;
    var screenPosition= window.innerHeight;

    if(introPosition<screenPosition){
        introText.classList.add('jezik_intro');
    }
}
window.addEventListener('scroll', scrollAppear);