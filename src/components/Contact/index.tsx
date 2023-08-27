"use client";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { ContactPageT } from "types/contactPageTranslation";
import { NewsLatterBoxT } from "types/newsLatterBoxTranslation";
import { sendEmail } from "../../../utils/send-email";
import { MailFormData } from "../../types/form";
import NewsLatterBox from "./NewsLatterBox";

interface ContactProps {
  _ContactPageTranslate: ContactPageT;
  _NewsLatterBoxT: NewsLatterBoxT;
}

const Contact: FC<ContactProps> = ({
  _ContactPageTranslate,
  _NewsLatterBoxT,
}) => {
  const { register, handleSubmit } = useForm<MailFormData>();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  async function onSubmit(data: MailFormData) {
    try {
      const emailSent = await sendEmail(data); // await kullanarak sendEmail fonksiyonunu bekleyin
  
      if (emailSent) {
        onOpen(); // Email başarıyla gönderildiğinde onOpen işlevini çağırabilirsiniz
      } else {
        // Email gönderilemedi
      }
    } catch (error) {
      // Hata durumları
    }
  }

  return (
    <section id="contact" className=" py-16 md:py-20 lg:py-28">
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-9/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-primary/10 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                {_ContactPageTranslate.Header}
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
              {_ContactPageTranslate.Content}
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {_ContactPageTranslate._ContactFormT.HeaderName}
                      </label>
                      <input
                        type="text"
                        placeholder={_ContactPageTranslate._ContactFormT.PlaceholderName}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        {...register('name', { required: true })}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {_ContactPageTranslate._ContactFormT.HeaderMail}
                      </label>
                      <input
                        type="email"
                        placeholder={_ContactPageTranslate._ContactFormT.PlaceholderMail}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        {...register('email', { required: true })}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {_ContactPageTranslate._ContactFormT.HeaderMessage}
                      </label>
                      <textarea
                        rows={5}
                        placeholder={_ContactPageTranslate._ContactFormT.PlaceholderMessage}
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                        {...register('message', { required: true })}
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full">
                    <button className="rounded-md bg-primary px-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      {_ContactPageTranslate._ContactFormT.Submit}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-3/12 xl:w-4/12">
            <NewsLatterBox _NewsLatterBoxT={_NewsLatterBoxT}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
