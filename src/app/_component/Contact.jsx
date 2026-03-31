"use client";

import { TextInput } from "../_component/TextInput";
import { TextArea } from "../_component/TextArea";
import * as yup from "yup";
import { useFormik } from "formik";
import { GithubIcon } from "../assets/GithubIcon";
import { LinkedInIcon } from "../assets/LinkedInIcon";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/ulaaka211",
    href: "https://github.com/ulaaka211",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Saikhanbayar Sainjargal",
    href: "https://www.linkedin.com/in/saikhanbayar-sainjargal-2574072bb/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
      </svg>
    ),
  },
];

export const Contact = () => {
  const validationSchema = yup.object({
    name: yup.string().required("Enter a name"),
    email: yup.string().email("Should be an email").required("Enter an email"),
    message: yup.string().required("Enter a message"),
  });

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await emailjs.send(
          "service_xjk9bw8",
          "template_clzg0to",
          { name: values.name, email: values.email, message: values.message },
          "nHPoh9lvgX_GC03kU"
        );
        formik.handleReset();
        toast.success("Message sent successfully!");
      } catch {
        toast.error("Something went wrong. Please try again.");
      }
    },
  });

  return (
    <section
      id="Contact"
      className="relative w-full py-24 bg-[#0d0d0d] overflow-hidden"
    >
      {/* Accent blur */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">
            Get in touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
          <p className="mt-6 text-gray-400 text-center max-w-md">
            Have a project in mind or just want to say hi? My inbox is always
            open — I&apos;ll get back to you as soon as I can!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
          {/* Left — social links */}
          <div className="flex flex-col gap-6 lg:w-72 w-full">
            <h3 className="text-white font-semibold text-lg">Find me on</h3>
            {contactLinks.map(({ label, value, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/15 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/30 transition-colors flex-shrink-0">
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-wide">{label}</p>
                  <p className="text-sm text-gray-300 truncate">{value}</p>
                </div>
              </a>
            ))}

            <div className="flex gap-4 mt-2">
              <GithubIcon />
              <LinkedInIcon />
            </div>
          </div>

          {/* Right — form */}
          <div className="flex-1 max-w-xl w-full bg-white/[0.03] border border-white/10 rounded-2xl p-8">
            <h3 className="text-white font-semibold text-lg mb-6">Send a message</h3>
            <div className="flex flex-col gap-4">
              <TextInput
                name="name"
                label="Name"
                placeholder="Your name"
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
                placeholder="your@email.com"
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
                placeholder="Tell me about your project..."
                type="text"
                onChange={formik.handleChange}
                value={formik.values.message}
                helperText={formik.errors.message}
                error={formik.errors.message}
              />
              <button
                type="submit"
                onClick={formik.handleSubmit}
                disabled={!formik.isValid}
                className="mt-2 w-full py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/20"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
