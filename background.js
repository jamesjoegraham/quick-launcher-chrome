// This script runs in the background and listens for the defined keyboard commands.

// The names of the commands match the keys defined in manifest.json:
const COMMAND_TO_STORAGE_KEY_MAP = {
    'open-site-1': 'site1Url',
    'open-site-2': 'site2Url',
    'open-site-3': 'site3Url',
    'open-site-4': 'site4Url'
};

// Listen for keyboard commands
chrome.commands.onCommand.addListener((command) => {
    // Get the storage key corresponding to the command that was triggered
    const storageKey = COMMAND_TO_STORAGE_KEY_MAP[command];

    if (!storageKey) {
        console.error(`Unknown command received: ${command}`);
        return;
    }

    // Retrieve the saved URL from storage
    chrome.storage.sync.get(storageKey, (data) => {
        const url = data[storageKey];

        if (url) {
            // Check if the URL is valid (basic check)
            try {
                new URL(url); // Throws if not a valid URL
                // Open a new tab with the saved URL
                chrome.tabs.create({ url: url });
                console.log(`Opened site: ${url} for command: ${command}`);
            } catch (e) {
                console.error(`Invalid URL stored for ${command}: ${url}`);
                // In a real extension, you might notify the user, but for background scripts, logging is standard.
            }
        } else {
            console.warn(`No URL configured for command: ${command}. Please set it in the extension options.`);
        }
    });
});