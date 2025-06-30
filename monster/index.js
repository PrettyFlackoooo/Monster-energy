      gsap.registerPlugin(ScrollTrigger);

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".two",
                start: "0% 95%",
                end: "70% 50%",
                scrub: true,
               
            }
        })

        tl.to("#can", {
            top: "120%",
            left: "5%"
        },'can')
        tl.to("#cubes", {
            top: "164%",
            left: "23%"
        },'can')
        tl.to("#ice-cube", {
            width:"10%",
            top: "108%",
            left: "55%"
        },'can')

        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".three",
                start: "0% 95%",
                end: "20% 50%",
                scrub: true,
               
            }
        })

       tl2.from("#butterflyy",{
            rotate:"-90deg",
            left:"-100%",
            top:"100%"
        },'cf')
        tl2.from("#mari",{
            rotate:"-90deg",
            left:"-100%",
            top:"160%"
        },'cf')

        tl2.from("#aps",{
            rotate:"90deg",
            left:"100%",
            top:"100%"
        },'cf')
        tl2.from("#apple-bad",{
            rotate:"90deg",
            left:"100%",
            top:"160%"
        },'cf')
        tl2.from("#pine-ple",{
            rotate:"90deg",
            left:"100%",
            top:"100%"
        },'cf')
        tl2.from("#pipe-punch",{
            rotate:"90deg",
            left:"100%",
            top:"160%"
        },'cf')

       

