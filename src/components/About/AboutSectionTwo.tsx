import { Accordion, AccordionItem, Image, Avatar } from "@nextui-org/react";
import { useTranslations } from "next-intl";

function AboutSectionTwo() {
  const t = useTranslations("AboutSectionTwo");
  return (
    <section className="py-16 md:py-20 lg:py-10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              data-wow-delay=".15s"
            >
              <Image
                isBlurred
                width={550}
                height={550}
                src="/images/about/about_all_in.png"
                alt="cubesat image"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0" data-wow-delay=".2s">
              <Accordion
                motionProps={{
                  variants: {
                    enter: {
                      y: 0,
                      opacity: 1,
                      height: "auto",
                      transition: {
                        height: {
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                          duration: 1,
                        },
                        opacity: {
                          easings: "ease",
                          duration: 1,
                        },
                      },
                    },
                    exit: {
                      y: -10,
                      opacity: 0,
                      height: 0,
                      transition: {
                        height: {
                          easings: "ease",
                          duration: 0.25,
                        },
                        opacity: {
                          easings: "ease",
                          duration: 0.3,
                        },
                      },
                    },
                  },
                }}
              >
                <AccordionItem
                  key="1"
                  title={t("Item_1_Header")}
                  startContent={
                    <Avatar
                      isBordered
                      size="lg"
                      radius="lg"
                      src="/images/about/about_rocket.png"
                    />
                  }
                >
                  {t("Item_1_Content")}
                </AccordionItem>

                <AccordionItem
                  key="2"
                  title={t("Item_2_Header")}
                  startContent={
                    <Avatar
                      isBordered
                      size="lg"
                      radius="lg"
                      src="/images/about/about_book.png"
                    />
                  }
                >
                  {t("Item_2_Content")}
                </AccordionItem>
                <AccordionItem
                  key="3"
                  title={t("Item_3_Header")}
                  startContent={
                    <Avatar
                      isBordered
                      size="lg"
                      radius="lg"
                      src="/images/about/about_innovation.png"
                    />
                  }
                >
                  {t("Item_3_Content")}
                </AccordionItem>
                <AccordionItem
                  key="4"
                  title={t("Item_4_Header")}
                  startContent={
                    <Avatar
                      isBordered
                      size="lg"
                      radius="lg"
                      src="/images/about/about_gearwheel.png"
                    />
                  }
                >
                  {t("Item_4_Content")}
                </AccordionItem>
                <AccordionItem
                  key="5"
                  title={t("Item_5_Header")}
                  startContent={
                    <Avatar
                      isBordered
                      size="lg"
                      radius="lg"
                      src="/images/about/about_puzzle.png"
                    />
                  }
                >
                  {t("Item_5_Content")}
                </AccordionItem>
                <AccordionItem
                  key="6"
                  title={t("Item_6_Header")}
                  startContent={
                    <Avatar
                      isBordered
                      size="lg"
                      radius="lg"
                      src="/images/about/about_world.png"
                    />
                  }
                >
                  {t("Item_6_Content")}
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSectionTwo;
