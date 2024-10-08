document.addEventListener('DOMContentLoaded', function() {  
    const form = document.getElementById('registrationForm');
    
    const validators = {
        firstName: {
            element: document.getElementById('firstName'),
            errorElement: document.getElementById('firstNameError'),
            validate: function(value) {
                if (!value.trim()) return 'First name is required';
                return '';
            }
        },
        lastName: {
            element: document.getElementById('lastName'),
            errorElement: document.getElementById('lastNameError'),
            validate: function(value) {
                if (!value.trim()) return 'Last name is required';
                return '';
            }
        },
        email: {
            element: document.getElementById('email'),
            errorElement: document.getElementById('emailError'),
            validate: function(value) {
                if (!value.trim()) return 'Email is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Please enter a valid email address';
                return '';
            }
        },
        phone: {
            element: document.getElementById('phone'),
            errorElement: document.getElementById('phoneError'),
            validate: function(value) {
                if (!value.trim()) return 'Phone number is required';
                const phoneRegex = /^\d{10}$/;
                if (!phoneRegex.test(value)) return 'Please enter a valid 10-digit phone number';
                return '';
            }
        },
        password: {
            element: document.getElementById('password'),
            errorElement: document.getElementById('passwordError'),
            validate: function(value) {
                if (!value) return 'Password is required';
                if (value.length < 8) return 'Password must be at least 8 characters long';
                return '';
            }
        }
    };

    function validateField(fieldName) {
        const validator = validators[fieldName];
        const value = validator.element.value;
        const errorMessage = validator.validate(value);
        validator.errorElement.textContent = errorMessage;
        return !errorMessage;
    }

    
    Object.keys(validators).forEach(fieldName => {
        validators[fieldName].element.addEventListener('input', () => {
            validateField(fieldName);
        });
    });


    form.addEventListener('submit', (event) => {
        let isValid = true;
        Object.keys(validators).forEach(fieldName => {
            isValid &= validateField(fieldName);
        });

        if (!isValid) {
            event.preventDefault(); 
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {  
    const form = document.getElementById('registrationForm');
    
    const validators = {
        firstName: {
            element: document.getElementById('firstName'),
            errorElement: document.getElementById('firstNameError'),
            validate: function(value) {
                if (!value.trim()) return 'First name is required';
                return '';
            }
        },
        lastName: {
            element: document.getElementById('lastName'),
            errorElement: document.getElementById('lastNameError'),
            validate: function(value) {
                if (!value.trim()) return 'Last name is required';
                return '';
            }
        },
        email: {
            element: document.getElementById('email'),
            errorElement: document.getElementById('emailError'),
            validate: function(value) {
                if (!value.trim()) return 'Email is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Please enter a valid email address';
                return '';
            }
        },
        phone: {
            element: document.getElementById('phone'),
            errorElement: document.getElementById('phoneError'),
            validate: function(value) {
                if (!value.trim()) return 'Phone number is required';
                const phoneRegex = /^\d{10}$/;
                if (!phoneRegex.test(value)) return 'Please enter a valid 10-digit phone number';
                return '';
            }
        },
        password: {
            element: document.getElementById('password'),
            errorElement: document.getElementById('passwordError'),
            validate: function(value) {
                if (!value) return 'Password is required';
                if (value.length < 8) return 'Password must be at least 8 characters long';
                return '';
            }
        }
    };

    function validateField(fieldName) {
        const validator = validators[fieldName];
        const value = validator.element.value;
        const errorMessage = validator.validate(value);
        validator.errorElement.textContent = errorMessage;
        return !errorMessage;
    }

    
    Object.keys(validators).forEach(fieldName => {
        validators[fieldName].element.addEventListener('input', () => {
            validateField(fieldName);
        });
    });

    
    form.addEventListener('submit', (event) => {
        let isValid = true;
        Object.keys(validators).forEach(fieldName => {
            isValid &= validateField(fieldName);
        });

        if (!isValid) {
            event.preventDefault(); 
        }
    });
});
