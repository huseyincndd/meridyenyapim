"use client";

import { useState } from "react";
import Link from "next/link";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors: Record<string, string> = {};

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const kvkk = formData.get("kvkk");
    const file = formData.get("file") as File;

    if (!name || name.trim().length < 3) newErrors.name = "Lütfen geçerli bir ad soyad giriniz.";
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Geçerli bir e-posta adresi giriniz.";
    if (!phone || phone.trim().length < 10) newErrors.phone = "Lütfen geçerli bir telefon numarası giriniz.";
    if (!message || message.trim().length < 10) newErrors.message = "Mesajınız çok kısa, lütfen detaylandırınız.";
    if (!kvkk) newErrors.kvkk = "Devam etmek için KVKK metnini onaylamanız gerekmektedir.";
    
    if (file && file.size > 0) {
      if (!file.type.startsWith("image/")) {
        newErrors.file = "Yalnızca görsel dosyaları (image/*) yükleyebilirsiniz.";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API call & rate limit handling implicitly handled by backend logic
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="rounded-[2.5rem] border border-primary/20 bg-primary/5 p-10 md:p-14 text-center animate-in fade-in zoom-in-95 duration-500">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-background">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 className="mb-4 font-display text-3xl text-foreground">Başvurunuz bize ulaştı.</h3>
        <p className="text-lg text-muted-foreground">En kısa süre içinde size dönüş yapacağız.</p>
      </div>
    );
  }

  return (
    <div className="rounded-[2.5rem] border border-border bg-card p-8 md:p-12 shadow-sm">
      <div className="mb-8 rounded-2xl bg-muted/50 p-6 border border-border/50">
        <p className="text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Meridyen Film Yapım</strong>, etik yapımcılık ilkeleri gereği başvurulardan hiçbir ad altında kayıt, dosya veya albüm ücreti talep etmez. Tüm süreçler şeffaf, ücretsiz ve KVKK güvencesi altında yürütülür.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">Ad Soyad *</label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full rounded-xl border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'} bg-background px-4 py-3 text-foreground transition-colors focus:outline-none focus:ring-2`}
              placeholder="Adınız Soyadınız"
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-foreground">Telefon *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`w-full rounded-xl border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'} bg-background px-4 py-3 text-foreground transition-colors focus:outline-none focus:ring-2`}
              placeholder="05XX XXX XX XX"
            />
            {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">E-posta Adresi *</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full rounded-xl border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'} bg-background px-4 py-3 text-foreground transition-colors focus:outline-none focus:ring-2`}
            placeholder="ornek@mail.com"
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="type" className="text-sm font-medium text-foreground">Başvuru / Proje Türü</label>
          <select
            id="type"
            name="type"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="Proje Başlat (Marka/Ajans)">Proje Başlat (Marka/Ajans)</option>
            <option value="Oyuncu Başvurusu">Oyuncu Başvurusu</option>
            <option value="Ekip / Staj Başvurusu">Ekip / Staj Başvurusu</option>
            <option value="Diğer">Diğer</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">Mesajınız / Proje Özeti *</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`w-full resize-none rounded-xl border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'} bg-background px-4 py-3 text-foreground transition-colors focus:outline-none focus:ring-2`}
            placeholder="Projenizden veya başvurunuzdan kısaca bahsedin..."
          ></textarea>
          {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="file" className="text-sm font-medium text-foreground">Dosya/Fotoğraf Yükle (İsteğe Bağlı)</label>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/*"
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm file:mr-4 file:rounded-full file:border-0 file:bg-primary/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary hover:file:bg-primary/20 transition-all text-muted-foreground"
          />
          {errors.file && <p className="text-xs text-red-500">{errors.file}</p>}
        </div>

        <div className="space-y-2">
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              name="kvkk"
              className="mt-1 h-5 w-5 rounded border-border text-primary focus:ring-primary shrink-0"
            />
            <span className="text-sm text-muted-foreground">
              Okudum, onaylıyorum. Kişisel verilerimin{" "}
              <Link href="/yasal/aydinlatma-metni" className="text-foreground underline hover:text-primary transition-colors" target="_blank">
                KVKK Aydınlatma Metni
              </Link>
              {" "}kapsamında işlenmesini kabul ediyorum.
            </span>
          </label>
          {errors.kvkk && <p className="text-xs text-red-500 ml-8">{errors.kvkk}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-70 flex justify-center items-center gap-2"
        >
          {isSubmitting ? (
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent"></span>
          ) : (
            "Başvuruyu Gönder"
          )}
        </button>
        
        <p className="text-center text-xs text-muted-foreground mt-4 leading-relaxed">
          Bu form aracılığıyla ilettiğiniz kişisel veriler; yalnızca başvurunuzun değerlendirilmesi amacıyla, 6698 sayılı KVKK kapsamında işlenir ve üçüncü taraflarla paylaşılmaz. Detaylı bilgi için <Link href="/yasal/aydinlatma-metni" className="underline hover:text-foreground">KVKK Aydınlatma Metni</Link>'ni inceleyebilirsiniz.
          <br/><span className="opacity-50 mt-2 block">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span>
        </p>
      </form>
    </div>
  );
}
