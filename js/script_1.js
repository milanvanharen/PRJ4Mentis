// When the user scrolls down 20px from the top of the document, make the background of the nav bar dark.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.backgroundColor = "#343a40";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}

$(document).ready(function() {

	var getMax = function() {
		return $(document).height() - $(window).height();
	}

	var getValue = function() {
		return $(window).scrollTop();
	}

	if ('max' in document.createElement('progress')) {
		var progressBar = $('progress');
		
		progressBar.attr({
			max: getMax()
		});

		$(document).on('scroll', function() {
			progressBar.attr({
				value: getValue()
			});
		});

		$(window).resize(function() {
			
			progressBar.attr({
				max: getMax(),
				value: getValue()
			});
		});

	} else {

		var progressBar = $('.progress-bar'),
			max = getMax(),
			value, width;

		var getWidth = function() {
			
			value = getValue();
			width = (value / max) * 100;
			width = width + '%';
			return width;
		}

		var setWidth = function() {
			progressBar.css({
				width: getWidth()
			});
		}

		$(document).on('scroll', setWidth);
		$(window).on('resize', function() {
			
			max = getMax();
			setWidth();
		});
	}
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})