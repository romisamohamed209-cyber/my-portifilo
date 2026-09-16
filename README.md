# Romisaa Portfolio

## GitHub Pages
1. Upload `index.html` and the `assets` folder to your GitHub repository.
2. In GitHub: **Settings → Pages**.
3. Choose **Deploy from a branch**, select the main branch, and save.

## Adding your photo later
Put your image inside `assets/`, for example:

`assets/profile.jpg`

Then in `index.html`, change:

`src="assets/profile-placeholder.svg"`

to:

`src="assets/profile.jpg"`

The HTML is intentionally kept readable: the original huge Base64 image was removed and replaced with a normal asset path.
