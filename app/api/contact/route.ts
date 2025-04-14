// Arquivo: app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message, timestamp } = data;

    // 1. Enviar email
    await sendEmail(name, email, message);
    
    // 2. Salvar na planilha do Google
    await saveToGoogleSheet(name, email, message, timestamp);

    return NextResponse.json({ success: true, message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Erro no processamento da solicitação:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao processar a solicitação' },
      { status: 500 }
    );
  }
}

// Função para enviar email
async function sendEmail(name: string, email: string, message: string) {
  // Configure o transporter do Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Configure os detalhes do email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'ritteralvaro@gmail.com', // Seu email
    subject: `Novo contato de ${name}`,
    html: `
      <h3>Você recebeu uma nova mensagem de contato</h3>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message}</p>
    `
  };

  // Enviar o email
  await transporter.sendMail(mailOptions);
}

// Função para salvar na planilha do Google
async function saveToGoogleSheet(name: string, email: string, message: string, timestamp: string) {
  // Usando as credenciais do service account fornecido
  const serviceAccountAuth = {
    type: "service_account",
    project_id: "automated-axis-455804-t5",
    private_key_id: "3a521ad1a0ccd1d3fe03520f8ea52192a278a21d",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDR7u//g8iImIg3\neJaaQLqD7mDGvBMTjl+GWAxETUqnYWsKASBpyv0kXIUAewZYB5Q5IApwxTLIkHPL\nr9XaDx8ITajtjIQFyo+Kktu1PYJmlzBruT7fQtbkSZzIwRXQF9bu7OoO391jpS9c\nxdeFglgPYKJln/njVBzbqri8fYtNjBSPAFbG2n71tx8RMVuDcJhTiwYJc+BV/zsy\nHD5WmOf9hftUREliK5UvcWIcFnQUjdWOhs9IVQJEOHq3Ju5cPgYwsv2HdwRc87P4\nwvwxKnPgZfVCOtqFKP8Fkuoew7G2pvYnKtRXAN+2n3mfduiAIRp1mouF1AExVbnP\nPGS7YDt3AgMBAAECggEAHxH5dDwpXEoS8v7Gb1sAH9GSgidIvX63VZdHbX5w+5fX\n8zmadf3kfFKzHpCWrkWk4tWCphERhIyYjr9d67GMOrrfsxS2X3MMzooQuWC6oXtj\n37WhgAKQ8mWQrkehdlRo66ClvYDVb899VII1dR2G8fOv5VGJduM2iC5avA7qpJW/\npvXLZzDW/+lG+8oAJY57/oNIc4oo+B6k5IfMfVrViKE0A8sNcthBeyeLTiF0bmwU\ne9bbK55wxOS3UV0jL/yY+ptRuC73yoqruWkNPJXyfsAIJ+eOL3czCR5rrVxsBNGF\nh8bRXw5JStY8hW0yjxUJdXe5XpsdgA9B8hGjcmzP7QKBgQD0j6EvSFAH9Rg5VsCm\nfUJVl0hQq0K7ww3mmNEowyyT6Z7lIH8jyd+UzNsQL+0viE/XeBiBVO9sjuBSzuqL\n2sdnWJSH5grnnqZAi1CjSgc1xmHNcaYhLwD1PRNbzB3QkhRfs82y9kvKtuO7L+PN\nrunwS5kj5ptuBjzFRQHQTEu9KwKBgQDbwK0fhiK8Ie9HxuXycH0b2GAIO9oBehqR\nwp6vFl0x5k1lVDE4Y7dmUVNPGAUKpQMFBJfmWGMbV1G8nfeCtxmPLKy1syPtgzxa\ntU7OGQ4twlMMCaaGFKAWVoHvzGIyjyxfBGlBDYZ5zeBDM7xUyEdlN/MNHHutM1ap\nhakdH0YM5QKBgCn/7KeJHK1xKxrVyjoNcvHuDC5GayyBwAZlIi6E7kfsrCwfW5ZS\n2gHc+JYcFPi/yS5w4ox7gK69DstJ27/u76XQ8ZkxKZhDh7u38T5JvVk/25YDuYsj\nXl+/gG6YbFpga/1PjLj6UWPb6to/zDiLnIN3CDLBLNpFWfRq+HfEUpGHAoGAB0om\n9ArBEDiX9WuVqSsuG0RcOymxG6dvRjKMjQZS5RrcqmXWlCZKqSw9dTw4vpemt/3l\nBBEeiIOnBHjBAycLxAIZYJWmtXRLBj9Jc/DE1aPCmX2gdoYsoVERUmEXSNITCLve\nufe25Ed+DvyiXLWgGK14dJDjUWWIlGsIpxyoeDkCgYAXnCv5USZ+6ONiJQLBH8XS\n0+eRCVojoLD506Wug6ygi/suNawr2fuDz8arj/IoyuKgM6ciTmBJs/riXyqbKMmn\n0MW4vdhWhJttvYQDXrxc3yT5/d64C5MZcMlzfW2eG3u15xWiUYBTDxXsIApdIyeQ\nLpTSrmfcXteoM/+L3Pz3ZQ==\n-----END PRIVATE KEY-----\n",
    client_email: "leads-ritteralvaro@automated-axis-455804-t5.iam.gserviceaccount.com",
    client_id: "104069926757774472316",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/leads-ritteralvaro%40automated-axis-455804-t5.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
  };

  const auth = new google.auth.GoogleAuth({
    credentials: serviceAccountAuth,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });

  const sheets = google.sheets({ version: 'v4', auth });
  
  // ID da planilha do Google (você precisará substituir pelo ID da sua planilha)
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  
  // Formatando a mensagem para facilitar a leitura na planilha
  // Limitando a 500 caracteres para evitar problemas com células muito grandes
  const formattedMessage = message.length > 500 ? message.substring(0, 500) + "..." : message;
  
  // Preparando os dados para inserção
  const values = [
    [timestamp, name, email, formattedMessage]
  ];

  try {
    // Adicionar os dados à planilha
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Contatos!A:D', // Nome da aba e range
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values
      }
    });
  } catch (error) {
    console.error('Erro ao salvar na planilha:', error);
    throw error;
  }
}