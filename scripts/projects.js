import { fetchGitHubRepos, filterRepos, displayRepos } from "../scripts/utilities.js"

// Main function to load and process GitHub repositories
async function loadGitHubRepos() {
    const featuredRepos = ["blacksmith_shop", "game-scope", "ExpenseTracker", "fitness_tracker", "LibraryCatalogSystem"]; // Define your featured repos here
    const repos = await fetchGitHubRepos();
    const filteredRepos = filterRepos(repos, featuredRepos);
    displayRepos(filteredRepos);
}

loadGitHubRepos()