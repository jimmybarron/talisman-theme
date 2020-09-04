// Top left to bottom left

let gradAnimate1 = gsap.timeline({
  repeat: -1,
  yoyo: true
})

gradAnimate1
  .to('.gradDark1', 4 , {
    ease: 'power1.inOut',
    css: {
      backgroundImage: 'radial-gradient(50% 80% at 0% 70%, #FF940C 0%, rgba(255, 0, 0, 0) 100%)'
    }
  })



  let gradAnimate2 = gsap.timeline({
  repeat: -1,
  yoyo: true
})

// Bottom Right to Top Left

gradAnimate2
  .to('.gradDark2', 7 , {
    ease: 'power1.inOut',
    css: {
      backgroundImage: 'radial-gradient(60% 20% at 100% 15%, #FF940C 0%, rgba(255, 0, 0, 0) 100%)'
    }
  })


let gradAnimate3 = gsap.timeline({
  repeat: -1,
  yoyo: true
})

gradAnimate3
  .to('.gradDark3', 10 , {
    ease: 'power1.inOut',
    transform: 'translateY(30%)'
  })


let gradAnimate4 = gsap.timeline({
  repeat: -1,
  yoyo: true
})

// gradAnimate4
//   .to('.gradDark4', 4 , {
//     ease: 'power1.inOut',
//     transform: 'translateY(30%)'
//   })

// let gradAnimate5 = gsap.timeline({
//   repeat: -1,
//   yoyo: true
// })

// Bottom Left to Bottom Right

// gradAnimate5
//   .to('.gradLight1', 5 , {
//     ease: 'power1.inOut',
//     css: {
//       backgroundImage: 'radial-gradient(30% 40% at 40% 10%, #FFD349 0%, rgba(255, 0, 0, 0) 100%)'
//     }
//   })

// let gradAnimate6 = gsap.timeline({
//   repeat: -1,
//   yoyo: true
// })

// Top Right to Top Left

gradAnimate6
  .to('.gradLight2', 3 , {
    ease: 'power1.inOut',
    css: {
      backgroundImage: 'radial-gradient(40% 40% at 10% 90%, #FFD349 0%, rgba(255, 0, 0, 0) 100%)'
    }
  }) 
  
// gradAnimate1.pause()
// gradAnimate2.pause()
// gradAnimate3.pause()
// gradAnimate4.pause()
// gradAnimate5.pause()
// gradAnimate6.pause()