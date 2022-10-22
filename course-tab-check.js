window.addEventListener("load", () => {
  // tabs content

  let tabContent = document.querySelector(".w-tab-content");

  // tab menu variables
  let faqTab = document.querySelector("[tab='faq']");
  let blogTab = document.querySelector("[tab='blogs']");
  let caseTab = document.querySelector("[tab='case']");
  let ratingTab = document.querySelector("[tab='rating']");

  // tab content variables
  let faqTabContent = document.querySelector("[tab-content='faq']");
  let blogsTabContent = document.querySelector("[tab-content='blogs']");
  let caseTabContent = document.querySelector("[tab-content='case']");
  let ratingTabContent = document.querySelector("[tab-content='ratings']");

  let faqEmpty = faqTabContent.querySelector(".w-dyn-empty");
  let blogsEmpty = blogsTabContent.querySelector(".w-dyn-empty");
  let caseEmpty = caseTabContent.querySelector(".w-dyn-empty");
  let ratingEmpty = ratingTabContent.querySelector(".w-dyn-empty");

  // console.log(faqTabContent);
  // console.log(faqEmpty);
  // console.log(blogsEmpty);
  // console.log(caseEmpty);
  // console.log(ratingEmpty);
  // console.log(blogsTabContent)
  // console.log(caseTabContent)
  // console.log(ratingTabContent)
  // console.log(blogTab)

  function checkFaq() {
    if (faqEmpty !== null) {
      faqTab.style.display = "none";
      faqTab.setAttribute("data", "empty-tab")
      faqTabContent.classList.remove("w--tab-active");
      faqTabContent.setAttribute("data", "empty");
    } else {
      faqTabContent.setAttribute("data", "nonempty");
      faqTab.setAttribute("data", "non-empty-tab")
    }
  }
  function checkBlog() {
    if (blogsEmpty !== null) {
      blogTab.style.display = "none";
    blogTab.setAttribute("data", "empty-tab")
      blogsTabContent.classList.remove("w--tab-active");
      blogsTabContent.setAttribute("data", "empty");
    } else {
      blogsTabContent.setAttribute("data", "nonempty");
      blogTab.setAttribute("data", "non-empty-tab")

    }
  }
  function checkCases() {
    if (caseEmpty !== null) {
      caseTab.style.display = "none";
      caseTab.setAttribute("data", "empty-tab")
      caseTabContent.classList.remove("w--tab-active");
      caseTabContent.setAttribute("data", "empty");
    } else {
      caseTabContent.setAttribute("data", "nonempty");
      caseTab.setAttribute("data", "non-empty-tab")

    }
  }
  function checkRatings() {
    if (ratingEmpty !== null) {
      ratingTab.style.display = "none";
      ratingTab.setAttribute("data", "empty-tab")
      ratingTabContent.classList.remove("w--tab-active");
      ratingTabContent.setAttribute("data", "empty");
    } else {
      ratingTabContent.setAttribute("data", "nonempty");
      ratingTab.setAttribute("data", "non-empty-tab")
    }
  }

  checkBlog();
  checkFaq();
  checkCases();
  checkRatings();

  // console.log(tabContent);

  // let allTabs = Array.from(document.querySelector("#filtered-tabs").children)
  // console.log(allTabs)



  // look for divs that they're not empty

  let nonEmptyDivs = document.querySelectorAll("[data='nonempty']");
  let nonEmptyTabs = document.querySelectorAll("[data='non-empty-tab']");

  // console.log(nonEmptyDivs);
  // console.log(nonEmptyTabs)

  nonEmptyTabs.forEach((n) => {
    n.classList.remove("w--current");
  })

  nonEmptyDivs[0].classList.add("w--tab-active");
  nonEmptyTabs[0].classList.add("w--current")
});

