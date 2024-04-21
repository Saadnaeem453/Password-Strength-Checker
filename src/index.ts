// passwordStrengthChecker.ts

export enum PasswordStrength {
    Weak = "Weak",
    Moderate = "Moderate",
    Strong = "Strong",
}

export class PasswordStrengthChecker {

    static checkPasswordStrength(password: string): string {
        if (!password) {
            throw new Error("Password cannot be empty or undefined.");
        }


        const hasAlphabet = /[A-Za-z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*()-_=+{}[\]|;:'",.<>?`~]/.test(password);

        let strength: string;
        let color: string;

        if (!hasAlphabet || !hasDigit || !hasSpecialChar) {
            strength = PasswordStrength.Weak;
            color = "\x1b[31m"; // Red color
        } else if (password.length < 8) {
            strength = PasswordStrength.Moderate;
            color = "\x1b[33m"; // Yellow color
        } else {
            strength = PasswordStrength.Strong;
            color = "\x1b[32m"; // Green color
        }

        const resetColor = "\x1b[0m"; // Reset color to default

        return `${color}Password is ${strength}${resetColor}`;
    }
}


