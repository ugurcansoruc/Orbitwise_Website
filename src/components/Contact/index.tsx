import { ContactPageT } from "types/contactPageTranslation";
import { NewsLatterBoxT } from "types/newsLatterBoxTranslation";
import NewsLatterBox from "./NewsLatterBox";

function Contact ({ContactPageTranslate, _NewsLatterBoxT}:{ContactPageTranslate:ContactPageT, _NewsLatterBoxT:NewsLatterBoxT}) {  
  return (
    <section id="contact" className=" py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-9/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-primary/10 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                {ContactPageTranslate.Header}
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
              {ContactPageTranslate.Content}
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {ContactPageTranslate._ContactFormT.HeaderName}
                      </label>
                      <input
                        type="text"
                        placeholder={ContactPageTranslate._ContactFormT.PlaceholderName}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {ContactPageTranslate._ContactFormT.HeaderMail}
                      </label>
                      <input
                        type="email"
                        placeholder={ContactPageTranslate._ContactFormT.PlaceholderMail}
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        {ContactPageTranslate._ContactFormT.HeaderMessage}
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder={ContactPageTranslate._ContactFormT.PlaceholderMessage}
                        className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full">
                    <button className="rounded-md bg-primary px-4 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      {ContactPageTranslate._ContactFormT.Submit}
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
