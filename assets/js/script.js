const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
    gsap.to(".btn", 1, {
        opacity: 0,
        y: -40,
        ease: Expo.easeInOut,
    });

    gsap.to(".text-wrapper > div", 1, {
        x: "500",
        ease: Expo.easeInOut,
        delay: 1,
        stagger: 0.1,
        delay: 1,
        duration: 1,
        y: "100%",
        ease: "power4.out"
    });

    gsap.to(".text-wrapper", 3, {
        y: -600,
        scale: 4.5,
        rotate: -90,
        ease: Expo.easeInOut,
        delay: 1.5,
        delay: 1,
        duration: 1,
        y: "100%",
        ease: "power4.out"
    });

    gsap.to(".text", 1, {
        opacity: 1,
        ease: Expo.easeInOut,
        delay: 3,
    });

    gsap.to(".text-wrapper > div", 4, {
        x: "-3500",
        ease: Expo.easeInOut,
        delay: 3.5,
        stagger: 0.05,
        
    });

    gsap.to(".text-container", 2, {
        bottom: "-100%",
        ease: Expo.easeInOut,
        delay: 6,
        
    });

});

$('.btn').on('click', function () {
    $(".preload-container").fadeIn("slow");
    setTimeout(function () {
        $(".preload-container").fadeOut("fast");
    }, 8000);
});


const open = document.querySelector('.container-bars');
		const close = document.querySelector('.close');
		var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
		open.addEventListener('click', () => {
			if (tl.reversed()) {
				tl.play();
			} else {
				tl.to('nav', { right: 0 })
					.to('nav', { height: '100vh' }, '-=.1')
					.to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
					.to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
					.to('nav h2', { opacity: 1 }, '-=1');
			}
		});

		close.addEventListener('click', () => {
			tl.reverse();
		});
        const video = document.getElementById("video");
        const circlePlayButton = document.getElementById("circle-play-b");
        
        function togglePlay() {
            if (video.paused || video.ended) {
                video.play();
            } else {
                video.pause();
            }
        }
        
        circlePlayButton.addEventListener("click", togglePlay);
        video.addEventListener("playing", function () {
            circlePlayButton.style.opacity = 0;
        });
        video.addEventListener("pause", function () {
            circlePlayButton.style.opacity = 1;
        });


        