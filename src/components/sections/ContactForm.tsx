"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, CheckCircle, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Liste des pays avec codes téléphoniques
const countries = [
  // Pays prioritaires (les plus probables)
  { code: '+33', name: '🇫🇷 France', priority: true },
  { code: '+32', name: '🇧🇪 Belgique', priority: true },
  { code: '+41', name: '🇨🇭 Suisse', priority: true },
  { code: '+1', name: '🇺🇸 USA/Canada', priority: true },
  { code: '+44', name: '🇬🇧 Royaume-Uni', priority: true },
  
  // Séparateur
  { code: 'separator', name: '──────────', priority: false },
  
  // Autres pays européens
  { code: '+49', name: '🇩🇪 Allemagne' },
  { code: '+39', name: '🇮🇹 Italie' },
  { code: '+34', name: '🇪🇸 Espagne' },
  { code: '+31', name: '🇳🇱 Pays-Bas' },
  { code: '+46', name: '🇸🇪 Suède' },
  { code: '+47', name: '🇳🇴 Norvège' },
  { code: '+45', name: '🇩🇰 Danemark' },
  { code: '+358', name: '🇫🇮 Finlande' },
  { code: '+48', name: '🇵🇱 Pologne' },
  { code: '+420', name: '🇨🇿 République tchèque' },
  { code: '+36', name: '🇭🇺 Hongrie' },
  { code: '+43', name: '🇦🇹 Autriche' },
  { code: '+30', name: '🇬🇷 Grèce' },
  { code: '+351', name: '🇵🇹 Portugal' },
  
  // Séparateur
  { code: 'separator2', name: '──────────', priority: false },
  
  // Autres pays
  { code: '+81', name: '🇯🇵 Japon' },
  { code: '+86', name: '🇨🇳 Chine' },
  { code: '+82', name: '🇰🇷 Corée du Sud' },
  { code: '+61', name: '🇦🇺 Australie' },
  { code: '+64', name: '🇳🇿 Nouvelle-Zélande' },
  { code: '+91', name: '🇮🇳 Inde' },
  { code: '+55', name: '🇧🇷 Brésil' },
  { code: '+52', name: '🇲🇽 Mexique' },
  { code: '+54', name: '🇦🇷 Argentine' },
  { code: '+27', name: '🇿🇦 Afrique du Sud' },
  { code: '+971', name: '🇦🇪 Émirats arabes unis' },
  { code: '+972', name: '🇮🇱 Israël' },
  { code: '+90', name: '🇹🇷 Turquie' },
  { code: '+7', name: '🇷🇺 Russie' },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  phoneCountry: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    phoneCountry: '+33',
    subject: '',
    message: ''
  });

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });
  const [fieldErrors, setFieldErrors] = useState<{
    email?: string;
    phone?: string;
  }>({});
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [validationTimeouts, setValidationTimeouts] = useState<{
    email?: NodeJS.Timeout;
    phone?: NodeJS.Timeout;
  }>({});

  // Refs pour les inputs
  const firstNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);

  const totalSteps = 3;

  // Validation en temps réel pour le téléphone
  const validatePhoneInRealTime = (phone: string, countryCode: string): { isValid: boolean; error: string } => {
    if (!phone.trim()) return { isValid: true, error: '' }; // Vide = OK (optionnel)
    
    const cleanPhone = phone.replace(/[\s\-\.]/g, '');
    
    // Validation selon le pays
    switch (countryCode) {
      case '+33': // France
        if (cleanPhone.length === 10) {
          if (/^0[6-9]/.test(cleanPhone)) {
            return { isValid: true, error: '' }; // Mobile
          } else if (/^0[1-5]/.test(cleanPhone)) {
            return { isValid: true, error: '' }; // Fixe
          } else {
            return { isValid: false, error: 'Numéro français doit commencer par 01-05 (fixe) ou 06-09 (mobile)' };
          }
        } else if (cleanPhone.length < 10) {
          return { isValid: false, error: 'Numéro incomplet (10 chiffres requis)' };
        } else {
          return { isValid: false, error: 'Numéro trop long (10 chiffres maximum)' };
        }
        
      case '+32': // Belgique
        if (cleanPhone.length === 9) {
          if (/^[2-9]/.test(cleanPhone)) {
            return { isValid: true, error: '' };
          } else {
            return { isValid: false, error: 'Numéro belge doit commencer par 2-9' };
          }
        } else if (cleanPhone.length < 9) {
          return { isValid: false, error: 'Numéro incomplet (9 chiffres requis)' };
        } else {
          return { isValid: false, error: 'Numéro trop long (9 chiffres maximum)' };
        }
        
      case '+41': // Suisse
        if (cleanPhone.length === 9) {
          if (/^[2-9]/.test(cleanPhone)) {
            return { isValid: true, error: '' };
          } else {
            return { isValid: false, error: 'Numéro suisse doit commencer par 2-9' };
          }
        } else if (cleanPhone.length < 9) {
          return { isValid: false, error: 'Numéro incomplet (9 chiffres requis)' };
        } else {
          return { isValid: false, error: 'Numéro trop long (9 chiffres maximum)' };
        }
        
      case '+1': // USA/Canada
        if (cleanPhone.length === 10) {
          if (/^[2-9]\d{2}[2-9]\d{6}$/.test(cleanPhone)) {
            return { isValid: true, error: '' };
          } else {
            return { isValid: false, error: 'Format invalide (ex: 555-123-4567)' };
          }
        } else if (cleanPhone.length < 10) {
          return { isValid: false, error: 'Numéro incomplet (10 chiffres requis)' };
        } else {
          return { isValid: false, error: 'Numéro trop long (10 chiffres maximum)' };
        }
        
      case '+44': // Royaume-Uni
        if (cleanPhone.length >= 10 && cleanPhone.length <= 11) {
          if (/^[2-9]/.test(cleanPhone)) {
            return { isValid: true, error: '' };
          } else {
            return { isValid: false, error: 'Numéro UK doit commencer par 2-9' };
          }
        } else if (cleanPhone.length < 10) {
          return { isValid: false, error: 'Numéro incomplet (10-11 chiffres requis)' };
        } else {
          return { isValid: false, error: 'Numéro trop long (11 chiffres maximum)' };
        }
        
      default: // Autres pays
        if (cleanPhone.length >= 6 && cleanPhone.length <= 12) {
          if (/^[1-9]/.test(cleanPhone)) {
            return { isValid: true, error: '' };
          } else {
            return { isValid: false, error: 'Numéro doit commencer par 1-9' };
          }
        } else if (cleanPhone.length < 6) {
          return { isValid: false, error: 'Numéro incomplet (6-12 chiffres requis)' };
        } else {
          return { isValid: false, error: 'Numéro trop long (12 chiffres maximum)' };
        }
    }
  };

  const getPhonePlaceholder = (countryCode: string): string => {
    switch (countryCode) {
      case '+33': return '06 32 21 37 11'; // France
      case '+32': return '2 123 45 67'; // Belgique
      case '+41': return '22 123 45 67'; // Suisse
      case '+1': return '555 123 4567'; // USA/Canada
      case '+44': return '20 7946 0958'; // UK
      default: return 'Numéro de téléphone';
    }
  };

  const handleCountryChange = (countryCode: string) => {
    setFormData(prev => ({
      ...prev,
      phoneCountry: countryCode,
      phone: '' // Vider le numéro quand on change de pays
    }));
    setIsCountryDropdownOpen(false);
    setFieldErrors(prev => ({ ...prev, phone: undefined }));
  };

  // Fermer le dropdown quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.country-dropdown')) {
        setIsCountryDropdownOpen(false);
      }
    };

    if (isCountryDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCountryDropdownOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validation en temps réel avec délai
    if (name === 'phone') {
      // Annuler le timeout précédent s'il existe
      if (validationTimeouts.phone) {
        clearTimeout(validationTimeouts.phone);
      }

      // Créer un nouveau timeout
      const timeout = setTimeout(() => {
        const phoneValidation = validatePhoneInRealTime(value, formData.phoneCountry);
        setFieldErrors(prev => ({
          ...prev,
          phone: phoneValidation.isValid ? undefined : phoneValidation.error
        }));
      }, 1500); // 1.5 seconde

      setValidationTimeouts(prev => ({
        ...prev,
        phone: timeout
      }));
    } else if (name === 'email') {
      // Annuler le timeout précédent s'il existe
      if (validationTimeouts.email) {
        clearTimeout(validationTimeouts.email);
      }

      // Créer un nouveau timeout
      const timeout = setTimeout(() => {
        if (value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const isValidEmail = emailRegex.test(value);
          setFieldErrors(prev => ({
            ...prev,
            email: isValidEmail ? undefined : 'Format d\'email invalide'
          }));
        } else {
          setFieldErrors(prev => ({
            ...prev,
            email: undefined
          }));
        }
      }, 1500); // 1.5 seconde

      setValidationTimeouts(prev => ({
        ...prev,
        email: timeout
      }));
    }
  };

  // Nettoyer les timeouts quand le composant se démonte
  useEffect(() => {
    return () => {
      if (validationTimeouts.email) {
        clearTimeout(validationTimeouts.email);
      }
      if (validationTimeouts.phone) {
        clearTimeout(validationTimeouts.phone);
      }
    };
  }, [validationTimeouts]);

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        if (!formData.firstName.trim()) {
          setStatus({ type: 'error', message: 'Le prénom est requis' });
          return false;
        }
        if (!formData.lastName.trim()) {
          setStatus({ type: 'error', message: 'Le nom est requis' });
          return false;
        }
        break;
      case 2:
        // Au moins un contact requis
        if (!formData.email.trim() && !formData.phone.trim()) {
          setStatus({ type: 'error', message: 'Veuillez fournir au moins un email ou un numéro de téléphone' });
          return false;
        }
        // Validation email si fourni
        if (formData.email.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(formData.email)) {
            setStatus({ type: 'error', message: 'Format d\'email invalide' });
            return false;
          }
        }
        // Validation téléphone si fourni
        if (formData.phone.trim()) {
          const phoneValidation = validatePhoneInRealTime(formData.phone, formData.phoneCountry);
          if (!phoneValidation.isValid) {
            setStatus({ type: 'error', message: phoneValidation.error });
            return false;
          }
        }
        break;
      case 3:
        if (!formData.subject.trim()) {
          setStatus({ type: 'error', message: 'Le sujet est requis' });
          return false;
        }
        if (!formData.message.trim()) {
          setStatus({ type: 'error', message: 'Le message est requis' });
          return false;
        }
        break;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
      setStatus({ type: 'idle', message: '' });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    setStatus({ type: 'idle', message: '' });
  };

  // Focus automatique sur le premier input du step actuel
  useEffect(() => {
    const timer = setTimeout(() => {
      let inputToFocus: HTMLInputElement | null = null;
      
      switch (currentStep) {
        case 1:
          inputToFocus = firstNameRef.current;
          break;
        case 2:
          inputToFocus = emailRef.current;
          break;
        case 3:
          inputToFocus = subjectRef.current;
          break;
      }
      
      if (inputToFocus) {
        inputToFocus.focus();
      }
    }, 350); // Délai pour laisser l'animation se terminer
    
    return () => clearTimeout(timer);
  }, [currentStep]);

  const handleSubmit = async () => {
    console.log('🚀 Tentative d\'envoi du formulaire...');
    console.log('📤 Statut de chargement actuel:', status.type);
    
    if (status.type === 'loading') {
      console.log('❌ Envoi bloqué - Chargement en cours');
      return;
    }
    
    if (!validateStep(3)) {
      console.log('❌ Validation de l\'étape 3 échouée');
      return;
    }
    
    console.log('✅ Validation réussie, envoi en cours...');
    setStatus({ type: 'loading', message: t('common.loading') });
    
    try {
      // Préparer le numéro de téléphone avec le code pays
      const fullPhone = formData.phone ? `${formData.phoneCountry}${formData.phone.replace(/[\s\-\.]/g, '')}` : '';
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: fullPhone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        console.log('✅ Envoi réussi !');
        setStatus({ type: 'success', message: t('contact.success.title') });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          phoneCountry: '+33',
          subject: '',
          message: ''
        });
        setCurrentStep(1);
        setFieldErrors({});
      } else {
        const errorData = await response.json();
        console.log('❌ Erreur de réponse:', errorData);
        setStatus({ type: 'error', message: errorData.message || t('contact.error.message') });
      }
    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi:', error);
      setStatus({ type: 'error', message: t('contact.error.message') });
    }
  };

  return (
    <div className="flex items-start justify-center pt-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Informations de contact */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {t('contact.title')}
              </h1>
              <p className="text-lg text-foreground leading-relaxed">
                {t('contact.description')}
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="mailto:eliott.bouquerel@gmail.com" 
                className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:bg-card/70 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('contact.contactInfo.email')}</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    eliott.bouquerel@gmail.com
                  </p>
                </div>
              </a>

              <a 
                href="tel:+33632213711" 
                className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:bg-card/70 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('contact.contactInfo.phone')}</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    +33 6 32 21 37 11
                  </p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/eliott-bouquerel-02baba226/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:bg-card/70 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t('contact.contactInfo.linkedin')}</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    Eliott BOUQUEREL
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg overflow-visible w-full max-w-md mx-auto">
            {/* Stepper */}
            {status.type !== 'success' && (
              <div className="flex items-center justify-center mb-8 w-full">
                <div className="flex items-center space-x-3 sm:space-x-6 w-full max-w-xs">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center flex-1">
                      <motion.div
                        className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-sm sm:text-base font-semibold transition-all duration-500 ${
                          currentStep >= step 
                            ? 'bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg shadow-primary/25' 
                            : 'bg-background/50 border-2 border-border text-muted-foreground'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {currentStep > step ? (
                          <Check className="w-5 h-5" />
                        ) : (
                          step
                        )}
                        {currentStep > step && (
                          <motion.div
                            className="absolute inset-0 rounded-full bg-primary/20"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </motion.div>
                      {step < 3 && (
                        <div className="mx-3 sm:mx-6 flex-1">
                          <motion.div
                            className={`w-full h-1 rounded-full ${
                              currentStep > step 
                                ? 'bg-gradient-to-r from-primary to-primary/60 shadow-sm shadow-primary/25' 
                                : 'bg-border/50'
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: currentStep > step ? '100%' : '0%' }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Messages de statut */}
            {status.type === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm w-full h-full flex items-center justify-center"
              >
                {status.message}
              </motion.div>
            )}

            {status.type === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 sm:p-6 bg-card border-2 border-border rounded-2xl text-center shadow-lg w-full h-full flex items-center justify-center"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-inner">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                    {t('contact.success.title')}
                  </h3>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                    {t('contact.success.message')}
                  </p>
                </div>
              </motion.div>
            ) : (
              <>
                {/* Contenu des étapes - Hauteur adaptative sans gaps */}
                <motion.div 
                  className="relative"
                  layout
                  transition={{ 
                    duration: 0.3, 
                    ease: "easeInOut",
                    layout: { duration: 0.3, ease: "easeInOut" }
                  }}
                >
                  <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-full"
                        layout
                      >
                        <div className="space-y-3 sm:space-y-4">
                          <h3 className="text-lg sm:text-xl font-semibold text-foreground">{t('contact.form.personalInfo')}</h3>
                          <div className="space-y-3 sm:space-y-4">
                            <div>
                              <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                                {t('contact.form.firstName')} *
                              </label>
                              <input
                                ref={firstNameRef}
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background/50 border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                                placeholder={t('contact.form.placeholder.firstName')}
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                                {t('contact.form.lastName')} *
                              </label>
                              <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background/50 border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                                placeholder={t('contact.form.placeholder.lastName')}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-full"
                        layout
                      >
                        <div className="space-y-3 sm:space-y-4">
                          <h3 className="text-lg sm:text-xl font-semibold text-foreground">{t('contact.form.coordinates')}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {t('contact.validation.contactRequired')}
                          </p>
                          <div className="space-y-3 sm:space-y-4">
                            <div>
                              <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                                {t('contact.form.email')}
                              </label>
                              <input
                                ref={emailRef}
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-background/50 border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base ${
                                  fieldErrors.email ? 'border-red-500' : 'border-border/50'
                                }`}
                                placeholder={t('contact.form.placeholder.email')}
                              />
                              {fieldErrors.email && (
                                <p className="text-red-500 text-xs sm:text-sm mt-1">{fieldErrors.email}</p>
                              )}
                            </div>

                            <div>
                              <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                                {t('contact.form.phone')}
                              </label>
                              <div className="flex">
                                {/* Menu déroulant pays */}
                                <div className="relative country-dropdown">
                                  <button
                                    type="button"
                                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                    className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-background/50 border border-r-0 border-border/50 rounded-l-lg text-foreground hover:bg-background/70 transition-colors h-[44px] sm:h-[52px] text-sm sm:text-base`}
                                  >
                                    <span className="text-xs sm:text-sm font-medium">
                                      {countries.find(c => c.code === formData.phoneCountry)?.name.split(' ')[0] || '+33'}
                                    </span>
                                    <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                                  </button>
                                  
                                  {/* Dropdown menu */}
                                  {isCountryDropdownOpen && (
                                    <motion.div
                                      initial={{ opacity: 0, y: -10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      exit={{ opacity: 0, y: -10 }}
                                      transition={{ duration: 0.2 }}
                                      className="absolute top-full left-0 z-[100] w-48 sm:w-64 bg-background border border-border rounded-lg shadow-lg overflow-y-auto h-[160px] sm:h-[200px]"
                                    >
                                      {countries.map((country, index) => (
                                        <div key={index}>
                                          {country.code === 'separator' || country.code === 'separator2' ? (
                                            <div className="px-2 sm:px-3 py-1 text-xs text-muted-foreground border-b border-border/50">
                                              {country.name}
                                            </div>
                                          ) : (
                                            <button
                                              type="button"
                                              onClick={() => handleCountryChange(country.code)}
                                              className={`w-full px-2 sm:px-3 py-1.5 sm:py-2 text-left hover:bg-primary/10 transition-colors ${
                                                country.priority ? 'font-semibold' : ''
                                              } ${formData.phoneCountry === country.code ? 'bg-primary/20 text-primary' : ''}`}
                                            >
                                              <span className="text-xs sm:text-sm">{country.name}</span>
                                            </button>
                                          )}
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                                </div>
                                
                                {/* Champ téléphone */}
                                <input
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleInputChange}
                                  className={`flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-background/50 border border-l-0 rounded-r-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all h-[44px] sm:h-[52px] text-sm sm:text-base ${
                                    fieldErrors.phone ? 'border-red-500' : 'border-border/50'
                                  }`}
                                  placeholder={getPhonePlaceholder(formData.phoneCountry)}
                                />
                              </div>
                              {fieldErrors.phone && (
                                <p className="text-red-500 text-xs sm:text-sm mt-1">{fieldErrors.phone}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 3 && (
                      <motion.div
                        key="step-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-full"
                        layout
                      >
                        <div className="space-y-3 sm:space-y-4">
                          <h3 className="text-lg sm:text-xl font-semibold text-foreground">{t('contact.form.messageSection')}</h3>
                          <div className="space-y-3 sm:space-y-4">
                            <div>
                              <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                                {t('contact.form.subject')} *
                              </label>
                              <input
                                ref={subjectRef}
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background/50 border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                                placeholder={t('contact.form.placeholder.subject')}
                                required
                              />
                            </div>

                            <div>
                              <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                                {t('contact.form.messageSection')} *
                              </label>
                              <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={5}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-background/50 border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm sm:text-base"
                                placeholder={t('contact.form.placeholder.message')}
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Boutons de navigation */}
                <div className="mt-6 flex flex-col gap-4">
                  {/* Bouton Suivant/Envoyer - en haut */}
                  <div>
                    {currentStep < 3 ? (
                      <motion.button
                        type="button"
                        onClick={nextStep}
                        className={`w-full px-6 py-2 bg-primary text-white rounded-lg transition-colors ${
                          status.type === 'loading'
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-primary/90'
                        }`}
                        whileHover={{ scale: status.type === 'loading' ? 1 : 1.02 }}
                        whileTap={{ scale: status.type === 'loading' ? 1 : 0.98 }}
                      >
                        {t('common.next')}
                      </motion.button>
                    ) : (
                      <motion.button
                        type="button"
                        onClick={handleSubmit}
                        className={`w-full px-6 py-2 bg-primary text-white rounded-lg transition-colors ${
                          status.type === 'loading'
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-primary/90'
                        }`}
                        whileHover={{ scale: status.type === 'loading' ? 1 : 1.02 }}
                        whileTap={{ scale: status.type === 'loading' ? 1 : 0.98 }}
                      >
                        {status.type === 'loading' ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            {t('common.loading')}
                          </div>
                        ) : (
                          t('common.submit')
                        )}
                      </motion.button>
                    )}
                  </div>
                  
                  {/* Bouton Précédent - en bas */}
                  <div>
                    {currentStep > 1 && (
                      <motion.button
                        type="button"
                        onClick={prevStep}
                        className={`w-full px-6 py-2 bg-muted text-foreground rounded-lg transition-colors ${
                          status.type === 'loading'
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-muted/80'
                        }`}
                        whileHover={{ scale: status.type === 'loading' ? 1 : 1.02 }}
                        whileTap={{ scale: status.type === 'loading' ? 1 : 0.98 }}
                      >
                        {t('common.previous')}
                      </motion.button>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}