import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AnimatedButton from "../AnimatedButton";
import { useTranslations } from "next-intl";
import { Input } from "../../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextArea } from "../../ui/textarea";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandLinktree,
} from "@tabler/icons-react";
import SocialCard from "../social-card";
import { toast } from "sonner";

const LABELS_STYLES = "text-white font-medium";
const ERROR_STYLES = "text-red-500 text-sm";

const contactSchema = z.object({
  name: z.string().min(3),
  subject: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(3),
});

type ContactSchemaType = z.infer<typeof contactSchema>;
export function ContactDrawer() {
  const t = useTranslations("contact");

  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
  });

  const handleSubmitForm = async (formData: ContactSchemaType) => {
    console.log(formData);

    const body = JSON.stringify({
      ...formData,
    });

    try {
      await fetch("/api/send-email", {
        method: "POST",
        body,
      });

      toast.success("Mensagem enviada com sucesso!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <AnimatedButton>
          <span>{t("button")}</span>
        </AnimatedButton>
      </SheetTrigger>
      <SheetContent className="max-w-[unset] sm:!max-w-md w-full flex flex-col gap-12">
        <SheetHeader>
          <SheetTitle className="text-white">{t("title")}</SheetTitle>
        </SheetHeader>
        <div className="flex items-start justify-start gap-14 flex-col overflow-auto scroll-area">
          <form
            onSubmit={handleSubmit(handleSubmitForm)}
            className="w-full flex flex-col items-start justify-center gap-4 p-2"
          >
            <div className="flex flex-col items-start gap-1 w-full">
              <label htmlFor="name" className={LABELS_STYLES}>
                {t("form.labels.name")}
              </label>
              {errors.name?.message && (
                <p className={ERROR_STYLES}>{t("form.errors.name")}</p>
              )}
              <Input
                {...register("name")}
                placeholder="Nome"
                value={watch("name")}
              />
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
              <label htmlFor="email" className={LABELS_STYLES}>
                Email
              </label>
              {errors.email?.message && (
                <p className={ERROR_STYLES}>{t("form.errors.email")}</p>
              )}
              <Input
                {...register("email")}
                placeholder="E-mail"
                value={watch("email")}
              />
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
              <label htmlFor="subject" className={LABELS_STYLES}>
                {t("form.labels.subject")}
              </label>
              {errors.subject?.message && (
                <p className={ERROR_STYLES}>{t("form.errors.subject")}</p>
              )}
              <Input
                {...register("subject")}
                placeholder="Subject"
                value={watch("subject")}
              />
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
              <label htmlFor="message" className={LABELS_STYLES}>
                {t("form.labels.message")}
              </label>
              {errors.message?.message && (
                <p className={ERROR_STYLES}>{t("form.errors.message")}</p>
              )}
              <TextArea
                {...register("message")}
                placeholder="Message"
                value={watch("message")}
                className="!min-h-40 resize-none scroll-area"
              />
            </div>

            <button
              className={`w-[50%] py-2 px-4 bg-slate-700 hover:bg-slate-800 text-white font-medium rounded-md`}
            >
              {t("form.submit")}
            </button>
          </form>
          <div className="w-full flex-col items-start justify-center gap-4 flex ">
            <p className="text-xl text-white font-semibold">Others</p>
            <div className="w-full flex flex-col gap-4 p-2">
              <SocialCard
                link="https://www.linkedin.com/in/schmidt-iago-thomaz/"
                label="Linkedin"
                icon={<IconBrandLinkedin color="white" size={20} />}
              />
              <SocialCard
                link="https://github.com/Dufyz"
                label="GitHub"
                icon={<IconBrandGithub color="white" size={20} />}
              />
              <SocialCard
                link="https://linktr.ee/Dufyz"
                label="Linktree"
                icon={<IconBrandLinktree color="white" size={20} />}
              />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
