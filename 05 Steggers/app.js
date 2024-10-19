gsap.set('.box', {
  borderRadius: 0,
});

gsap.to('.box', {
  borderRadius: 100,
  duration:1,
  y: -100,
  ease: 'power',
  yoyo: true,
  repeat: -1,
  stagger:{
    amount:4,
    each:0,
    from:0,
  },
});
