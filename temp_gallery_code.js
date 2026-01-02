// Gallery Manager for Admins
window.openGalleryManager = (pId) => {
    const p = breed.puppies.find(x => x.id === pId);
    if (!p) return;

    // Create gallery manager modal
    let galleryModal = document.getElementById('gallery-manager-modal');
    if (!galleryModal) {
        galleryModal = document.createElement('div');
        galleryModal.id = 'gallery-manager-modal';
        galleryModal.className = 'modal';
        galleryModal.style.display = 'none';
        document.body.appendChild(galleryModal);
    }

    const renderGalleryGrid = () => {
        const thumbnailsHTML = p.images.map((img, idx) => `
            <div style="position: relative; border-radius: 15px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); border: 3px solid ${idx === 0 ? 'var(--primary-dark)' : '#ddd'};">
                <img src="${img}" style="width: 100%; height: 150px; object-fit: cover;">
                ${idx === 0 ? '<div style="position: absolute; top: 5px; left: 5px; background: var(--primary-dark); color: white; padding: 4px 10px; border-radius: 8px; font-size: 0.7rem; font-weight: 700;">MAIN</div>' : ''}
                <div style="position: absolute; top: 5px; right: 5px; display: flex; gap: 5px;">
                    ${idx > 0 ? '<button onclick="window.moveGalleryImage(' + idx + ', -1)" style="background: rgba(0,0,0,0.7); color: white; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; font-size: 1.1rem; display: flex; align-items: center; justify-content: center;">↑</button>' : ''}
                    ${idx < p.images.length - 1 ? '<button onclick="window.moveGalleryImage(' + idx + ', 1)" style="background: rgba(0,0,0,0.7); color: white; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; font-size: 1.1rem; display: flex; align-items: center; justify-content: center;">↓</button>' : ''}
                </div>
                ${p.images.length > 1 ? '<button onclick="window.deleteGalleryImage(' + idx + ')" style="position: absolute; bottom: 5px; right: 5px; background: #dc3545; color: white; border: none; width: 35px; height: 35px; border-radius: 50%; cursor: pointer; font-size: 1.2rem; font-weight: 700; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">×</button>' : ''}
            </div>
        `).join('');

        galleryModal.innerHTML = `
            <div class="modal-content glass" style="max-width: 800px; padding: 2rem; border-radius: 25px;">
                <span class="close-modal" style="position: absolute; right: 25px; top: 25px; cursor: pointer; font-size: 1.8rem; color: var(--text-muted);">×</span>
                <h2 style="color: var(--primary-dark); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 12px;">
                    <span>🖼️</span> Gallery Manager: ${p.name}
                </h2>
                <p style="color: var(--text-muted); margin-bottom: 2rem; font-size: 0.9rem;">
                    The first image is the main photo shown in listings. Use ↑↓ to reorder, × to delete.
                </p>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                    ${thumbnailsHTML}
                </div>
                <div style="padding: 1.5rem; background: rgba(188, 108, 37, 0.05); border-radius: 15px; border: 2px dashed var(--primary);">
                    <h4 style="color: var(--primary-dark); margin-bottom: 1rem; font-size: 1rem;">📸 Add More Photos/Videos</h4>
                    <input type="file" id="gallery-multi-input" accept="image/*,video/*" multiple style="width: 100%; padding: 12px; border-radius: 10px; border: 1px solid #ddd; background: white; font-size: 0.9rem;">
                    <button class="btn btn-primary" onclick="window.addGalleryImages()" style="margin-top: 1rem; width: 100%; padding: 12px; font-size: 0.95rem;">✅ Add Selected Files</button>
                </div>
            </div>
        `;

        galleryModal.querySelector('.close-modal').onclick = () => {
            galleryModal.style.display = 'none';
            showPuppyDetails(p, breed); // Refresh main view
        };
    };

    window.deleteGalleryImage = (idx) => {
        if (p.images.length <= 1) {
            return alert('Cannot delete the last image. A puppy must have at least one photo.');
        }
        if (confirm('Delete this image from the gallery?')) {
            p.images.splice(idx, 1);
            saveToLocal();
            renderGalleryGrid();
        }
    };

    window.moveGalleryImage = (idx, direction) => {
        const newIdx = idx + direction;
        if (newIdx < 0 || newIdx >= p.images.length) return;
        [p.images[idx], p.images[newIdx]] = [p.images[newIdx], p.images[idx]];
        saveToLocal();
        renderGalleryGrid();
    };

    window.addGalleryImages = () => {
        const input = document.getElementById('gallery-multi-input');
        const files = input.files;
        if (files.length === 0) return alert('Please select at least one file.');

        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                p.images.push(e.target.result);
                saveToLocal();
                renderGalleryGrid();
            };
            reader.readAsDataURL(file);
        });

        input.value = ''; // Reset input
    };

    renderGalleryGrid();
    galleryModal.style.display = 'flex';
};
