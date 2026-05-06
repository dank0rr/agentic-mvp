"use client";

import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
interface FormFields {
  name: string;
  phone: string;
  company: string;
  budget: string;
  utm: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  company?: string;
  budget?: string;
}

/* ─────────────────────────────────────────────
   Phone mask
───────────────────────────────────────────── */
function applyPhoneMask(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  const d = digits.startsWith("7") || digits.startsWith("8") ? digits.slice(1) : digits;
  const limited = d.slice(0, 10);

  let result = "+7";
  if (limited.length > 0) result += " " + limited.slice(0, 3);
  if (limited.length > 3) result += " " + limited.slice(3, 6);
  if (limited.length > 6) result += "-" + limited.slice(6, 8);
  if (limited.length > 8) result += "-" + limited.slice(8, 10);
  return result;
}

/* ─────────────────────────────────────────────
   Validation
───────────────────────────────────────────── */
function validate(fields: FormFields): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) errors.name = "Введите ваше имя";
  if (!fields.phone.trim() || fields.phone.replace(/\D/g, "").length < 11)
    errors.phone = "Введите корректный номер телефона";
  if (!fields.company.trim()) errors.company = "Введите название производства";
  if (!fields.budget.trim() || Number(fields.budget) <= 0)
    errors.budget = "Укажите бюджет больше 0";
  return errors;
}

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export default function RegisterPage() {
  const router = useRouter();

  const [fields, setFields] = useState<FormFields>({
    name: "",
    phone: "+7",
    company: "",
    budget: "",
    utm: "landing",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [loading, setLoading] = useState(false);

  /* ── Change ── */
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFields((prev) => ({
        ...prev,
        [name]: name === "phone" ? applyPhoneMask(value) : value,
      }));

      if (touched[name as keyof FormFields]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [touched]
  );

  const handleBlur = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  }, []);

const handleSubmit = useCallback(
  async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: fields.name,
      phone: fields.phone,
      company: fields.company,
      budget: Number(fields.budget),
      utm: fields.utm,
    };

    try {
      await fetch('https://h.albato.ru/wh/38/1lfehmj/QZ6kAdjAq3URvqJkCogZqWTf8_gy8Y31rwjt9wHmQYc/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } catch (err) {
      console.warn('Albato webhook failed:', err);
      // Не прерываем поток, если интеграция недоступна
    }

    // 2. Сохранение в Supabase (как в ПР-04)
    const { error } = await supabase.from('users').insert({
      name: fields.name,
      phone: fields.phone,
      company_name: fields.company,
      budget_limit_week: formData.budget,
      utm_source: fields.utm
    });

    if (error) {
      alert('Ошибка БД: ' + error.message);
    } else {
      alert('Данные сохранены и отправлены в CRM!');
      router.push('/dashboard');
    }
    setLoading(false);
  },
  [fields, router]
);

  /* ── Fields ── */
  const fieldConfig = [
    { id: "name", label: "Имя", placeholder: "Алексей Иванов", type: "text", hint: "Как к вам обращаться" },
    { id: "phone", label: "Телефон", placeholder: "+7 900 000-00-00", type: "tel", hint: "Формат +7 XXX XXX-XX-XX" },
    { id: "company", label: "Название производства", placeholder: "ООО «МеталлПром»", type: "text", hint: "Название компании" },
    { id: "budget", label: "Лимит бюджета, ₽", placeholder: "250 000", type: "number", hint: "Максимальный бюджет" },
  ] as const;

  return (
    <div className="min-h-screen bg-[#050d1a] text-white flex flex-col">

      {/* Header */}
      <header className="border-b border-white/[0.06] backdrop-blur-xl bg-[#050d1a]/80">
        <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#388bfd] to-[#1a56db]" />
            <span>AgenticAI</span>
          </Link>
        </div>
      </header>

      {/* Form */}
      <main className="flex flex-1 items-center justify-center p-6">
        <div className="w-full max-w-md rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8">

          <h1 className="text-2xl font-bold mb-6 text-center">
            Начать бесплатно
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">

            {fieldConfig.map(({ id, label, placeholder, type, hint }) => {
              const error = errors[id as keyof FormErrors];
              const isTouched = touched[id as keyof FormFields];
              const hasError = isTouched && error;

              return (
                <div key={id}>
                  <label className="text-xs text-white/50">{label}</label>

                  <input
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    value={fields[id as keyof FormFields]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={[
                      "w-full mt-1 rounded-xl px-4 py-3 bg-white/[0.05]",
                      hasError ? "border border-red-500" : "border border-white/[0.1]",
                    ].join(" ")}
                  />

                  <p className="text-xs mt-1 text-white/40">
                    {hasError ? error : hint}
                  </p>
                </div>
              );
            })}

            <button
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1a56db] to-[#388bfd]"
            >
              {loading ? "Сохранение..." : "Войти и начать"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}