$(document).ready(function () {
	// Sidebar
    function sideBar() {
        $('.menu-click').click(function () {
            $('.left-menu').css('width','200px');
        })
        $('.left-menu i').click(function () {
            $('.left-menu').css('width', '0');
        })
    }
    sideBar();

    var Slide = 0;
    /*Banner Slider*/
    function slider() {
        Slide += 1;

        if (Slide == 2) {
            Slide = 0;
        }

        moveLeft = Slide * -100;

        $(".slider").animate({
            marginLeft: moveLeft.toString() + "%"
        }, 1000);
    };

    /*For Next Slider Banner*/
    function nextSlider() {
        Slide += 1;

        if (Slide == 2) {
            Slide = 0;
        }

        moveLeft = Slide * -100;

        $(".slider").animate({
            marginLeft: moveLeft.toString() + "%"
        }, 1000);
    }

    /*Previous Slider*/
    function prevSlider() {
        Slide -= 1;

        if (Slide == -1) {
            Slide = 1;
        }

        moveLeft = Slide * -100;

        $(".slider").animate({
            marginLeft: moveLeft.toString() + "%"
        }, 1000);
    }

    function intervalSlide() {
        setInterval(slider, 5000);
    }

    intervalSlide();
});
