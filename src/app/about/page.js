import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <h2> Qui suis-je? </h2>
        <p>
          Depuis toujours j&#8217;adore bouger et aider les gens. Avec les
          études, j&#8217;ai compris davantage les bienfaits d&#8217;intégrer un
          style de vie actif et maintenant je souhaite vous aider à y parvenir…
          parce que non ce n&#8217;est pas facile!
        </p>
        <p>
          Pour moi, la kinésiologie est le meilleur vaisseau pour partager le
          plaisir de bouger, tout en intégrant certains principes de base de la
          psychologie comportementale et de la science du mouvement humain afin
          de créer une réelle différence dans la vie de mes client(e)s.
        </p>
        <p>
          Mon but est d&#8217;optimiser la qualité de vie de mes client(e)s en
          leur proposant un programme 100% adapté à leurs besoins du moment.
          J&#8217;offre un accompagnement tout au long du programme parce que je
          crois que c&#8217;est un élément essentiel à la sécurité et à la
          réussite de celui-ci.
        </p>
        <Image src="" alt="" width={100} height={100} />
        {/* (IMAGE; Qui suis-je Sab et bebe) -positionnement idéal à côté du texte */}
      </div>
      <div>
        <Image src="" alt="" width={100} height={100} />
        {/* (IMAGE; Sab en consultation) -positionnement idéal à côté du texte */}

        <h3>Une approche humaine !</h3>
        <p>
          Je mets un point d&#8217;honneur à ce que mes clients reçoivent des
          suggestions personnalisées qui les aideront à trouver un style de vie
          actif qui leur convienne. Je crée des programmes efficaces- simples et
          plaisants. J&#8217;adore offrir un accompagnement bienveillant et
          motivant tout en utilisant une approche centrée sur les besoins de mes
          clients !
        </p>
        <Link href="/services">EN SAVOIR PLUS</Link>
      </div>
      <div>
        <h3>Études et formations</h3>
        <ul>
          <li>
            Formation &#8217;Health Behavior Change : From evidence to action&#8217;
            - Yale (2023)
          </li>
          <li>
            Formation &#8217;Activité physique et vieillissement&#8217;- Bia (2021)
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
