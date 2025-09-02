import { useState, useCallback, useMemo } from 'react';

export interface FormField {
  value: string;
  error?: string;
  touched: boolean;
  required?: boolean;
}

export interface FormState {
  [key: string]: FormField;
}

export interface UseFormReturn {
  formState: FormState;
  setFieldValue: (field: string, value: string) => void;
  setFieldError: (field: string, error: string) => void;
  setFieldTouched: (field: string, touched: boolean) => void;
  validateField: (field: string) => boolean;
  validateForm: () => boolean;
  resetForm: () => void;
  isFormValid: boolean;
  isFormDirty: boolean;
}

export interface UseFormOptions {
  initialValues?: Record<string, string>;
  validationRules?: Record<string, (value: string) => string | undefined>;
}

/**
 * useForm - Hook personnalisé pour la gestion des formulaires
 * 
 * Respecte le principe de responsabilité unique (SOLID)
 * Seulement responsable de la logique des formulaires
 */
export function useForm(options: UseFormOptions = {}): UseFormReturn {
  const { initialValues = {}, validationRules = {} } = options;

  // État initial du formulaire
  const [formState, setFormState] = useState<FormState>(() => {
    const state: FormState = {};
    Object.keys(initialValues).forEach(key => {
      state[key] = {
        value: initialValues[key] || '',
        error: undefined,
        touched: false,
        required: false
      };
    });
    return state;
  });

  // Mettre à jour la valeur d'un champ
  const setFieldValue = useCallback((field: string, value: string) => {
    setFormState(prev => ({
      ...prev,
      [field]: {
        ...prev[field],
        value,
        error: undefined // Effacer l'erreur lors de la saisie
      }
    }));
  }, []);

  // Mettre à jour l'erreur d'un champ
  const setFieldError = useCallback((field: string, error: string) => {
    setFormState(prev => ({
      ...prev,
      [field]: {
        ...prev[field],
        error
      }
    }));
  }, []);

  // Marquer un champ comme touché
  const setFieldTouched = useCallback((field: string, touched: boolean) => {
    setFormState(prev => ({
      ...prev,
      [field]: {
        ...prev[field],
        touched
      }
    }));
  }, []);

  // Valider un champ spécifique
  const validateField = useCallback((field: string): boolean => {
    const fieldState = formState[field];
    if (!fieldState) return true;

    const validationRule = validationRules[field];
    if (validationRule) {
      const error = validationRule(fieldState.value);
      if (error) {
        setFieldError(field, error);
        return false;
      }
    }

    // Effacer l'erreur si la validation réussit
    if (fieldState.error) {
      setFieldError(field, '');
    }
    return true;
  }, [formState, validationRules, setFieldError]);

  // Valider tout le formulaire
  const validateForm = useCallback((): boolean => {
    let isValid = true;
    Object.keys(formState).forEach(field => {
      if (!validateField(field)) {
        isValid = false;
      }
    });
    return isValid;
  }, [formState, validateField]);

  // Réinitialiser le formulaire
  const resetForm = useCallback(() => {
    setFormState(() => {
      const state: FormState = {};
      Object.keys(initialValues).forEach(key => {
        state[key] = {
          value: initialValues[key] || '',
          error: undefined,
          touched: false,
          required: false
        };
      });
      return state;
    });
  }, [initialValues]);

  // Calculer si le formulaire est valide
  const isFormValid = useMemo(() => {
    return Object.values(formState).every(field => !field.error);
  }, [formState]);

  // Calculer si le formulaire a été modifié
  const isFormDirty = useMemo(() => {
    return Object.entries(formState).some(([key, field]) => 
      field.value !== (initialValues[key] || '')
    );
  }, [formState, initialValues]);

  return {
    formState,
    setFieldValue,
    setFieldError,
    setFieldTouched,
    validateField,
    validateForm,
    resetForm,
    isFormValid,
    isFormDirty
  };
}
