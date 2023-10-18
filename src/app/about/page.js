import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className=" relative pt-4">
        <Image src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1697478355/Image-_page-qui_suis-je_entete_c1paxq.webp" alt="Foret" width={2500} height={1500} />
        <div className="text-left text-white z-10 absolute bottom-0 left-0 z-10 md:w-1/2 pl-5 pb-2">
          <h2 className="text-xl sm:text-4xl lg:text-6xl font-bold text-cente">MA MISION</h2>
          <p className="sm:font-semibold lg:text-xl">T&#8217;aider à améliorer ta qualité de vie grâce à l&#8217;activité physique. </p>
        </div>
      </div>
      <div className=" p-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        <div className="sm:w-1/2 flex flex-col justify-center items-center gap-2 text-center p-2">
          <h2 className=" text-2xl sm:text-4xl font-semibold text-vert"> Qui suis-je? </h2>
          <p >
            Depuis toujours j&#8217;adore bouger et aider les gens. Avec mes études, j&#8217;ai compris davantage les bienfaits d&#8217;intégrer un style de vie actif. Maintenant, je souhaite t&#8217;aider à y parvenir parce que… non ce n&#8217;est pas facile!
          </p>
          <p >
            Pour moi, la <span className="text-pilates">kinésiologie</span> est le meilleur vaisseau pour partager le plaisir de bouger tout en intégrant certains principes de base de la psychologie comportementale et de la science du mouvement humain afin de créer une réelle différence dans la vie de mes client(e)s.
          </p>
          <p >
            Mon but est d&#8217;<span className="text-pilates">optimiser la qualité de vie</span> de mes client(e)s en leur proposant un programme 100% adapté à leurs besoins du moment. J&#8217;offre un accompagnement tout au long du programme parce que je crois que c&#8217;est un élément essentiel à la sécurité et à la réussite de celui-ci.
          </p>
        </div>
        <div className="sm:w-1/2 relative flex justify-center items-center">
          <Image
            src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696343046/quiSabLoic_wckyak.webp"
            alt="Sab et Loïc"
            width={600}
            height={1000}
            className="max-w-sm"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-2 w-full">
        <div className="sm:w-1/2 flex justify-center items-center">
          <Image src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1697480384/avion_uwfbzg.webp"
            alt="Une approche humaine"
            width={500}
            height={500}
            className="max-w-xs" />
          {/* (IMAGE; Sab en consultation) -positionnement idéal à côté du texte */}
        </div>
        <div className="sm:w-1/2 flex flex-col items-center justfy-center text-center gap-2 p-6">
          <h3 className="text-2xl sm:text-4xl font-semibold text-vert">
            Une approche humaine !
          </h3>
          <p>
            Je mets un point d&#8217;honneur à ce que mes clients reçoivent des suggestions personnalisées qui les aideront à trouver un style de vie actif qui leur convienne. Je crée des programmes efficaces, simples et plaisants. J&#8217;adore offrir un accompagnement bienveillant et motivant tout en utilisant une approche centrée sur les besoins de mes clients !
          </p>
          <Link href="/services" className="w-52 bg-pilates px-3 py-2 flex items-center justify-center font-semibold text-center text-white rounded-lg ring-white ring-2 hover:scale-105 transtion-all duration-200 hover:ring-vert hover:shadow-vert hover:shadow-lg hover:ring-vert"
          >MES SERVICES</Link>
        </div>

      </div>

      <div className="flex flex-col items-center justfy-center gap-2 bg-vert p-5 text-center">
        <h3 className="text-3xl font-semibold text-rosekine">Études et formations</h3>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <ul className=" flex flex-col gap-4 items-center justify-center list-inside list-disc">
            <li>
              Formation &#8217;Health Behavior Change : From evidence to
              action&#8217; - Yale (2023)
            </li>
            <li>
              Formation &#8217;Activité physique et vieillissement&#8217;- Bia
              (2021)
            </li>
            <li>Baccalauréat en kinésiologie - UQAM (2021)</li>
            <li>Certificat MamanBB (2021)
              <ul>
                
                <li>Peri100 ; Formation théorique en AP périnatale</li>
                <li>Peri200; Formation pratique en AP périnatale</li>
                <li>Peri300; Formation en rééducation abdominale et pelvienne</li>
              </ul>
            </li>
            <li>Instructeur de groupe Canfitpro (2013)</li>
          </ul>
          <div className="bg-vert max-w-sm flex justify-center items-center">
            <Image
              src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1697483145/Image_%C3%A9tude_dwhrkj.webp"
              alt="Étudiante"
              width={400}
              height={400}
            />
          </div>
        </div>
        <p>*Membre de la Fédération des Kinésiologue du Québec (FKQ) (reçu disponible pour fin d&#8217;assurance)</p>
      </div>

    </>
  );
};

export default page;
