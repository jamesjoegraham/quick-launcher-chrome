// This file contains the JavaScript logic for options.html

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('inputContainer');
    const template = document.getElementById('inputTemplate').content;
    const status = document.getElementById('status');
    const numSites = 4; // Number of sites to configure

    // 1. Generate Input Fields
    for (let i = 1; i <= numSites; i++) {
        // Clone the template's content
        const clone = document.importNode(template, true);
        
        // Find the elements *within the cloned fragment*
        const label = clone.querySelector('label');
        const input = clone.querySelector('input');

        // Update IDs and labels
        label.setAttribute('for', `url-site-${i}`);
        label.textContent = `Custom Site ${i} URL:`;
        input.setAttribute('id', `url-site-${i}`);
        input.setAttribute('name', `url-site-${i}`);
        input.setAttribute('data-key', `site${i}Url`);
        
        // Append the entire clone (the DocumentFragment) to the container.
        // This will add the div.input-group to the page.
        container.appendChild(clone);
    }
    
    // 2. Load Saved Data
    const restoreOptions = () => {
        // chrome.storage.sync is the preferred storage type for small amounts of data like settings
        chrome.storage.sync.get(null, (items) => {
            for (let i = 1; i <= numSites; i++) {
                const key = `site${i}Url`;
                const input = document.getElementById(`url-site-${i}`);
                if (input && items[key]) {
                    input.value = items[key];
                }
            }
        });
    };

    // 3. Save Data
    const saveOptions = (e) => {
        e.preventDefault();
        const itemsToSave = {};

        for (let i = 1; i <= numSites; i++) {
            const key = `site${i}Url`;
            const input = document.getElementById(`url-site-${i}`);
            if (input && input.value) {
                // Basic URL validation: ensure it has http:// or https://
                let urlValue = input.value;
                if (!urlValue.startsWith('http://') && !urlValue.startsWith('https://')) {
                    urlValue = 'https://' + urlValue;
                }
                itemsToSave[key] = urlValue;
            } else {
                // Allow clearing a value
                itemsToSave[key] = '';
            }
        }

        chrome.storage.sync.set(itemsToSave, () => {
            // Update status text
            status.textContent = 'Settings saved successfully!';
            status.style.display = 'block';
            status.className = 'status-success'; // Use class for styling
            setTimeout(() => {
                status.style.display = 'none';
            }, 2000);

            // Reload the values in the inputs to show formatted URLs
            restoreOptions();
        });
    };

    document.getElementById('urlForm').addEventListener('submit', saveOptions);
    restoreOptions();
});