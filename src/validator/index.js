import { body } from 'express-validator';

const userRegisterValidator = () => {
    return [
        body('email')
            .trim()
            .notEmpty()
            .withMessage('Email is required')
        .isEmail()
            .normalizeEmail()
        .withMessage('Please enter a valid email'),
        body('username')
            .trim()
        .notEmpty()
        .withMessage('Username is required')
            .isLowercase()
        .withMessage('Username must be in lowercase')
        .isLength({ min: 3, max: 20 })
        .withMessage('Username must be between 3 and 20 characters')
            .matches(/^[a-zA-Z0-9]+$/)
        .withMessage('Username must contain only letters and numbers'),
        body('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 8, max: 20 })
        .withMessage('Password must be between 6 and 20 characters')
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'),
        body('fullName')
        .trim()
        .notEmpty()
        .withMessage('Full name is required')
        .isLength({ min: 3, max: 50 })
        .withMessage('Full name must be between 3 and 50 characters')
        .matches(/^[a-zA-Z\s]+$/)
        .withMessage('Full name must contain only letters and spaces'),
    ]
}

const userLoginValidator = () => {
    return [
        body("email").optional().isEmail().withMessage("Email is invalid"),
        body("password").notEmpty().withMessage("Password is required"),
    ];
};

export { userRegisterValidator,
    userLoginValidator
};
