JavaScript for email 

const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email)
        ? { valid: true, error: null }
        : { valid: false, error: "Invalid email format" };
};

Number

const validatePhone = (phone) => {
    const pattern =
        /^(\+?\d{1,3}[- ]?)?\(?\d{3,4}\)?[- ]?\d{3}[- ]?\d{4}$/;


Password


const validatePassword = (password) => {
    const pattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    return pattern.test(password)
        ? { valid: true, error: null }
        : {
            valid: false,
            error: "Weak password (min 8 chars, upper, lower, number, symbol)"
        };
};
    return pattern.test(phone)
        ? { valid: true, error: null }
        : { valid: false, error: "Invalid phone format" };
};

URL

const validateURL = (url) => {
    const pattern =
        /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-./?%&=]*)?$/;

    return pattern.test(url)
        ? { valid: true, error: null }
        : { valid: false, error: "Invalid URL format" };
};

Date


const validateDate = (date) => {
    const pattern = /^\d{4}-\d{2}-\d{2}$/;

    if (!pattern.test(date)) {
        return { valid: false, error: "Format must be YYYY-MM-DD" };
    }

    const parsed = new Date(date);

    if (isNaN(parsed.getTime())) {
        return { valid: false, error: "Invalid date value" };
    }

    return { valid: true, error: null };
};