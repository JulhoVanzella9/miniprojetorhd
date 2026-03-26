import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Rate limiting simples em memória
const rateLimit = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minuto
const RATE_LIMIT_MAX = 5; // max 5 requests por minuto por IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now - entry.lastReset > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, lastReset: now });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// Sanitiza input para prevenir injection
function sanitize(str: string): string {
  return str
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .trim()
    .slice(0, 500);
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Muitas tentativas. Aguarde um momento." },
        { status: 429 }
      );
    }

    const data = await req.json();

    const nome = sanitize(data.nome || "");
    const numero = sanitize(data.numero || "");
    const cep = sanitize(data.cep || "");
    const complemento = sanitize(data.complemento || "");
    const cidade = sanitize(data.cidade || "");
    const contato = sanitize(data.contato || "");
    const endereco = sanitize(data.endereco || "");
    const email = sanitize(data.email || "");

    if (!nome || !cep || !cidade || !endereco || !contato) {
      return NextResponse.json(
        { error: "Preencha todos os campos obrigatórios" },
        { status: 400 }
      );
    }

    // Email destino vem da env (nunca exposto no client)
    const destEmail = process.env.NOTIFY_EMAIL;
    const smtpPass = process.env.SMTP_PASS;

    if (!destEmail) {
      console.error("NOTIFY_EMAIL não configurado");
      return NextResponse.json(
        { error: "Erro de configuração do servidor" },
        { status: 500 }
      );
    }

    const emailHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:20px;">
        <h2 style="color:#f5a623;border-bottom:2px solid #f5a623;padding-bottom:10px;">
          Novo Pedido — Mini Projetor HD
        </h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Nome</td><td style="padding:8px;border-bottom:1px solid #eee;">${nome}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Número</td><td style="padding:8px;border-bottom:1px solid #eee;">${numero}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">CEP</td><td style="padding:8px;border-bottom:1px solid #eee;">${cep}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Complemento</td><td style="padding:8px;border-bottom:1px solid #eee;">${complemento || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Cidade</td><td style="padding:8px;border-bottom:1px solid #eee;">${cidade}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Endereço</td><td style="padding:8px;border-bottom:1px solid #eee;">${endereco}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Contato</td><td style="padding:8px;border-bottom:1px solid #eee;">${contato}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${email || "—"}</td></tr>
        </table>
        <p style="color:#888;font-size:12px;margin-top:20px;">Enviado automaticamente pelo site Mini Projetor HD</p>
      </div>
    `;

    // Se SMTP_PASS está configurado, envia email em background (não trava o usuário)
    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: destEmail,
          pass: smtpPass,
        },
        connectionTimeout: 10_000,
        greetingTimeout: 10_000,
        socketTimeout: 15_000,
      });

      // Fire and forget - responde pro usuário imediatamente
      transporter
        .sendMail({
          from: `"Mini Projetor HD" <${destEmail}>`,
          to: destEmail,
          subject: `Novo Pedido — ${nome}`,
          html: emailHtml,
        })
        .then(() => console.log("Email enviado com sucesso para", destEmail))
        .catch((err: unknown) => console.error("Erro ao enviar email:", err));
    } else {
      // Fallback: log no servidor (para testes)
      console.log("=== NOVO PEDIDO ===");
      console.log({ nome, numero, cep, complemento, cidade, contato, endereco, email });
      console.log("Email destino:", destEmail);
      console.log("⚠ SMTP_PASS não configurado — email não enviado");
      console.log("==================");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erro no checkout:", err);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
