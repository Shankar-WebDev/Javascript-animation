///form in from method you don't have to specify the intial state.(it will figure out by itself)


// gsap.from(".box",   {
//     y:-200,
//     duration:3,
//     ease:"liner",
//     repeat:-1,
//     yoyo:true,
// })


//fromTo in formTo method  you Have to specify defult value, and also the new animation state.


gsap.fromTo(
    ".box2",
    { y: 200, opacity: 0 },
    {
      opacity: 1,
      y: -200,
      duration: 3,
      ease: "linear",
      borderRadius: 0,
      repeat: -1,
      yoyo: true,
    }
  );