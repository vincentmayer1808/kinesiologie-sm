import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="pt-12">
      <div className="pt-12 p-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        <div className="sm:w-1/2 flex flex-col justify-center items-center gap-2">
          <h2 className="text-4xl font-semibold text-center text-cyan-800"> Qui suis-je? </h2>
          <p className="text-right">
            Depuis toujours j&#8217;adore bouger et aider les gens. Avec les
            études, j&#8217;ai compris davantage les bienfaits d&#8217;intégrer
            un style de vie actif et maintenant je souhaite vous aider à y
            parvenir… parce que non ce n&#8217;est pas facile!
          </p>
          <p className="text-left">
            Pour moi, la kinésiologie est le meilleur vaisseau pour partager le
            plaisir de bouger, tout en intégrant certains principes de base de
            la psychologie comportementale et de la science du mouvement humain
            afin de créer une réelle différence dans la vie de mes client(e)s.
          </p>
          <p className="text-right">
            Mon but est d&#8217;optimiser la qualité de vie de mes client(e)s en
            leur proposant un programme 100% adapté à leurs besoins du moment.
            J&#8217;offre un accompagnement tout au long du programme parce que
            je crois que c&#8217;est un élément essentiel à la sécurité et à la
            réussite de celui-ci.
          </p>
        </div>
        <div className="sm:w-1/2 ">
          {/* <Image
            src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696343046/quiSabLoic_wckyak.webp"
            alt="Sab et Loïc"
            fill={true}
            // sizes="(max-widht:600px)100vw, 100px"
            // className="object-contain"
          /> */}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 w-ful bg-red-300 bg-red-300 -">
        <div className="sm:w-1/2">
          <Image src="" alt="" width="50vw" />
          {/* (IMAGE; Sab en consultation) -positionnement idéal à côté du texte */}
        </div>
        <div className="sm:w-1/2 flex flex-col items-center justfy-center gap-2 p-6">
          <h3 className="text-3xl font-semibold text-center text-cyan-800">
            Une approche humaine !
          </h3>
          <p>
            Je mets un point d&#8217;honneur à ce que mes clients reçoivent des
            suggestions personnalisées qui les aideront à trouver un style de
            vie actif qui leur convienne. Je crée des programmes efficaces-
            simples et plaisants. J&#8217;adore offrir un accompagnement
            bienveillant et motivant tout en utilisant une approche centrée sur
            les besoins de mes clients !
          </p>
          <Link href="/services" className="hover:text-cyan-800 hover:scale-105">EN SAVOIR PLUS</Link>
        </div>
           
      </div>
      <div  className="flex flex-col items-center justfy-center gap-2">
        <h3 className="text-3xl font-semibold text-center text-cyan-800">Études et formations</h3>
        <ul className=" flex flex-col gap-4 items-center justify-center">
          <li>
            Formation &#8217;Health Behavior Change : From evidence to
            action&#8217; - Yale (2023)
          </li>
          <li>
            Formation &#8217;Activité physique et vieillissement&#8217;- Bia
            (2021)
          </li>
          <li>Baccalauréat en kinésiologie - UQAM (2021)</li>
          <li>Certificat MamanBB (2021)</li>
          <li>Peri100 ; Formation théorique en AP périnatale</li>
          <li>Peri200; Formation pratique en AP périnatale</li>
          <li>Peri300; Formation en rééducation abdominale et pelvienne</li>
          <li>Instructeur de groupe Canfitpro (2013)</li>
        </ul>
        <p>*Membre de la FKQ (reçu disponible pour assurance et impôt)</p>
      </div>
    </div>
  );
};

export default page;
