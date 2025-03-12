async function loadGitHubRepos() {
    const username = "tristan-galloway";
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    
    const repoList = document.getElementById("repo-list");
    repoList.innerHTML = repos.map(repo => `
        <li>
            <strong><a href="${repo.html_url}" target="_blank">${repo.name}</a></strong>
            <p>${repo.description || "No description available"}</p>
            <p>⭐ ${repo.stargazers_count} | 🔧 ${repo.language || "Unknown"}</p>
        </li>
    `).join("");
}

loadGitHubRepos();