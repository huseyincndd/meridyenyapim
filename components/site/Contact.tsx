"use client";

import { useState } from "react";
import { z } from "zod";

const cities = [
  "İstanbul",
  "Ankara",
  "İzmir",
  "Bursa",
  "Antalya",
  "Adana",
  "Gaziantep",
  "Konya",
  "Diğer",
];

const schema = z.object({
  name: z.string().trim().min(2, "Ad Soyad gerekli").max(100),
  city: z.string().min(1, "Şehir seçiniz"),
  phone: z
    .string()
    .trim()
    .min(7, "Telefon numarası gerekli")
    .max(20)
    .regex(/^[0-9+()\-\s]+$/, "Geçersiz telefon"),
  consent: z.boolean().refine((val) => val === true, "Onay gerekli"),
});

export function Contact() {
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      city: fd.get("city"),
      phone: fd.get("phone"),
      consent: fd.get("consent") === "on",
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      setStatus("err");
      return;
    }
    setErrors({});
    setStatus("ok");
    e.currentTarget.reset();
  }

  return (
    <section id="iletisim" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-12">
        <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" /> İletişim & Başvuru
        </div>
        <h2 className="font-display text-5xl tracking-[-0.035em] md:text-6xl">
          Proje{" "}
          <span className="italic font-serif text-muted-foreground">başlatın.</span>
        </h2>
      </div>

      <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden rounded-3xl border border-border bg-card mb-8">
        <iframe
          title="Meridyen Film konumu"
          src="https://www.google.com/maps?q=Moda+Caddesi+Kad%C4%B1k%C3%B6y+%C4%B0stanbul&output=embed"
          className="h-full w-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 relative z-10 -mt-24 md:-mt-32 mx-4 md:mx-8">
        {/* Left / Info */}
        <div className="flex flex-col gap-6 order-2 lg:order-1 mt-4 lg:mt-0">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-border bg-background p-6 sm:col-span-2 transition-all hover:border-foreground/20 hover:shadow-lg">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Adres
              </div>
              <div className="mt-2 text-base font-medium">Moda Caddesi, Kadıköy / İstanbul</div>
            </div>
            <div className="rounded-[2rem] border border-border bg-background p-6 transition-all hover:border-foreground/20 hover:shadow-lg">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                Telefon
              </div>
              <div className="mt-2 text-base font-medium">+90 212 000 00 00</div>
            </div>
            <div className="rounded-[2rem] border border-border bg-background p-6 transition-all hover:border-foreground/20 hover:shadow-lg">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                E-posta
              </div>
              <div className="mt-2 text-base font-medium">info@meridyenfilm.com</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 md:p-8 shadow-2xl order-1 lg:order-2"
        >
          <div>
            <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
              Ad Soyad
            </label>
            <input
              name="name"
              maxLength={100}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground/40"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-destructive">{errors.name}</p>
            )}
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                Şehir
              </label>
              <select
                name="city"
                defaultValue=""
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground/40"
              >
                <option value="" disabled>
                  Seçiniz
                </option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {errors.city && (
                <p className="mt-1 text-xs text-destructive">{errors.city}</p>
              )}
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
                Telefon
              </label>
              <input
                name="phone"
                inputMode="tel"
                maxLength={20}
                placeholder="+90 5xx xxx xx xx"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground/40"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
              )}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
              Fotoğraf (Maks. 20MB)
            </label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              className="w-full rounded-xl border border-dashed border-border bg-background px-4 py-3 text-sm file:mr-3 file:rounded-full file:border-0 file:bg-foreground file:px-3 file:py-1.5 file:text-xs file:text-background"
            />
          </div>
          <label className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 text-xs text-muted-foreground">
            <input
              type="checkbox"
              name="consent"
              className="mt-0.5 h-4 w-4 accent-primary"
            />
            <span>
              KVKK Aydınlatma Metni ve Veri İşleme Rıza Beyanını okudum, onaylıyorum.
            </span>
          </label>
          {errors.consent && (
            <p className="-mt-2 text-xs text-destructive">{errors.consent}</p>
          )}
          <button
            type="submit"
            className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full lime-pill px-6 py-3.5 text-sm font-semibold shadow-[0_10px_40px_-10px_oklch(0.92_0.22_130/0.7)] transition-transform hover:scale-[1.02]"
          >
            Gönder
            <span className="grid h-7 w-7 place-items-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
              ↗
            </span>
          </button>
          {status === "ok" && (
            <p className="text-sm text-foreground/80">
              Teşekkürler — başvurunuz alındı. En kısa sürede dönüş yapacağız.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
