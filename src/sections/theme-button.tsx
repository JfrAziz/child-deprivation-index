import { useEffect, useState } from "react";

export const ThemeButton = () => {
  const [theme, setTheme] = useState("synthwave"); //default theme 'synthwave'
  const themes = ["dark", "synthwave"];

  useEffect(() => {
    const body = document.documentElement;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <section>
      <div className="dropdown dropdown-end bg-base-300 fixed right-4 top-2 z-50 rounded-full">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-neutral-content">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-5 w-5 stroke-current "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            ></path>
          </svg>
        </div>
        <div
          tabIndex={0}
          className="dropdown-content bg-base-300 mt-1 grid w-56 grid-cols-1 overflow-y-auto rounded-lg p-2 "
        >
          {themes.map((item: string, index: number) => (
            <span
              key={index}
              className={(theme == item && "bg-accent rounded-btn ") + ""}
            >
              <button
                className="outline-base-content p-3 text-start outline-offset-4"
                onClick={() => {
                  setTheme(item);
                }}
              >
                <div
                  data-theme={item}
                  className="bg-base-300 rounded-btn text-base-content block w-full cursor-pointer items-center justify-center font-sans"
                >
                  <span className="grid grid-cols-5 grid-rows-3">
                    <span className="row-span-3 flex gap-4 px-4 py-3">
                      <span className="flex h-full shrink-0 flex-wrap gap-1 text-right">
                        <span className="bg-primary rounded-badge w-2" />
                        <span className="bg-secondary rounded-badge w-2" />
                        <span className="bg-accent rounded-badge w-2" />
                        <span className="bg-neutral rounded-badge w-2" />
                      </span>
                      <span className="flex-grow text-sm">{item}</span>
                    </span>
                  </span>
                </div>
              </button>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
