window.addEventListener("load", () => {
  let filterHeader = document.querySelector(".filter_header");
  let sectionHeadWithSearch = document.querySelector(
    ".section-head.with-search"
  );

  let pickedSort = document.querySelector("#picked-dropdown");
  let pickedSortDropdown = document.querySelector(
    "#picked-sort-dropdown"
  ).children;
  let pickedSortDropdownArr = Array.from(pickedSortDropdown);

  window.addEventListener("click", () => {
    pickedSortDropdownArr.forEach((n) => {
      let el = document.getElementsByClassName("w-dropdown-link w--current");
      pickedSort.innerHTML = el[0].textContent;
    });
  });

  // console.log(pickedSortDropdown.children);

  const interval = setInterval(function () {
    let activeFiltersBox = document.querySelector(".filter_tags-wrapper");
    let activeFiltersCounter = document.querySelector("#filter-count--value");
    activeFiltersCounter.innerHTML = activeFiltersBox.children.length;
    if (activeFiltersBox.children.length < 1) {
      filterHeader.style.display = "none";
      sectionHeadWithSearch.style.marginBottom = "3.75em";
    } else {
      filterHeader.style.display = "flex";
      sectionHeadWithSearch.style.marginBottom = "1.25em";
    }
  }, 100);

  // let trainingTypeList = document.querySelector("#training-type-list");
  let trainingCategoriesList = document.querySelector("#categories-list");
  let trainingSubcategoriesList = document.querySelector("#subcategories-list");

  let typeItems = document.querySelectorAll("[training]"); // training items
  let categoryItems = Array.from(document.querySelectorAll("[cat]")); // category items
  let subCategoryItems = Array.from(document.querySelectorAll("[sub]")); // subcategory items

  trainingCategoriesList.innerHTML = "";
  trainingSubcategoriesList.innerHTML = "";

  // console.log(typeItems);
  // console.log(categoryItems);
  // console.log(subCategoryItems);

  typeItems.forEach((n) => {
    n.addEventListener("click", () => {
      let label = n.getAttribute("training");
      // console.log(label);
      let filtered = categoryItems.filter(
        (n) => n.getAttribute("cat") === label
      );
      trainingCategoriesList.innerHTML = "";
      filtered.forEach((n) => {
        trainingCategoriesList.append(n);
      });
    });
  });

  categoryItems.forEach((n) => {
    n.addEventListener("click", () => {
      let categoryLabel = n.getAttribute("value");
      // console.log(categoryLabel);
      let filtered = subCategoryItems.filter(
        (n) => n.getAttribute("sub") === categoryLabel
      );
      // console.log(filtered);
      trainingSubcategoriesList.innerHTML = "";
      filtered.forEach((n) => {
        trainingSubcategoriesList.append(n);
      });
    });
  });
});
