/**
 * Utilitaires de validation réutilisables
 * 
 * Respecte le principe de responsabilité unique (SOLID)
 * Seulement responsable de la logique de validation
 */

export interface ValidationRule {
  (value: string): string | undefined;
}

export interface ValidationRules {
  [key: string]: ValidationRule;
}

// Règles de validation de base
export const required = (message = 'Ce champ est requis'): ValidationRule => 
  (value: string) => value.trim() ? undefined : message;

export const minLength = (min: number, message?: string): ValidationRule => 
  (value: string) => value.length >= min ? undefined : 
    message || `Minimum ${min} caractères requis`;

export const maxLength = (max: number, message?: string): ValidationRule => 
  (value: string) => value.length <= max ? undefined : 
    message || `Maximum ${max} caractères autorisés`;

export const email = (message = 'Email invalide'): ValidationRule => 
  (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? undefined : message;
  };

export const phone = (message = 'Numéro de téléphone invalide'): ValidationRule => 
  (value: string) => {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    return phoneRegex.test(value) ? undefined : message;
  };

export const url = (message = 'URL invalide'): ValidationRule => 
  (value: string) => {
    try {
      new URL(value);
      return undefined;
    } catch {
      return message;
    }
  };

export const numeric = (message = 'Valeur numérique requise'): ValidationRule => 
  (value: string) => /^\d+$/.test(value) ? undefined : message;

export const alphaNumeric = (message = 'Caractères alphanumériques uniquement'): ValidationRule => 
  (value: string) => /^[a-zA-Z0-9\s]+$/.test(value) ? undefined : message;

// Combinaison de règles
export const combineRules = (...rules: ValidationRule[]): ValidationRule => 
  (value: string) => {
    for (const rule of rules) {
      const error = rule(value);
      if (error) return error;
    }
    return undefined;
  };

// Règles de validation prédéfinies
export const commonValidations: ValidationRules = {
  required: required(),
  email: email(),
  phone: phone(),
  url: url(),
  numeric: numeric(),
  alphaNumeric: alphaNumeric(),
  shortText: combineRules(required(), minLength(2), maxLength(100)),
  longText: combineRules(required(), minLength(10), maxLength(1000)),
  name: combineRules(required(), minLength(2), maxLength(50), alphaNumeric()),
  password: combineRules(required(), minLength(8), maxLength(128))
};

// Validation d'un formulaire complet
export const validateForm = (
  values: Record<string, string>,
  rules: ValidationRules
): Record<string, string> => {
  const errors: Record<string, string> = {};
  
  Object.keys(rules).forEach(field => {
    const value = values[field] || '';
    const rule = rules[field];
    const error = rule(value);
    if (error) {
      errors[field] = error;
    }
  });
  
  return errors;
};
