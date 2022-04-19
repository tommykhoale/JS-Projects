let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = $(`#input-el`)
const inputBtn = $(`#input-btn`)
const ulEl = $(`#ul-el`)
const clearBtn = $(`#clear-btn`)

inputBtn.on("click", function() {
    const results = $(`.results`);
    results.empty();
    myLeads.push(inputEl.val());
    myLeads.forEach((result) => {
    ulEl.append(`<li>${result}</li>`)
    });
});

clearBtn.on(`click`, function(){
    myLeads.length = 0
    ulEl.empty()
});