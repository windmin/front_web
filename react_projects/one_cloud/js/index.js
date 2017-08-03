$(document).ready(function(){
    //hover-row1-1
    $("article.article-1-1").hover(
        function(){
            $(".index-main-article-1-s1").css(
                {
                    "display":"block",
                    "left":($(document).outerWidth()-$(".max-page-width").outerWidth())/2+$(".article-1-1").outerWidth(),
                    "width":$("article.article-1-1").outerWidth()
                }
            );
//            $(".index-main-article-1-s1").css("left",($(document).outerWidth()-$(".max-page-width").outerWidth())/2+$(".article-1-1").outerWidth());
        },
        function(){
            $(".index-main-article-1-s1").css("display","none");
        }
    );

    //hover-row1-2
    $("article.article-1-3").hover(
        function(){
            $(".index-main-article-1-s2").css(
                {
                    "display":"block",
                    "right":($(document).outerWidth()-$(".max-page-width").outerWidth())/2+$(".article-1-3").outerWidth(),
                    "width":$("article.article-1-3").outerWidth()
                }
            );
        },
        function(){
            $(".index-main-article-1-s2").css("display","none");
        }
    );
//    alert(($(document).outerWidth()-$(".max-page-width").outerWidth())/2+$(".article-1-1").outerWidth());
//    alert($(document).outerWidth());
//    alert($(".max-page-width").outerWidth());
//    alert($(".article-1-1").outerWidth());
});