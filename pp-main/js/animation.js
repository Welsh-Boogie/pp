        /** Animations **/
        gsap.registerPlugin(ScrollTrigger);

        gsap.to("#property-card1", {
            opacity: 1,
            rotation: 0,
            scrollTrigger: {
                trigger: "#property-card1",
                start: "1200px 800px",
                end: "1200px 150px",
                scrub: false,
                markers: false,
                id: "scrub",
                duration: 0.15
            }
        });

        gsap.to("#property-card2", {
            opacity: 1,
            rotation: 0,
            delay: 0.25,
            scrollTrigger: {
                trigger: "#property-card2",
                start: "1200px 800px",
                end: "1200px 150px",
                scrub: false,
                markers: false,
                id: "scrub",
                duration: 0.15
            }
        });

        gsap.to("#property-card3", {
            opacity: 1,
            rotation: 0,
            delay: 0.5,
            scrollTrigger: {
                trigger: "#property-card3",
                start: "1200px 800px",
                end: "1200px 150px",
                scrub: false,
                markers: false,
                id: "scrub",
                duration: 0.15
            }
        });

        gsap.to(".marker1", {
            x: -850,
            rotation: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".marker1",
                start: "top 800px",
                end: "top 150px",
                scrub: false,
                markers: false,
                id: "scrub"
            }
        });

        gsap.to(".marker2", {
            x: -1500,
            rotation: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".marker2",
                start: "top 800px",
                end: "top 150px",
                scrub: false,
                markers: false,
                id: "scrub"
            }
        });
        gsap.to(".anim3", {
            x: -850, // -850
            rotation: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".marker3",
                start: "top 200px",
                end: "top 150px",
                scrub: false,
                markers: false,
                id: "scrub"
            }
        });

        gsap.to(".headerIcon", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".trigger2",
                start: "top 500px",
                end: "top 150px",
                scrub: true,
                markers: false,
                id: "scrub"
            }
        });

        const options = {
            root: null,
            rootMargin: "200px",
            threshold: 0.9
        };

        let revealCallback = (entries, self) => {
            entries.forEach(entry => {
                let container = entry.target;
                let img = entry.target.querySelector("img");
                const easeInOut = "power3.out";
                const revealAnim = gsap.timeline({ ease: easeInOut });

                if (entry.isIntersecting) {
                    revealAnim.set(container, {
                        visibility: "visible"
                    });
                    revealAnim.fromTo(
                        container,
                        {
                            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                            webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
                        },
                        {
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                            webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                            duration: 1,
                            ease: easeInOut
                        }
                    );
                    revealAnim.from(img, 4, {
                        scale: 1.4,
                        ease: easeInOut,
                        delay: -1
                    });
                    self.unobserve(entry.target);
                }
            });
        };

        let revealObserver = new IntersectionObserver(revealCallback, options);


        document.querySelectorAll(".reveal").forEach(reveal => {
            revealObserver.observe(reveal);
        });