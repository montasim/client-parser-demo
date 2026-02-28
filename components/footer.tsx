export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border/40 bg-background border-t">
      <div className="flex w-full items-center justify-center">
        <div className="container max-w-2xl px-4 py-6 sm:py-8 md:px-8">
          <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
            <p className="text-muted-foreground text-xs sm:text-sm">
              © {currentYear} Client Parser. All rights reserved.
            </p>

            <div className="flex items-center gap-3 sm:gap-4">
              <p className="text-muted-foreground text-xs sm:text-sm">
                Developed by{' '}
                <a
                  href="https://github.com/montasim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium transition-colors hover:underline"
                >
                  Montasim
                </a>
              </p>
              <a
                href="https://github.com/montasim/client-parser"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
