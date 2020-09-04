let gradAnimate1 = gsap.timeline({
  repeat: -1,
  yoyo: true
})

gradAnimate1
  .to('.gradDark1', 8 , {
    ease: 'power1.inOut',
    transform: 'translateY(30%)'
  })



  let gradAnimate2 = gsap.timeline({
  repeat: -1,
  yoyo: true
})

gradAnimate2
  .to('.gradDark2', 8 , {
    ease: 'power1.inOut',
    transform: 'translateY(30%)'
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

gradAnimate4
  .to('.gradDark4', 4 , {
    ease: 'power1.inOut',
    transform: 'translateY(30%)'
  })

let gradAnimate5 = gsap.timeline({
  repeat: -1,
  yoyo: true
})

gradAnimate5
  .to('.gradLight1', 7 , {
    ease: 'power1.inOut',
    transform: 'translateY(30%)'
  })

let gradAnimate6 = gsap.timeline({
  repeat: -1,
  yoyo: true
})

gradAnimate6
  .to('.gradLight2', 4 , {
    ease: 'power1.inOut',
    transform: 'translateY(30%)'
  }) 
  
gradAnimate1.pause()
gradAnimate2.pause()
gradAnimate3.pause()
gradAnimate4.pause()
gradAnimate5.pause()
gradAnimate6.pause()