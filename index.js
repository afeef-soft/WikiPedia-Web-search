let searchInput1 = document.getElementById("searchInput");

let searchResults1 = document.getElementById("searchResults");

let spinner1 = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    let {
        link,
        title,
        description
    } = result;

    let resultItem1 = document.createElement("div");
    resultItem1.classList.add("result-item");

    let title1 = document.createElement("a");
    title1.href = link;
    title1.target = "_blank";
    title1.textContent = title;
    title1.classList.add("result-title");
    resultItem1.appendChild(title1);

    let titleBreak1 = document.createElement("br");
    resultItem1.appendChild(titleBreak1);

    let url1 = document.createElement("a");
    url1.classList.add("result-url");
    url1.href = link;
    url1.target = "_blank";
    url1.textContent = link;
    resultItem1.appendChild(url1);

    let linkBreak1 = document.createElement("br");
    resultItem1.appendChild(linkBreak1);

    let description1 = document.createElement("p");
    description1.classList.add("link-description");
    description1.textContent = description;
    resultItem1.appendChild(description1);

    searchResults1.appendChild(resultItem1);
}

function displayResults(searchResults) {
    spinner1.classList.add("d-none");

    for (let result of searchResults) {
        // console.log(result);
        createAndAppendSearchResult(result);
    }
}

function searchWikipedia(event) {
    if (event.key === "Enter") {

        spinner1.classList.remove("d-none");
        searchResults1.textContent = "";

        let searchInput = searchInput1.value;
        // console.log(searchInput);
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        // console.log(url);
        let options = {
            method: "GET"
        };

        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                console.log(jsonData);
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });
    }
}

searchInput1.addEventListener("keydown", searchWikipedia);