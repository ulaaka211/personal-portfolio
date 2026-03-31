"use client";

import * as yup from "yup";
import { useFormik } from "formik";
import { GithubIcon } from "../assets/GithubIcon";
import { LinkedInIcon } from "../assets/LinkedInIcon";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const contactInfo = [
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Email",
    value: "saikhanbayar@example.com",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: "Location",
    value: "Ulaanbaatar, Mongolia",
  },
];

export const Contact = () => {
  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    message: yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await emailjs.send(
          "service_xjk9bw8",
          "template_clzg0to",
          { name: values.name, email: values.email, message: values.message },
          "nHPoh9lvgX_GC03kU"
        );
        resetForm();
        toast.success("Message sent successfully! 🎉");
      } catch {
        toast.error("Something went wrong. Please try again.");
      }
    },
  });

  return (
    <section
      id="Contact"
      className="w-full py-24 md:py-32 bg-white dark:bg-dark relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="section-tag">Contact</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white text-center">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl text-center">
            Have a project in mind or just want to chat? I&apos;d love to hear
            from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
          {/* Left: Contact info */}
          <div className="lg:w-2/5 w-full flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Get in Touch
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                I&apos;m currently open to new opportunities. Whether you have
                a question, a project idea, or just want to say hi — my inbox
                is always open!
              </p>
            </div>

            {/* Contact cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                Find me on social media
              </p>
              <div className="flex gap-3">
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 cursor-pointer">
                  <GithubIcon />
                </div>
                <div className="p-3 rounded-xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 cursor-pointer">
                  <LinkedInIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:w-3/5 w-full">
            <form
              onSubmit={formik.handleSubmit}
              className="p-8 rounded-3xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border shadow-xl shadow-primary/5 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className={`contact-input contact-input-light dark:text-white ${
                      formik.touched.name && formik.errors.name
                        ? "border-red-400"
                        : ""
                    }`}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-xs text-red-500">{formik.errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`contact-input contact-input-light dark:text-white ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-400"
                        : ""
                    }`}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-xs text-red-500">
                      {formik.errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className={`contact-input contact-input-light dark:text-white resize-none ${
                    formik.touched.message && formik.errors.message
                      ? "border-red-400"
                      : ""
                  }`}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-xs text-red-500">
                    {formik.errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={formik.isSubmitting || !formik.isValid}
                className={`btn-gradient px-8 py-4 rounded-xl text-base font-semibold text-white flex items-center justify-center gap-2 mt-2 ${
                  formik.isSubmitting || !formik.isValid
                    ? "opacity-60 cursor-not-allowed"
                    : ""
                }`}
              >
                <span>
                  {formik.isSubmitting ? "Sending..." : "Send Message"}
                </span>
                {!formik.isSubmitting && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
