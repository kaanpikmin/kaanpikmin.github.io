🌿 Pikmin Mod Hub
================

A simple Pikmin modding website where you can share and discover mods, caves, and other Pikmin-related content!

## Features

### 🌲 The Canopy (Home Page)
- **Featured Mods**: Display curated mods uploaded by the admin
- **Admin Panel**: Admin-only section to upload and manage featured mods
- **Clean, simple interface**: Easy to navigate

### 🕳️ The Mod Den (Community Page)
- **Community Uploads**: Users can upload their own mods, caves, texture packs, and more
- **Login System**: Users must login to upload
- **User Management**: Track uploads by user, delete your own submissions

## Getting Started

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. No server setup required - everything runs in your browser!

### Default Login
- **Username**: `kaanpikmin`
- **Password**: `admin`

⚠️ **Important**: Change the admin password in `auth.js` before using in production!

## How to Use

### As Admin (kaanpikmin)
1. Login with default credentials
2. Go to the Canopy (home page)
3. Use the admin panel to upload featured mods
4. Your featured mods appear on the Canopy

### As Regular User
1. Login or create a new account
2. Go to the Mod Den
3. Upload your mods, caves, texture packs, etc.
4. Your submissions appear in the community section

## File Structure

```
.
├── index.html          # Main Canopy page
├── mod-den.html        # Community Mod Den page
├── styles.css          # Main stylesheet
├── auth.js             # Authentication system
├── script.js           # Canopy page logic
├── mod-den.js          # Mod Den page logic
└── README.md           # This file
```

## How It Works

- **Authentication**: Uses browser localStorage to store user accounts and login status
- **Data Storage**: All mods and submissions are stored in localStorage
- **File Uploads**: Currently stores file metadata only (ready for backend integration)

## Future Improvements

To make this production-ready, consider:

1. **Backend Server**: 
   - Use Node.js/Express, Django, or similar
   - Store users and mods in a database
   - Implement proper file upload handling

2. **Better Security**:
   - Hash passwords (don't store plain text!)
   - Use JWT tokens for sessions
   - Validate all uploads

3. **Enhanced Features**:
   - Mod search and filtering
   - User profiles
   - Comments/ratings on mods
   - Mod categories
   - Download tracking

4. **Additional Pages**:
   - About page
   - Mod upload guidelines
   - User profile pages

## Customization

### Change Admin Username/Password
Edit `auth.js`:
```javascript
const ADMIN_USERNAME = 'yourusername';
const ADMIN_PASSWORD = 'yourpassword';
```

### Change Colors/Theme
Edit `styles.css` - the color scheme uses:
- Purple gradient: `#667eea` to `#764ba2`
- Gold accent: `#ffd700`

### Add More Upload Types
Edit `mod-den.html` - modify the `itemType` dropdown:
```html
<option value="mod">Mod</option>
<option value="cave">Cave</option>
<option value="texture">Texture Pack</option>
<option value="other">Other</option>
```

## Troubleshooting

**Lost your data?** Check your browser's localStorage:
1. Open Developer Tools (F12)
2. Go to Application → Local Storage
3. Look for `pikmin_featured_mods` and `pikmin_community_mods`

**Login not working?** Make sure cookies and storage are enabled in your browser.

## License

Feel free to use and modify this for your Pikmin modding community!

---

Enjoy sharing your Pikmin creations! 🍄
