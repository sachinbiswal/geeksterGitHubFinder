const subcontainerlower = document.getElementById("subcontainerlower")
const input = document.getElementById("input")
inputsearch()
async function inputsearch() {
    subcontainerlower.innerHTML = ""
    if(input.value===""){
        input.value="geekster"
        console.log("aaaaaaaa");
    }
    // console.log(input.value);
    const response = await fetch(`https://api.github.com/search/users?q=${input.value}`)
    // console.log(response);
    const data = await response.json()
    // console.log(data.items);

    data.items.map((ele) => {
        const username = ele.login
        const avatar = ele.avatar_url
        const profile = ele.html_url
        console.log(username + " " + avatar + " " + profile);
        subcontainerlower.innerHTML += `
        <div class="card">
            <div class="cardleft">
                <img  src="${avatar}" alt="">
            </div>
            <div class="cardright">
                <div class="cardrightupper">
                    <h3>${username}</h3>
                </div>
                <div class="cardrightlower">
                    <a href="${profile}">View Profile</a>
                </div>
            </div>
        </div>
        `

    })
}

function clearall() {
    subcontainerlower.innerHTML = ""
    input.value="geekster"
    inputsearch()
}