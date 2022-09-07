// navigation bar in expert page

let options = {
  threshold: 1.0,
};

let stepOneNumber = document.querySelector("#step-1");
let stepTwoNumber = document.querySelector("#step-2");
let stepThreeNumber = document.querySelector("#step-3");
let stepFourNumber = document.querySelector("#step-4");
let stepFiveNumber = document.querySelector("#step-5");
let stepSixNumber = document.querySelector("#step-6");

stepOneNumber.addEventListener("click", () => {
  document.querySelector("#registration").scrollIntoView();
});

const firstStep = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let stepOneNumber = document.querySelector("#step-1");
      stepOneNumber.classList.remove("non-saturate");
      stepOneNumber.nextElementSibling.classList.remove("in-active");
      // console.log(entry);
    } else {
      let stepOneNumber = document.querySelector("#step-1");
      stepOneNumber.classList.add("non-saturate");
      stepOneNumber.nextElementSibling.classList.add("in-active");
    }
  });
}, options);

const secondStep = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let stepTwoNumber = document.querySelector("#step-2");
      stepTwoNumber.classList.remove("non-saturate");
      stepTwoNumber.nextElementSibling.classList.remove("in-active");
    } else {
      let stepTwoNumber = document.querySelector("#step-2");
      stepTwoNumber.classList.add("non-saturate");
      stepTwoNumber.nextElementSibling.classList.add("in-active");
    }
  });
}, options);

const thirdStep = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let stepThreeNumber = document.querySelector("#step-3");
      stepThreeNumber.classList.remove("non-saturate");
      stepThreeNumber.nextElementSibling.classList.remove("in-active");
    } else {
      let stepThreeNumber = document.querySelector("#step-3");
      stepThreeNumber.classList.add("non-saturate");
      stepThreeNumber.nextElementSibling.classList.add("in-active");
    }
  });
}, options);

const fourthStep = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let stepFourNumber = document.querySelector("#step-4");
      stepFourNumber.classList.remove("non-saturate");
      stepFourNumber.nextElementSibling.classList.remove("in-active");
    } else {
      let stepFourNumber = document.querySelector("#step-4");
      stepFourNumber.classList.add("non-saturate");
      stepFourNumber.nextElementSibling.classList.add("in-active");
    }
  });
}, options);

const fifthStep = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let stepFiveNumber = document.querySelector("#step-5");
      stepFiveNumber.classList.remove("non-saturate");
      stepFiveNumber.nextElementSibling.classList.remove("in-active");
    } else {
      let stepFiveNumber = document.querySelector("#step-5");
      stepFiveNumber.classList.add("non-saturate");
      stepFiveNumber.nextElementSibling.classList.add("in-active");
    }
  });
}, options);

const sixthStep = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let stepSixNumber = document.querySelector("#step-6");
      stepSixNumber.classList.remove("non-saturate");
      stepSixNumber.nextElementSibling.classList.remove("in-active");
    } else {
      let stepSixNumber = document.querySelector("#step-6");
      stepSixNumber.classList.add("non-saturate");
      stepSixNumber.nextElementSibling.classList.add("in-active");
    }
  });
}, options);

firstStep.observe(document.querySelector("#registration"));
secondStep.observe(document.querySelector("#configure"));
thirdStep.observe(document.querySelector("#design"));
fourthStep.observe(document.querySelector("#post"));
fifthStep.observe(document.querySelector("#leave"));
sixthStep.observe(document.querySelector("#employees"));
