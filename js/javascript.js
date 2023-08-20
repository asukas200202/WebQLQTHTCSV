var accountList = [
    {
        username: "admin",
        passwork: "admin"
    }
]




/* Cuộn thẻ header */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky');
        }
    })
})
// chuyển slide
var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 3000)
/* Gotop  */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#gotop').addClass('show');
        } else
            $('#gotop').removeClass('show');
    })
    $('#gotop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })
})
/* chart */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1300) {
            $('.chart-layout__item').addClass('show');
        } else
            $('.chart-layout__item').removeClass('show');
    })
})
// search
$(document).ready(function () {
    $("#kw").on('keyup', function (event) {
        var kw = $("#kw").val().toLowerCase()
        $(".item").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(kw) > -1)
        })
    })
    $("#btnsearch").click(function () {
        var k = $("#kw").val().toLowerCase()
        var items = $("div.item div.bot h1")
        for (var i = 0; i < items.length; i++) {
            if ($(items[i]).text().toLowerCase().indexOf(k) >= 0)
                $(items[i]).parent().parent().parent().css("outline", "2px solid red")
        }
        setTimeout(function () {
            $("div.item").css("outline", "none")
        }, 2000)
    })
})
/* danh muc sp */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.danhmuc').addClass('fixed');
        } else
            $('.danhmuc').removeClass('fixed');
    })
})
/* fixed cham soc */
$(document).ready(function () {
    $(window).scroll(function () {
        if (($(this).scrollTop() > 257) && ($(this).scrollTop() < 2369)) {
            $('.unfixed').addClass('fixed');
        } else {
            $('.unfixed').removeClass('fixed');
        }
        if ($(this).scrollTop() > 2369) {
            $('.unfixed').addClass('absolute');
        }
        else {
            $('.unfixed').removeClass('absolute');
        }
    })
})


// đóng/mở menu
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
mobileMenu.onclick = function () {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}
// tự đóng menu
var menuIems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuIems.length; i++) {
    var menuItem = menuIems[i];
    menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}


