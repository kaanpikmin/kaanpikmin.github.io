// Storage key for community submissions
const COMMUNITY_MODS_KEY = 'pikmin_community_mods';

// Initialize storage
function initializeStorage() {
    if (!localStorage.getItem(COMMUNITY_MODS_KEY)) {
        localStorage.setItem(COMMUNITY_MODS_KEY, JSON.stringify([]));
    }
}

// Load community mods from storage
function loadCommunityMods() {
    const mods = JSON.parse(localStorage.getItem(COMMUNITY_MODS_KEY)) || [];
    displayCommunityMods(mods);
}

// Display community mods in grid
function displayCommunityMods(mods) {
    const container = document.getElementById('communityGrid');
    
    if (!container) return;
    
    if (mods.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No community uploads yet. Be the first to submit!</p></div>';
        return;
    }
    
    container.innerHTML = mods.map((mod, index) => `
        <div class="mod-card">
            <h3>${mod.name}</h3>
            <span class="mod-type">${mod.type}</span>
            <div class="mod-author">by ${mod.author}</div>
            <p>${mod.description}</p>
            <div class="card-actions">
                <button class="btn-secondary" onclick="downloadMod('${mod.id}')">Download</button>
                ${mod.isCurrentUser ? `<button class="btn-danger" onclick="deleteUserMod(${index})">Delete</button>` : ''}
            </div>
        </div>
    `).join('');
}

// Handle user upload
const userUploadForm = document.getElementById('userUploadForm');
if (userUploadForm) {
    userUploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const currentUser = getCurrentUser();
        if (!currentUser) {
            alert('You must be logged in to upload!');
            return;
        }
        
        const mod = {
            id: Date.now().toString(),
            name: document.getElementById('itemName').value,
            description: document.getElementById('itemDescription').value,
            type: document.getElementById('itemType').value,
            file: document.getElementById('itemFile').files[0],
            author: currentUser.username,
            uploadDate: new Date().toLocaleDateString()
        };
        
        // In a real application, you'd upload the file to a server
        // For now, we'll just store metadata
        const mods = JSON.parse(localStorage.getItem(COMMUNITY_MODS_KEY)) || [];
        mods.push({
            id: mod.id,
            name: mod.name,
            description: mod.description,
            type: mod.type,
            author: mod.author,
            filename: mod.file.name,
            uploadDate: mod.uploadDate,
            uploaderUsername: mod.author
        });
        
        localStorage.setItem(COMMUNITY_MODS_KEY, JSON.stringify(mods));
        
        alert('Your mod has been uploaded to the Mod Den!');
        userUploadForm.reset();
        loadCommunityMods();
    });
}

// Delete user's own mod
function deleteUserMod(index) {
    if (confirm('Delete your submission?')) {
        const mods = JSON.parse(localStorage.getItem(COMMUNITY_MODS_KEY)) || [];
        mods.splice(index, 1);
        localStorage.setItem(COMMUNITY_MODS_KEY, JSON.stringify(mods));
        loadCommunityMods();
    }
}

// Download mod
function downloadMod(modId) {
    alert('Download feature would be implemented with a proper backend server.');
}

// Update community mods display with user indicator
function updateCommunityModsDisplay() {
    const currentUser = getCurrentUser();
    const mods = JSON.parse(localStorage.getItem(COMMUNITY_MODS_KEY)) || [];
    
    const modsWithUserFlag = mods.map(mod => ({
        ...mod,
        isCurrentUser: currentUser && currentUser.username === mod.uploaderUsername
    }));
    
    displayCommunityMods(modsWithUserFlag);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeStorage();
    loadCommunityMods();
    updateCommunityModsDisplay();
});