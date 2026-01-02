// Happy Tails Gallery Management
// Auto-loads images from HAPPY_TAILS folder and provides admin management

document.addEventListener('DOMContentLoaded', () => {
    // Only run on index page
    if (!window.location.pathname.includes('index.html') &&
        window.location.pathname !== '/' &&
        !window.location.pathname.endsWith('/')) {
        return;
    }

    // ===== HAPPY TAILS GALLERY AUTO-LOADER =====
    const loadHappyTailsGallery = () => {
        // Get custom stories from localStorage
        let customStories = JSON.parse(localStorage.getItem('happyTailsCustom')) || [];

        // If no custom stories, use image-based approach
        if (customStories.length === 0) {
            // Try to load from pre-defined list in localStorage
            const imageList = JSON.parse(localStorage.getItem('happyTailsImages')) || [];

            if (imageList.length > 0) {
                customStories = imageList.map((img, index) => ({
                    id: `custom-${index}`,
                    name: img.customerName || 'Happy Customer',
                    role: img.puppyName || 'Proud Puppy Parent',
                    initials: (img.customerName || 'HC').substring(0, 2).toUpperCase(),
                    color: ['var(--secondary)', '#e8f5e9', '#fff3e0', '#fce4ec'][index % 4],
                    quote: img.testimonial || 'We love our new puppy!',
                    image: `PICTURES/HAPPY_TAILS/${img.filename}`
                }));
            }
        }

        // Merge with existing default stories
        const existingStories = JSON.parse(localStorage.getItem('storiesData')) || [];
        const allStories = [...existingStories, ...customStories];

        // Update stories in localStorage
        if (customStories.length > 0) {
            localStorage.setItem('storiesData', JSON.stringify(allStories));
        }

        // Render gallery
        renderGallery(allStories);
    };

    const renderGallery = (stories) => {
        const grid = document.getElementById('stories-grid');
        if (!grid) return;

        grid.innerHTML = '';

        stories.forEach((story, index) => {
            const card = document.createElement('div');
            card.className = 'glass';
            card.style.cssText = `
                padding: 2rem;
                border-radius: 25px;
                text-align: center;
                transition: transform 0.3s;
                cursor: pointer;
                position: relative;
            `;
            card.onmouseenter = () => card.style.transform = 'translateY(-5px)';
            card.onmouseleave = () => card.style.transform = 'translateY(0)';

            card.innerHTML = `
                ${story.image ? `
                    <img src="${story.image}" alt="${story.name}" 
                         style="width: 100%; height: 200px; object-fit: cover; border-radius: 15px; margin-bottom: 1.5rem;"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                ` : ''}
                <div style="width: 80px; height: 80px; background: ${story.color}; border-radius: 50%; 
                            margin: 0 auto 1rem; display: ${story.image ? 'none' : 'flex'}; align-items: center; 
                            justify-content: center; font-size: 1.8rem; font-weight: 700; color: var(--primary-dark);">
                    ${story.initials}
                </div>
                <h3 style="color: var(--primary-dark); margin-bottom: 0.5rem; font-size: 1.3rem;">${story.name}</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem; font-weight: 600; margin-bottom: 1rem;">${story.role}</p>
                <p style="color: var(--text-main); line-height: 1.7; font-style: italic;">"${story.quote}"</p>
            `;

            // Add edit button for admin
            if (localStorage.getItem('isAdmin') === 'true' && index >= 3) { // Don't allow editing default stories
                const editBtn = document.createElement('button');
                editBtn.className = 'btn btn-secondary';
                editBtn.style.cssText = 'position: absolute; top: 10px; right: 10px; padding: 5px 10px; font-size: 0.8rem; z-index: 20;';
                editBtn.innerHTML = '✏️';
                editBtn.onclick = (e) => {
                    e.stopPropagation();
                    editStory(index);
                };
                card.appendChild(editBtn);

                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'btn';
                deleteBtn.style.cssText = 'position: absolute; top: 10px; right: 50px; padding: 5px 10px; font-size: 0.8rem; background: #dc3545; color: white; z-index: 20;';
                deleteBtn.innerHTML = '🗑️';
                deleteBtn.onclick = (e) => {
                    e.stopPropagation();
                    deleteStory(index);
                };
                card.appendChild(deleteBtn);
            }

            grid.appendChild(card);
        });

        // Add "Add Story" button for admin
        if (localStorage.getItem('isAdmin') === 'true') {
            const addCard = document.createElement('div');
            addCard.className = 'glass';
            addCard.style.cssText = `
                padding: 2rem;
                border-radius: 25px;
                text-align: center;
                border: 2px dashed var(--primary);
                cursor: pointer;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                min-height: 300px;
                transition: all 0.3s;
            `;
            addCard.onmouseenter = () => {
                addCard.style.background = 'var(--secondary)';
                addCard.style.transform = 'translateY(-5px)';
            };
            addCard.onmouseleave = () => {
                addCard.style.background = '';
                addCard.style.transform = 'translateY(0)';
            };
            addCard.onclick = () => showAddStoryModal();

            addCard.innerHTML = `
                <div style="font-size: 3rem; margin-bottom: 1rem;">➕</div>
                <h3 style="color: var(--primary-dark);">Add Success Story</h3>
                <p style="color: var(--text-muted); margin-top: 0.5rem;">Share a happy tail!</p>
            `;

            grid.appendChild(addCard);
        }
    };

    // ===== ADMIN STORY MANAGEMENT =====
    window.showAddStoryModal = () => {
        const modal = document.createElement('div');
        modal.className = 'modal glass';
        modal.style.display = 'flex';
        modal.innerHTML = `
            <div class="modal-content glass" style="max-width: 600px;">
                <span class="close-modal" onclick="this.closest('.modal').remove()">&times;</span>
                <h2 style="color: var(--primary-dark); margin-bottom: 1.5rem;">Add Happy Tail Success Story</h2>
                <form id="add-story-form">
                    <input type="text" id="story-customer-name" placeholder="Customer Name" class="form-input" required>
                    <input type="text" id="story-puppy-name" placeholder="Puppy Name (e.g., 'Adopted Max')" class="form-input" required>
                    <textarea id="story-testimonial" placeholder="Customer testimonial/quote..." class="form-input" rows="4" required></textarea>
                    
                    <div style="margin: 20px 0;">
                        <label style="display: block; font-weight: 600; margin-bottom: 10px;">Success Photo (optional):</label>
                        <input type="file" id="story-image" accept="image/*" class="form-input">
                        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 5px;">
                            Or place image in PICTURES/HAPPY_TAILS/ folder
                        </p>
                    </div>

                    <button type="submit" class="btn btn-primary" style="width: 100%; padding: 15px;">Add Story</button>
                </form>
            </div>
        `;

        document.body.appendChild(modal);

        document.getElementById('add-story-form').onsubmit = (e) => {
            e.preventDefault();

            const customerName = document.getElementById('story-customer-name').value;
            const puppyName = document.getElementById('story-puppy-name').value;
            const testimonial = document.getElementById('story-testimonial').value;
            const imageFile = document.getElementById('story-image').files[0];

            const saveStory = (imgData) => {
                const newStory = {
                    id: `custom-${Date.now()}`,
                    name: customerName,
                    role: puppyName,
                    initials: customerName.substring(0, 2).toUpperCase(),
                    color: ['var(--secondary)', '#e8f5e9', '#fff3e0', '#fce4ec'][Math.floor(Math.random() * 4)],
                    quote: testimonial,
                    image: imgData // Base64 or null
                };

                const customStories = JSON.parse(localStorage.getItem('happyTailsCustom')) || [];
                customStories.push(newStory);
                localStorage.setItem('happyTailsCustom', JSON.stringify(customStories));

                modal.remove();
                loadHappyTailsGallery();
                alert('Success story added!');
            };

            if (imageFile) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    saveStory(e.target.result); // Pass Base64 data
                };
                reader.readAsDataURL(imageFile);
            } else {
                saveStory(null);
            }
        };
    };

    const editStory = (index) => {
        const stories = JSON.parse(localStorage.getItem('storiesData')) || [];
        const story = stories[index];

        if (!story) return;

        const modal = document.createElement('div');
        modal.className = 'modal glass';
        modal.style.display = 'flex';
        modal.innerHTML = `
            <div class="modal-content glass" style="max-width: 600px;">
                <span class="close-modal" onclick="this.closest('.modal').remove()">&times;</span>
                <h2 style="color: var(--primary-dark); margin-bottom: 1.5rem;">Edit Success Story</h2>
                <form id="edit-story-form">
                    <input type="text" id="edit-customer-name" placeholder="Customer Name" class="form-input" value="${story.name}" required>
                    <input type="text" id="edit-puppy-name" placeholder="Puppy Name" class="form-input" value="${story.role}" required>
                    <textarea id="edit-testimonial" placeholder="Testimonial..." class="form-input" rows="4" required>${story.quote}</textarea>
                    <button type="submit" class="btn btn-primary" style="width: 100%; padding: 15px;">Save Changes</button>
                </form>
            </div>
        `;

        document.body.appendChild(modal);

        document.getElementById('edit-story-form').onsubmit = (e) => {
            e.preventDefault();

            stories[index].name = document.getElementById('edit-customer-name').value;
            stories[index].role = document.getElementById('edit-puppy-name').value;
            stories[index].quote = document.getElementById('edit-testimonial').value;
            stories[index].initials = stories[index].name.substring(0, 2).toUpperCase();

            localStorage.setItem('storiesData', JSON.stringify(stories));

            modal.remove();
            loadHappyTailsGallery();
            alert('Story updated!');
        };
    };

    const deleteStory = (index) => {
        if (!confirm('Delete this success story?')) return;

        const stories = JSON.parse(localStorage.getItem('storiesData')) || [];
        stories.splice(index, 1);
        localStorage.setItem('storiesData', JSON.stringify(stories));

        loadHappyTailsGallery();
        alert('Story deleted');
    };

    // Initialize gallery
    setTimeout(loadHappyTailsGallery, 500);
});
