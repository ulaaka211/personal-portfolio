"use client";

import { TextInput } from "../_component/TextInput";
import { TextArea } from "../_component/TextArea";
import * as yup from "yup";
import { useFormik } from "formik";
import { Pedro } from "../_component/Pedro";
import { GithubIcon } from "../assets/GithubIcon";
import { InstaIcon } from "../assets/InstaIcon";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export const Contact = () => {
  const validationSchema = yup.object({
    name: yup.string().required("Enter a name"),
    email: yup.string().email("Should be an email").required("Enter an email"),
    message: yup.string().required("Enter a message"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        emailjs.send(
          "service_xjk9bw8",
          "template_clzg0to",
          {
            name: values.name,
            email: values.email,
            message: values.message,
          },
          "nHPoh9lvgX_GC03kU"
        );
        formik.handleReset();
        toast.success("Амжилттай илгээгдлээ");
      } catch (error) {
        toast.error("Алдаа гарлаа");
      }
    },
  });

  return (
    <div
      id="Contact"
      className="w-full flex items-center py-10 px-6 bg-[#ffffff] dark:bg-[#121212]"
    >
      <div className="w-full flex flex-col items-center gap-10">
        <div className="flex flex-col gap-5 md:p-10 p-5 md:w-[30%] m-auto bg-white rounded-lg border border-solid border-[#d6d8db]">
          <h1 className="mb-2 text-center md:text-4xl text-3xl font-semibold md:font-bold text-[#3A7CF3]">
            Contact Me
          </h1>

          <div className="flex flex-col gap-2">
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
              type="text"
              onChange={formik.handleChange}
              value={formik.values.message}
              helperText={formik.errors.message}
              error={formik.errors.message}
            />
          </div>

          <button
            type="submit"
            onClick={() => {
              formik.handleSubmit();
            }}
            className={`btn pt-2 md:pt-3 pb-4 md:pb-10 bg-[#3A7CF3] text-white hover:bg-[#3a7cf3] ${
              !formik.isValid ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={!formik.isValid}
          >
            <h2 className="text-lg text-semibold">Send</h2>
          </button>
        </div>
        <Pedro />
        <div className="flex flex-col items-center gap-8">
          <p className="text-[20px] text-[400] text-black dark:text-white md:text-left text-center">
            You may also find me on these platforms!
          </p>
          <div className="flex gap-5">
            <GithubIcon />
            <InstaIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
