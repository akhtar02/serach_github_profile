const baseUrl = 'https://api.github.com/users/';
    let userId = prompt('Enter your Github Id');
    let url = baseUrl + userId;
    if (userId !== "" && userId !== null) {
        $.get(url, (data, status) => {
            console.log(data);

            document.getElementById("loader").style.display = "none"
            document.getElementById("mainDiv").style.display = "block"
            document.getElementById("avator").src = data.avatar_url;
            document.getElementById("name").innerText = data.name;
            document.getElementById("link").innerText = data.login;
            document.getElementById("repos").innerText = data.public_repos;
            document.getElementById("follower").innerText = data.followers;
            document.getElementById("following").innerText = data.following;
            document.getElementById("link").href = data.html_url;
        })
    }
