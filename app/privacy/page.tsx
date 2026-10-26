import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-20 px-4">
        <div className="container mx-auto max-w-3xl glass-morphism cyber-border p-10 md:p-16 rounded-sm">
          <h1 className="text-4xl md:text-6xl font-black mb-10 text-white uppercase tracking-tighter">
            Privacy <span className="tech-gradient-text">Protocol</span>
          </h1>
          
          <div className="prose prose-invert max-w-none text-slate-400 space-y-8 font-light">
            <p className="leading-relaxed">
              Chez <span className="text-primary font-bold uppercase tracking-widest text-xs">Platforms Monitor</span>, accessible depuis platformsmonitor.com, la protection de vos métadonnées et de votre vie privée est intégrée par défaut dans notre architecture.
            </p>

            <h2 className="text-xl font-bold text-white uppercase mt-8">Fichiers Journaux</h2>
            <p>
              Platforms Monitor suit une procédure standard d&apos;utilisation des fichiers journaux. Ces fichiers enregistrent les visiteurs lorsqu&apos;ils visitent des sites Web. Toutes les entreprises d&apos;hébergement le font et cela fait partie des analyses des services d&apos;hébergement. Les informations collectées par les fichiers journaux comprennent les adresses de protocole Internet (IP), le type de navigateur, le fournisseur de services Internet (FAI), l&apos;horodatage, les pages de référence/sortie et éventuellement le nombre de clics.
            </p>

            <h2 className="text-xl font-bold text-white uppercase mt-8">Cookies et Balises Web</h2>
            <p>
              Comme tout autre site Web, Platforms Monitor utilise des &quot;cookies&quot;. Ces cookies sont utilisés pour stocker des informations, notamment les préférences des visiteurs et les pages du site Web auxquelles le visiteur a accédé ou qu&apos;il a visitées. Les informations sont utilisées pour optimiser l&apos;expérience des utilisateurs en personnalisant le contenu de notre page Web en fonction du type de navigateur des visiteurs et/ou d&apos;autres informations.
            </p>

            <h2 className="text-xl font-bold text-white uppercase mt-8">Politiques de Confidentialité des Tiers</h2>
            <p>
              La politique de confidentialité de Platforms Monitor ne s&apos;applique pas aux autres annonceurs ou sites Web. Ainsi, nous vous conseillons de consulter les politiques de confidentialité respectives de ces serveurs publicitaires tiers pour des informations plus détaillées. Elle peut inclure leurs pratiques et des instructions sur la manière de se retirer de certaines options.
            </p>

            <h2 className="text-xl font-bold text-white uppercase mt-8">Information sur l&apos;Annonceur</h2>
            <p>
              Platforms Monitor est détenu et financé exclusivement par <span className="text-primary font-bold">CHRISTOPHER DAVID CHAPMAN</span>, résidant en Nouvelle-Zélande. Cet annonceur prend en charge l&apos;intégralité des coûts publicitaires liés au fonctionnement du site. CHRISTOPHER DAVID CHAPMAN ne possède aucune autre organisation et Platforms Monitor ne diffuse aucune publicité politique au sein de l&apos;Union Européenne.
            </p>

            <h2 className="text-xl font-bold text-white uppercase mt-8">Consentement</h2>
            <p>
              En utilisant notre site Web, vous consentez par la présente à notre politique de confidentialité et acceptez ses conditions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
