"use client";

import type { FC } from "react";
import { TextInput } from "@/components/ui/TextInput";
import { TextArea } from "@/components/ui/TextArea";
import * as yup from "yup";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const validationSchema = yup.object({
  name: yup.string().required("Enter a name"),
  email: yup.string().email("Should be an email").required("Enter an email"),
  message: yup.string().required("Enter a message"),
});

const Contact: FC = () => {
  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await emailjs.send(
          "service_xjk9bw8",
          "template_clzg0to",
          { name: values.name, email: values.email, message: values.message },
          "nHPoh9lvgX_GC03kU",
        );
        resetForm();
        toast.success("Амжилттай илгээгдлээ");
      } catch {
        toast.error("Алдаа гарлаа");
      }
    },
  });

  return (
    <section id="Contact" className="w-full flex items-center py-20 bg-carbon-800 bg-grid">
      <div className="w-full flex flex-col items-center gap-10 md:px-10 px-5">
        <div className="flex flex-col gap-5 md:p-10 p-6 w-full max-w-[400px] m-auto glass-card rounded-xl border border-[rgba(0,212,255,0.15)]">
          <div>
            <span className="font-mono text-[#00d4ff] text-xs tracking-widest uppercase">
              Get In Touch
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-100">
              Contact Me
            </h2>
          </div>

          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
            <TextInput
              name="name"
              label="Name"
              placeholder="Name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              helperText={formik.errors.name}
              error={formik.errors.name}
            />
            <TextInput
              name="email"
              label="Email"
              placeholder="Email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              helperText={formik.errors.email}
              error={formik.errors.email}
            />
            <TextArea
              name="message"
              label="Message"
              placeholder="Message"
              onChange={formik.handleChange}
              value={formik.values.message}
              helperText={formik.errors.message}
              error={formik.errors.message}
            />

            <button
              type="submit"
              disabled={!formik.isValid}
              className={`w-full py-3 rounded border border-[rgba(0,212,255,0.4)] text-[#00d4ff] font-mono text-sm hover:bg-[rgba(0,212,255,0.1)] transition-colors ${
                !formik.isValid ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="font-mono text-sm text-slate-400">// find me on these platforms</p>
          <a
            href="https://github.com/ulaaka211"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-[#00d4ff] transition-colors"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.57v-2c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.68.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
