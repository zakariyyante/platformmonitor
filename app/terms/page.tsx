import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-20 px-4">
        <div className="container mx-auto max-w-3xl glass-morphism cyber-border p-10 md:p-16 rounded-sm">
          <h1 className="text-4xl md:text-6xl font-black mb-10 text-white uppercase tracking-tighter">
            Terms of <span className="tech-gradient-text">Access</span>
          </h1>
          
          <div className="prose prose-invert max-w-none text-slate-400 space-y-8 font-light">
            <p className="leading-relaxed">
              Bienvenue dans le portail <span className="text-primary font-bold uppercase tracking-widest text-xs">Platforms Monitor</span>.
            </p>
            <p>
              Ces termes et conditions décrivent les règles et règlements pour l&apos;utilisation du site Web de Platforms Monitor, situé à l&apos;adresse platformsmonitor.com.
            </p>
            <p>
              En accédant à ce site Web, nous supposons que vous acceptez ces termes et conditions. Ne continuez pas à utiliser Platforms Monitor si vous n&apos;acceptez pas de prendre tous les termes et conditions énoncés sur cette page.
            </p>

            <h2 className="text-xl font-bold text-white uppercase mt-8">Licence</h2>
            <p>
              Sauf indication contraire, Platforms Monitor et/ou ses concédants de licence détiennent les droits de propriété intellectuelle pour tout le matériel sur Platforms Monitor. Tous les droits de propriété intellectuelle sont réservés. Vous pouvez y accéder à partir de Platforms Monitor pour votre usage personnel, sous réserve des restrictions définies dans les présents termes et conditions.
            </p>

            <h2 className="text-xl font-bold text-white uppercase mt-8">Transparence et Propriété</h2>
            <p>
              Platforms Monitor est une plateforme indépendante financée par <span className="text-primary font-bold">CHRISTOPHER DAVID CHAPMAN</span> (Nouvelle-Zélande). L&apos;annonceur couvre les frais publicitaires du site et n&apos;est propriétaire d&apos;aucune autre entité commerciale. Nous garantissons que Platforms Monitor ne participe à aucune campagne publicitaire politique dans l&apos;UE.
            </p>

            <h2 className="text-xl font-bold text-white uppercase mt-8">Vous ne devez pas :</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Republier le matériel provenant de Platforms Monitor</li>
              <li>Vendre, louer ou sous-licencier du matériel provenant de Platforms Monitor</li>
              <li>Reproduire, dupliquer ou copier du matériel provenant de Platforms Monitor</li>
              <li>Redistribuer le contenu de Platforms Monitor</li>
            </ul>

            <h2 className="text-xl font-bold text-white uppercase mt-8">Avis de Non-responsabilité</h2>
            <p>
              Dans la mesure maximale permise par la loi applicable, nous excluons toutes les représentations, garanties et conditions relatives à notre site Web et à l&apos;utilisation de ce site Web. Rien dans cet avis de non-responsabilité ne :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>limitera ou exclura notre ou votre responsabilité en cas de décès ou de blessure corporelle ;</li>
              <li>limitera ou exclura notre ou votre responsabilité en cas de fraude ou de fausse déclaration frauduleuse ;</li>
              <li>limitera l&apos;une de nos ou de vos responsabilités d&apos;une manière qui n&apos;est pas autorisée par la loi applicable ;</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
