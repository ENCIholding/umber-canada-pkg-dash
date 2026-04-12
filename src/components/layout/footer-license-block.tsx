import {
  APP_ACCESS_NOTICE,
  APP_COPYRIGHT,
  APP_LICENSE_NAME,
} from "@/lib/constants/app";

export function FooterLicenseBlock() {
  return (
    <footer className="border-t border-black/10 bg-white px-6 py-4 text-xs text-zinc-500 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-400">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p>{APP_LICENSE_NAME}</p>
          <p>{APP_COPYRIGHT}</p>
        </div>
        <div>
          <p>{APP_ACCESS_NOTICE}</p>
        </div>
      </div>
    </footer>
  );
}


