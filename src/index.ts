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

        if (!hasAlphabet || !hasDigit || !hasSpecialChar) {
            strength = PasswordStrength.Weak;
        } else if (password.length < 8) {
            strength = PasswordStrength.Moderate;
        } else {
            strength = PasswordStrength.Strong;
        }


        return `$Password is ${strength}`;
    }
}


