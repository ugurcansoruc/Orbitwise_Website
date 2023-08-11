"use client";

import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { ChangeEvent, useTransition } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(value: string) {
    startTransition(() => {
      if(value != locale)
      {
        console.log(value);

        router.replace(pathname, { locale: value });
      }
    });
  }

  return (

      <div>
        <Listbox value={locale} onChange={onSelectChange}>
          <div className="relative mt-1">
            <Listbox.Button className="focus-visible:border-indigo-500 focus-visible:ring-offset-orange-300 relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm">
            {t("locale", { locale: `${locale}` })}
            
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="text-gray-400 h-5 w-5"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {["tr", "en"].map((cur) => (
                <Listbox.Option
                  key={cur}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={cur}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {t("locale", { locale: cur })}
                      </span>
                      {selected ? (
                        <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      </div>
  );
}
