import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, day, time } = body;

    // SMTP Ayarlarını yapılandırıyoruz
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Gönderilecek E-posta İçeriği (Şık HTML Tasarım)
    const mailOptions = {
      from: `"Luminous Psikoloji Web Sistemi" <${process.env.SMTP_USER}>`,
      to: process.env.CLINIC_EMAIL, // Kliniğe gidecek
      subject: `🗓️ Yeni Randevu Talebi: ${name} - ${service}`,
      html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: 0 auto; border: 1px solid #e1e1f5; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #1c648e; color: white; padding: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Yeni Randevu Talebi</h1>
          </div>
          <div style="padding: 32px; background-color: #ffffff;">
            <p style="font-size: 16px; color: #444655;">Merhaba Luminous Ekibi,</p>
            <p style="font-size: 16px; color: #444655;">Web siteniz üzerinden yeni bir ön görüşme talebi aldınız. Detaylar aşağıdadır:</p>
            
            <div style="background-color: #fbfbfd; padding: 20px; border-radius: 8px; margin: 24px 0;">
              <p style="margin: 0 0 10px 0;"><strong>👤 Danışan Adı:</strong> ${name}</p>
              <p style="margin: 0 0 10px 0;"><strong>📧 E-posta:</strong> <a href="mailto:${email}" style="color: #1c648e;">${email}</a></p>
              <p style="margin: 0 0 10px 0;"><strong>💼 İstenen Hizmet:</strong> ${service}</p>
              <p style="margin: 0;"><strong>📅 Talep Edilen Tarih:</strong> ${day} Mayıs 2026, Saat: ${time}</p>
            </div>
            
            <p style="font-size: 14px; color: #86868b; text-align: center;">Bu e-posta Luminous Psikoloji web sitesi üzerinden otomatik olarak gönderilmiştir.</p>
          </div>
        </div>
      `,
    };

    // E-postayı Gönder
    await transporter.sendMail(mailOptions);
    console.log("✅ E-posta başarıyla gönderildi!");

    return NextResponse.json(
      { message: "Randevu talebi başarıyla alındı ve iletildi." },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ E-posta gönderme hatası:", error);
    return NextResponse.json(
      { message: "İşlem sırasında bir hata oluştu." },
      { status: 500 }
    );
  }
}
