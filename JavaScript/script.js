// Main JavaScript for Rebamotaki Consultants Website

document.addEventListener('DOMContentLoaded', function() {
    // ===== MOBILE NAVIGATION =====
    const menuToggle = document.getElementById('menuToggle');
    const sideDrawer = document.getElementById('sideDrawer');
    const closeDrawer = document.getElementById('closeDrawer');
    
    if (menuToggle && sideDrawer) {
        menuToggle.addEventListener('click', function() {
            sideDrawer.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeDrawer && sideDrawer) {
        closeDrawer.addEventListener('click', function() {
            sideDrawer.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close drawer when clicking outside
    document.addEventListener('click', function(event) {
        if (sideDrawer && sideDrawer.classList.contains('active')) {
            if (!sideDrawer.contains(event.target) && !menuToggle.contains(event.target)) {
                sideDrawer.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });
    
    // Close drawer with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && sideDrawer && sideDrawer.classList.contains('active')) {
            sideDrawer.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // ===== FORM VALIDATION =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm(this)) {
                // Simulate successful submission
                alert('Thank you for your message! We will contact you within 24 hours.');
                this.reset();
            }
        });
    }
    
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm(this)) {
                // Simulate successful submission
                alert('Thank you for your enquiry! We will send you a quote within 24 hours.');
                this.reset();
            }
        });
    }
    
    // ===== HIGHLIGHT ACTIVE NAV LINK =====
    highlightActiveNavLink();
});

// Form validation function
function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        field.classList.remove('error');
        
        if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
        }
        
        if (field.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value.trim())) {
                field.classList.add('error');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// Highlight active navigation link
function highlightActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a, .drawer-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Quick estimate calculator for enquiry page
function calculateQuickEstimate() {
    const service = document.getElementById('estimateService')?.value;
    const employees = parseInt(document.getElementById('companyEmployees')?.value) || 0;
    
    if (!service || employees <= 0) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Simple calculation
    const basePrices = {
        'iso-9001': 25000, 'iso-14001': 28000, 'iso-45001': 30000,
        'iso-27001': 32000, 'bbbee-full': 15000, 'bbbee-improvement': 20000,
        'skills-wsp': 12000, 'skills-grants': 10000, 'combo': 50000
    };
    
    const basePrice = basePrices[service] || 20000;
    const employeeMultiplier = Math.max(1, employees / 10);
    let totalPrice = basePrice * employeeMultiplier;
    totalPrice = totalPrice * 1.15; // Add VAT
    
    // Display result
    const resultDiv = document.getElementById('estimateResult');
    const detailsDiv = document.getElementById('estimateDetails');
    
    if (resultDiv && detailsDiv) {
        detailsDiv.innerHTML = `
            <div style="text-align: center; padding: 20px; background: #f8f9fa; border-radius: 8px; border: 2px solid #ff6b35;">
                <div style="font-size: 0.9rem; color: #6c757d; margin-bottom: 10px;">Estimated Cost</div>
                <div style="font-size: 2rem; font-weight: bold; color: #ff6b35;">R${totalPrice.toFixed(2)}</div>
                <div style="font-size: 0.85rem; color: #6c757d; margin-top: 5px;">incl. 15% VAT</div>
            </div>
            <div style="margin-top: 20px; padding: 15px; background: #e8f4f8; border-radius: 5px; border-left: 4px solid #1a365d;">
                <p style="margin: 0; color: #1a365d; font-size: 0.9rem;">
                    <i class="fas fa-info-circle" style="color: #ff6b35; margin-right: 10px;"></i>
                    This is a preliminary estimate. For a detailed quote, please complete the full enquiry form.
                </p>
            </div>
        `;
        
        resultDiv.style.display = 'block';
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Make function globally available
window.calculateQuickEstimate = calculateQuickEstimate;