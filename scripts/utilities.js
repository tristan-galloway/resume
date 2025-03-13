const username = "tristan-galloway";

// Utility function to fetch repositories from GitHub API
export async function fetchGitHubRepos() {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    return await response.json();
}

// Function to filter repositories based on the featured list
export function filterRepos(repos, featuredRepos) {
    return repos.filter(repo => featuredRepos.includes(repo.name));
}

// Function to display repositories in the UI
export function displayRepos(repos) {
    const repoList = document.getElementById("repo-list");
    repoList.innerHTML = repos.map(repo => `
        <li>
            <strong><a href="${repo.html_url}" target="_blank">${repo.name}</a></strong>
            <p>${repo.description || "No description available"}</p>
            <p>🔧 ${repo.language || "Unknown"}</p>
        </li>
    `).join("");
}

