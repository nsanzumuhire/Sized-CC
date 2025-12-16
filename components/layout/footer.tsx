export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-white/10 pt-16 pb-8 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading text-white">
              SIZED<span className="text-primary">.CC</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Precision metal cutting and custom fabrication for industrial and
              commercial applications.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Signage
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Furniture
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Branding
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Interior
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@sized.cc</li>
              <li>+250 783 801 575</li>
              <li>120 KG 19 Ave, Kigali</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SIZED.CC. All rights reserved.
          </p>
          <div className="flex gap-4">{/* Social icons would go here */}</div>
        </div>
      </div>
    </footer>
  );
}

