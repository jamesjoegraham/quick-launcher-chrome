# Quick Site Launcher Extension Setup Guide

This extension consists of three files and does not require Node.js or NPM to run, as it is a set of static files loaded directly by the Chrome browser.

## ## Step 1: Create the Project Folder

Create a New Directory: On your computer (e.g., on your desktop), create a new folder. You can name it quick-launcher. This folder will house all your extension files.

## ## Step 2: Create and Save the Files

Inside the quick-launcher folder, create the following three files exactly as provided in the code blocks:

manifest.json (Configuration file)

options.html (The settings page)

background.js (The logic that listens for the shortcuts)

File Structure Check

Your directory structure should look exactly like this:

quick-launcher/
├── manifest.json
├── options.html
└── background.js


## Step 3: Load the Extension in Chrome

This process is called "Loading an Unpacked Extension" and is how you test local files.

Open Extensions Page: Open the Chrome browser and navigate to the Extensions management page by typing this into your address bar and pressing Enter:
chrome://extensions

Enable Developer Mode: In the top right corner of the Extensions page, look for the Developer mode toggle switch and ensure it is switched ON .

Load Unpacked: Once Developer mode is on, a button named Load unpacked will appear in the top left. Click this button.

Select Folder: A file dialog will pop up. Navigate to and select the entire quick-launcher folder you created in ## ## Step 1.

Do not select a file, select the folder itself.

Success: The Quick Site Launcher extension will now appear in your list of installed extensions.

## Step 4: Configure the Website URLs (Options Page)

Access Options: On the chrome://extensions page, find your newly installed "Quick Site Launcher."

Click the Details button.

Click the Extension options link (it may be labeled "Options").

Enter the full URLs for the four sites (e.g., https://mail.google.com, https://calendar.google.com) and click Save Shortcuts.

## Step 5: Set the Keyboard Shortcuts (Crucial!)

Although the files suggest shortcuts, Chrome requires you to confirm or change them in its settings.

Open Shortcuts Page: In the Chrome address bar, type this and press Enter:
chrome://extensions/shortcuts .

Find the Extension: Scroll down until you find Quick Site Launcher.

Assign Keys: For each of the four commands ("Opens Custom Site 1" through "Opens Custom Site 4"), click the pencil icon or the box next to the command and press your desired key combination (e.g., Ctrl+Shift+1).

The extension is now fully configured and ready to use!