window.addEventListener("load", () => {

    // tabs content
    
    let tabContent = document.querySelector(".w-tab-content")
    
    // tab menu variables
    let faqTab = document.querySelector("[tab='faq']");
    let blogTab = document.querySelector("[tab='blogs']");
    let caseTab = document.querySelector("[tab='case']");
    let ratingTab = document.querySelector("[tab='rating']");
    
      // tab content variables
      let faqTabContent = document.querySelector("[tab-content='faq']");
      let blogsTabContent = document.querySelector("[tab-content='blogs']")
      let caseTabContent = document.querySelector("[tab-content='case']")
      let ratingTabContent = document.querySelector("[tab-content='ratings']");
    
      let faqEmpty = faqTabContent.querySelector(".w-dyn-empty");
      let blogsEmpty = blogsTabContent.querySelector(".w-dyn-empty");
      let caseEmpty = caseTabContent.querySelector(".w-dyn-empty");
      let ratingEmpty = ratingTabContent.querySelector(".w-dyn-empty");
        
//           console.log(faqTabContent)
//           console.log(faqEmpty)
//           console.log(blogsEmpty)
//           console.log(caseEmpty)
//           console.log(ratingEmpty)
          // console.log(blogsTabContent)
          // console.log(caseTabContent)
          // console.log(ratingTabContent)
          // console.log(blogTab)
      
    
    function checkFaq() {
    
      if (faqEmpty !== null) {
        faqTab.style.display = "none";
        faqTabContent.classList.remove("w--tab-active");
        faqTabContent.setAttribute("data", "empty");
      } else {
        faqTabContent.setAttribute("data", "nonempty");
        faqTabContent.classList.add("w--current");
    
      }
    }
    function checkBlog() {
      if (blogsEmpty !== null) {
    
        blogTab.style.display = "none";
        blogsTabContent.classList.remove("w--tab-active");
        blogsTabContent.setAttribute("data", "empty");
      } else {
     blogsTabContent.setAttribute("data", "nonempty");
     blogTab.classList.add("w--current");
      }
    }
    function checkCases() {
      if (caseEmpty !== null) {
        caseTab.style.display = "none";
        caseTabContent.classList.remove("w--tab-active");
        caseTabContent.setAttribute("data", "empty");
      } else {
    caseTabContent.setAttribute("data", "nonempty");
    caseTab.classList.add("w--current");
      }
    }
    function checkRatings() {
      if (ratingEmpty !== null) {
        ratingTab.style.display = "none";
        ratingTabContent.classList.remove("w--tab-active");
        ratingTabContent.setAttribute("data", "empty");
      } else {
        ratingTabContent.setAttribute("data", "nonempty");
        ratingTab.classList.add("w--current");
      }
    }
    
    checkBlog();
    checkFaq();
    checkCases()
    checkRatings()
    
//     console.log(tabContent)
    
    // look for divs that they're not empty
    
    let nonEmptyDivs = document.querySelectorAll("[data='nonempty']")
    
//     console.log(nonEmptyDivs)
    
    nonEmptyDivs[0].classList.add("w--tab-active");
})
