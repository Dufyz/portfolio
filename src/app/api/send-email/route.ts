import { ContactEmailTemplate } from "@/components/Global/ContactDrawer.tsx/contact-email-temapla";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactEmailTemplateProps = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const body: ContactEmailTemplateProps = await req.json();

    const { data, error } = await resend.emails.send({
      from: `${body.name} <porfolio@dufyz.dev>`,
      to: ["guilhermeiagothomaz@hotmail.com"],
      subject: body.subject,
      text: "",
      react: ContactEmailTemplate({ ...body }),
    });

    if (error) {
      console.log("if error", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
