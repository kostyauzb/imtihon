fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    function createCard(job) {
      const card = document.createElement("div");
      card.classList.add("yashiq");

      card.innerHTML = `
      <${job.logoBackground}>
      <img src="${job.logo}" alt="" />
      <div class="yashiq_con">.
          <p>${job.postedAt} . ${job.contract}</p>
          <h3><a href='${job.website}'>${job.position}</a></h3>
          <p>${job.company}</p>
          <h6>${job.location}</h6>
          </div>
          `;

      return card;
    }

    function renderResults(filteredData) {
      const resultsContainer = document.getElementById("resultsContainer");
      resultsContainer.innerHTML = "";

      filteredData.forEach((job) => {
        const resultItem = createCard(job);
        resultsContainer.appendChild(resultItem);
      });
    }
    window.search = function () {
      const searchTerm = document
        .getElementById("searchInput")
        .value.toLowerCase();
      const locationTerm = document
        .getElementById("locationInput")
        .value.toLowerCase();
      const filteredData = data.filter(
        (item) =>
          (item.position.toLowerCase().includes(searchTerm) ||
            item.company.toLowerCase().includes(searchTerm)) &&
          (item.location.toLowerCase().includes(locationTerm) ||
            locationTerm === "")
      );

      renderResults(filteredData);
    };

    renderResults(data);

    //////////////////////////////  dar mode
    const flipTheme = (theme) => {
      if (theme === "dark") {
        moon.style.display = "none";
        sun.style.display = "block";
        document.body.style.backgroundColor = "#121721";
        document.body.style.color = "#fff";
      } else {
        moon.style.display = "block";
        sun.style.display = "none";
        document.body.style.color = "#000";
        document.body.style.backgroundColor = "";
      }

      title.classList.toggle("dark");
      themeText.classList.toggle("dark");
      input.classList.toggle("dark");
      Array.from(cards).forEach((card) => card.classList.toggle("dark"));
      blog.classList.toggle("dark");
      login.style.color = "var(--electric)";
      stats.classList.toggle("dark");
    };

    moon.addEventListener("click", () => flipTheme("dark"));
    sun.addEventListener("click", () => flipTheme("light"));
  });
// .catch((error) => console.error("Error fetching data:", error));
