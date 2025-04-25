document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const animateBtn = document.getElementById('animateBtn');
    const animatedElement = document.getElementById('animatedElement');
    const savePrefsBtn = document.getElementById('savePrefs');
    const usernameInput = document.getElementById('username');
    const themeSelect = document.getElementById('theme');
    
    // Load saved preferences
    loadPreferences();
    
    // Animation trigger
    animateBtn.addEventListener('click', function() {
        // Add animation class
        animatedElement.classList.add('animate');
        
        // Remove animation class after it completes to allow re-triggering
        setTimeout(() => {
            animatedElement.classList.remove('animate');
        }, 1000);
    });
    
    // Save preferences
    savePrefsBtn.addEventListener('click', savePreferences);
    
    // Function to save preferences to localStorage
    function savePreferences() {
        const preferences = {
            username: usernameInput.value,
            theme: themeSelect.value
        };
        
        localStorage.setItem('userPreferences', JSON.stringify(preferences));
        applyTheme(preferences.theme);
        
        // Show feedback animation
        savePrefsBtn.textContent = 'Saved!';
        savePrefsBtn.style.backgroundColor = '#2ecc71';
        
        setTimeout(() => {
            savePrefsBtn.textContent = 'Save Preferences';
            savePrefsBtn.style.backgroundColor = '#4CAF50';
        }, 2000);
    }
    
    // Function to load preferences from localStorage
    function loadPreferences() {
        const savedPrefs = localStorage.getItem('userPreferences');
        
        if (savedPrefs) {
            const preferences = JSON.parse(savedPrefs);
            
            usernameInput.value = preferences.username || '';
            themeSelect.value = preferences.theme || 'light';
            
            applyTheme(preferences.theme);
        }
    }
    
    // Function to apply theme
    function applyTheme(theme) {
        // Remove all theme classes
        document.body.classList.remove('light', 'dark', 'blue');
        
        // Add selected theme class
        if (theme) {
            document.body.classList.add(theme);
        } else {
            document.body.classList.add('light');
        }
    }
    
    // Additional interactive animations for images
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    galleryImages.forEach(image => {
        // Click animation
        image.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
            }, 100);
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
        
        // More advanced hover effect
        image.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
        
        image.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.6s ease';
        });
    });
});