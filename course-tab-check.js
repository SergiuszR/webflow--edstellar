window.addEventListener("load", () => {
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
    
    //   console.log(faqTabContent)
    //   console.log(faqEmpty)
    //   console.log(blogsEmpty)
    //   console.log(caseEmpty)
    //   console.log(ratingEmpty)
    //   console.log(blogsTabContent)
    //   console.log(caseTabContent)
    //   console.log(ratingTabContent)

    //   console.log(blogTab)
  

function checkFaq() {
  if (faqEmpty !== null) {
    faqTab.style.display = "none";
    console.log("one")
  }
}
function checkBlog() {
  if (blogsEmpty !== null) {
    blogTab.style.display = "none";
    console.log("two")
  }
}
function checkCases() {
  if (caseEmpty !== null) {
    caseTab.style.display = "none";
    console.log("three")
  }
}
function checkRatings() {
  if (ratingEmpty !== null) {
    ratingTab.style.display = "none";
    console.log("four")
  }
}

checkBlog();
checkFaq();
checkCases()
checkRatings()

        
})
