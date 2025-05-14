let fruits = ["apple", "banana","kiwi"]

const animateAll = (animate) => {
  setTimeout(()=>{
    animate(fruits[0]);
    setTimeout(()=>{
      animate(fruits[1]);
      setTimeout(()=>{
        animate(fruits[2]);
      }, 1000);
    }, 2000);
},3000)
};

const animate = (fruit) => {
  console.log(`Animating: ${fruit}`);
};

animateAll(animate);