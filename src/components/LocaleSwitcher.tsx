"use client";
import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { useTransition } from "react";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(nextLocale: string) {
    if (nextLocale !== locale) {
      // Check if the selected locale is different from the current locale
      startTransition(() => {
        router.replace(pathname, { locale: nextLocale });
      });
    }
  }

  return (
    <>
      <Listbox value={locale} onChange={onSelectChange}>
        <div>
          <Listbox.Button className="bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-black dark:text-white md:h-10 md:w-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {locale === "tr" ? (
                  <Image
                    src="/images/languages/turkey-svgrepo-com.svg"
                    alt="Turkish Icon"
                    width={100}
                    height={100}
                  />
                ) : (
                  <Image
                    src="/images/languages/united-states-svgrepo-com.svg"
                    alt="English Icon"
                    className="h-full"
                    width={100}
                    height={100}
                  />
                )}
              </div>
              <ChevronUpDownIcon className="text-gray-400 h-5 w-5" />
            </div>
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 max-h-60 ring-black ring-opacity-5 focus:outline-none ">
            {["tr", "en"].map((cur) => (
              <Listbox.Option
                key={cur}
                className={({ active }) =>
                  `py-0.3 pl-0.4 relative cursor-default select-none ${
                    active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                  }`
                }
                value={cur}
              >
                {({ selected }) => (
                  <>
                    <span className="block flex items-center">
                      {cur === "tr" ? (
                        <Image
                          src="/images/languages/turkey-svgrepo-com.svg"
                          alt="Turkish Icon"
                          className="mr-2 h-6 w-6"
                          width={100}
                          height={100}
                        />
                      ) : (
                        <Image
                          src="/images/languages/united-states-svgrepo-com.svg"
                          alt="English Icon"
                          className="mr-2 h-6 w-6"
                          width={100}
                          height={100}
                        />
                      )}

                      <span
                        className={`block flex items-center ${
                          selected ? "font-medium" : "font-normal"
                        } translate`}
                      >
                        {t("locale", { locale: cur })}
                      </span>
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </>
  );
}
