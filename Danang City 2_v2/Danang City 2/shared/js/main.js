$(document).ready(function(){
    $('.mainvisual_gallery .box_mainvisual').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    window.onscroll = function() {scrollFunction()};
    var a=300;
    function scrollFunction()
        {
            vitrihientai = $(window).scrollTop();
        console.log(vitrihientai);
            if (document.body.scrollTop > 100 && a>=vitrihientai || document.documentElement.scrollTop > 100 && a>=vitrihientai)
                {
                    document.getElementById("myBtn").style.display = "block";
                    a=vitrihientai;
                }
            else
                {
                    document.getElementById("myBtn").style.display = "none";
                    a=vitrihientai;
                }
        }
    document.getElementById('myBtn').addEventListener("click", function()
        {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
    $(window).scroll(function()
        {
            if($(window).scrollTop() + $(window).height() == $(document).height())
                {
                    document.getElementById("myBtn").style.display = "block";
                }
        });
});