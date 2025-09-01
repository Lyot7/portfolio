import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, subject, message, to } = await request.json();

    // Adresse email par défaut si 'to' n'est pas fourni
    const recipientEmail = to || process.env.DEFAULT_EMAIL || 'eliott.bouquerel@gmail.com';

    // Fonction pour formater le numéro de téléphone français
    const formatFrenchPhone = (phoneNumber: string): string => {
      // Nettoyer le numéro (supprimer espaces, tirets, points, +33)
      let cleanPhone = phoneNumber.replace(/[\s\-\.]/g, '');
      
      // Si c'est un numéro français commençant par +33, le convertir
      if (cleanPhone.startsWith('+33')) {
        cleanPhone = '0' + cleanPhone.substring(3);
      }
      
      // Si c'est un numéro français commençant par 33, le convertir
      if (cleanPhone.startsWith('33') && cleanPhone.length === 11) {
        cleanPhone = '0' + cleanPhone.substring(2);
      }
      
      // Formater au format français 0X XX XX XX XX
      if (cleanPhone.startsWith('0') && cleanPhone.length === 10) {
        return cleanPhone.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
      }
      
      // Si ce n'est pas un format français, retourner le numéro original
      return phoneNumber;
    };

    // Validation des données
    if (!firstName || !lastName || !subject || !message) {
      return NextResponse.json(
        { message: 'Les champs prénom, nom, sujet et message sont requis' },
        { status: 400 }
      );
    }

    // Au moins un contact requis
    if (!email && !phone) {
      return NextResponse.json(
        { message: 'Veuillez fournir au moins un email ou un numéro de téléphone' },
        { status: 400 }
      );
    }

    // Validation de l'email si fourni
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { message: 'Format d\'email invalide' },
          { status: 400 }
        );
      }
    }

    // Validation du téléphone si fourni
    if (phone) {
      // Nettoyer le numéro (supprimer espaces, tirets, points)
      const cleanPhone = phone.replace(/[\s\-\.]/g, '');
      
      // Validation basique : au moins 6 chiffres, pas plus de 15 (avec code pays)
      if (cleanPhone.length < 6 || cleanPhone.length > 15) {
        return NextResponse.json(
          { message: 'Format de téléphone invalide (longueur incorrecte)' },
          { status: 400 }
        );
      }
      
      // Vérifier que c'est bien un numéro de téléphone (que des chiffres et +)
      if (!/^\+?[\d]+$/.test(cleanPhone)) {
        return NextResponse.json(
          { message: 'Format de téléphone invalide (caractères non autorisés)' },
          { status: 400 }
        );
      }
    }

    // Configuration du transporteur email
    // Note: Vous devrez configurer vos variables d'environnement
    const transporter = nodemailer.createTransport({
      service: 'gmail', // ou un autre service
      auth: {
        user: process.env.EMAIL_USER, // votre email Gmail
        pass: process.env.EMAIL_PASS, // votre mot de passe d'application Gmail
      },
    });

    // Configuration de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: subject,
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact - Ly0t</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
              margin: 0;
              padding: 20px;
              background: #f8f9fa;
              color: #333;
              line-height: 1.6;
            }
            
            .email-container {
              max-width: 600px;
              margin: 0 auto;
              background: #ffffff;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
              overflow: hidden;
            }
            
            .content {
              padding: 30px;
            }
            
            .message-section {
              margin-bottom: 30px;
            }
            
            .message-text {
              color: #333;
              font-size: 16px;
              margin: 0;
              white-space: pre-wrap;
              line-height: 1.7;
            }
            
            .contact-section {
              border-top: 1px solid #e9ecef;
              padding-top: 20px;
            }
            
            .contact-name {
              font-weight: 600;
              color: #2eb352;
              font-size: 18px;
              margin-bottom: 10px;
            }
            
            .contact-details {
              color: #666;
              font-size: 14px;
              margin: 0;
            }
            
            .footer {
              background: #f8f9fa;
              padding: 20px 30px;
              text-align: center;
              border-top: 1px solid #e9ecef;
            }
            
            .footer-text {
              color: #6c757d;
              font-size: 13px;
              margin: 0;
            }
            
            .footer-link {
              color: #2eb352;
              text-decoration: none;
              font-weight: 500;
            }
            
            .footer-link:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            
            <div class="content">
              <div class="message-section">
                <p class="message-text">${message.replace(/\n/g, '\n')}</p>
              </div>
              
              <div class="contact-section">
                <p class="contact-name">${firstName} ${lastName}</p>
                <p class="contact-details">
                  ${email ? `Email: ${email}<br>` : ''}
                  ${phone ? `Téléphone: ${formatFrenchPhone(phone)}` : ''}
                </p>
              </div>
            </div>
            
            <div class="footer">
              <p class="footer-text">
                Mail envoyé depuis 
                <a href="https://ly0t.fr" class="footer-link">ly0t.fr</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
}
