const accordionData = [
  {
    title: "step 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloreillum veniam quaerat ullam, doloremque dolorum architecto adipisciveritatis amet.",
  },
  {
    title: "step 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloreillum veniam quaerat ullam, doloremque dolorum architecto adipisciveritatis amet.",
  },
  {
    title: "step 3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla doloreillum veniam quaerat ullam, doloremque dolorum architecto adipisciveritatis amet.",
  },
];
const accordionContainer = document.querySelector(".accordion-container");

const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>`;

const generateListItemContent = (title, arrowIcon, content) =>
  `
    <div class="accordion-title">
      <div>${title}</div>
      <div class="arrow">${arrowIcon}</div>
    </div>
    <div class="accordion-content">${content}</div>
  `;

function showAccordion() {
  const accordionListItems = accordionData.map((acc) => {
    const li = document.createElement("li");
    li.innerHTML = generateListItemContent(acc.title, arrowIcon, acc.content);
    return li;
  });

  accordionListItems.forEach((listItem) => {
    accordionContainer.appendChild(listItem);
  });

  accordionListItems.forEach((listItem) => {
    listItem.addEventListener("click", () => {
      // Toggle the active class on click
      const listItemAccContent = listItem.querySelector(".accordion-content");
      const listItemArrow = listItem.querySelector(".arrow");
      const isActive = listItemAccContent.classList.contains("active");
      // Close all other accordion items
      accordionListItems.forEach((listItem) => {
        listItem.querySelector(".accordion-content").classList.remove("active");
        listItem.querySelector(".arrow").classList.remove("rotate-arrow");
      });

      if (!isActive) {
        listItemAccContent.classList.add("active");
        listItemArrow.classList.add("rotate-arrow");
      } else {
        listItemAccContent.classList.remove("active");
        listItemArrow.classList.remove("rotate-arrow");
      }
    });
  });
}
showAccordion();
