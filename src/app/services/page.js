import RV from "@/components/RV";
import { Services } from "@/components/Services";
import Image from "next/image";
import React from "react";
import { dancingScript } from "../fonts";
// className="text-2xl sm:text-4xl text-gris font-bold" 
const page = () => {
  return (
    <div className="text-center">
      <div className=" relative w-screen pb-6">
        <Image
          src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696963946/openheart_cburqw.webp"
          alt="openheart"
          width={2500}
          height={1500}
        />
        <div className="text-3xl sm:text-6xl text-white font-bold text-left z-10 absolute top-20 left-10 z-10 md:w-1/2 pl-5 pb-2">
          <h2 className={dancingScript.className}>Retrouve-toi !</h2>
        </div>
      </div>
      <Services />
      <div id="carte" className="flex flex-col justify-center items-center gap-4 p-6 pt-14">
        <h3 className="text-2xl font-semibold text-vert">Les séances à la carte</h3>
        <p>
          Ce forfait demande une rencontre initiale au préalable afin
          d&#8217;évaluer vos besoins et créer un programme adapté.{" "}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-evenly gap-4">
          <div className="w-52 h-36 bg-vert p-6 flex flex-col items-center justify-center gap-2 rounded-lg shadow shadow-black hover:shadow-lg hover:shadow-black hover:scale-105">
            <h4 className="text-lg">Rencontre initiale + création du programme : </h4>
            <p>90 $ </p>
          </div>
          <div className="w-52 h-36 bg-vert p-6 flex flex-col items-center justify-center gap-2 rounded-lg shadow shadow-black hover:shadow-lg hover:shadow-black hover:scale-105">
            <h4 className="text-lg">Séance Individuelle :</h4>
            <p>1H | 70 $</p>
          </div>
          <div className="w-52 h-36 bg-vert p-6 flex flex-col items-center justify-center gap-2 rounded-lg shadow shadow-black hover:shadow-lg hover:shadow-black hover:scale-105">
            <h4 className="text-lg"> Séance Semi-Privée (2à3) : </h4>
            <p>1H | 95 $</p>
          </div>
        </div>
        <RV />
        <p>
          *Un rabais peut s&#8217;appliquer pour la prise de plusieurs séances.
        </p>
      </div>
<div className="h-screen">
      <h3 id="maternite" className="text-2xl font-semibold text-vert pt-14">
        Les forfaits autour de la maternité
      </h3>
      <div className="flex flex-col md:flex-row md:h-5/6 justify-evenly items-center gap-4 p-6">
        <div className="md:w-1/2 md:h-full bg-vert p-6 flex flex-col justify-center items-center gap-2 rounded-lg shadow shadow-black hover:shadow-lg hover:shadow-black hover:scale-105">
          <h4 className="text-2xl text-rosekine font-semibold">L&#8217;essentiel </h4>
          <ul >
            <li>
              <h5 className="font-medium">Rencontre initiale (1H)</h5>
              <ul className="list-inside list-disc pb-2">
                <li>Évaluation des besoins</li>
                <li>Détermination des objectifs</li>
                <li>Vidéo explicatif du programme</li>
              </ul>
            </li>
            <li>
              <h5 className="font-medium">Seconde Rencontre (30 min)</h5>
              <ul className="list-inside list-disc pb-2">
                <li>Explication des principes de base liés au mouvement et à la grossesse</li>
              </ul>
            </li>
            <li>
              <h5 className="font-medium">3 Suivis (10 min)</h5>
              <ul className="list-inside list-disc pb-2">
                <li>Répartis sur la durée du forfait</li>
              </ul>
            </li>
          </ul>
          {/* <p>
            Ce forfait comprend une rencontre initiale (1h) où l&#8217;on
            évaluera tes besoins et déterminera tes objectifs, un vidéo
            explicatif de ton programme auquel tu pourras te référer, une
            seconde rencontre (30 min) afin d&#8217;expliquer les principes de
            base liés au mouvement et à la grossesse adaptée à ta situation et 3
            autres suivis de 10 minutes répartis sur la durée de ton forfait.
          </p> */}
          <p>
            Ce forfait permet d&#8217;adapter ton programme selon les symptômes
            qui peuvent survenir et les changements physiologiques liés à la
            grossesse.{" "}
          </p>
          <RV />
        </div>
        <div className="md:w-1/2 md:h-full bg-vert p-6 flex flex-col justify-center items-center gap-2 rounded-lg shadow shadow-black hover:shadow-lg hover:shadow-black hover:scale-105">
          <h4 className="text-2xl text-rosekine font-semibold">La progression</h4>
          <ul >
            <li>
              <h5 className="font-medium">Rencontre initiale (1H)</h5>
              <ul className="list-inside list-disc pb-2">
                <li>Évaluation des besoins</li>
                <li>Détermination des objectifs</li>
                <li>Vidéo explicatif du programme</li>
              </ul>
            </li>
            <li>
              <h5 className="font-medium">Seconde Rencontre (30 min)</h5>
              <ul className="list-inside list-disc pb-2">
                <li>Explication des principes de base liés au mouvement et à la grossesse</li>
              </ul>
            </li>
            <li>
              <h5 className="font-medium">Troisième Rencontre (30 min)</h5>
              <ul className="list-inside list-disc pb-2">
                <li>Réévaluation des objectifs</li>
                <li>Vidéo explicatif du nouveau programme</li>
              </ul>
            </li>
            <li>
              <h5 className="font-medium">3 Suivis (10 min)</h5>
              <ul className="list-inside list-disc pb-2">
                <li>Répartis sur la durée du forfait</li>
              </ul>
            </li>
          </ul>
          {/* <p>
            Ce forfait comprend une rencontre initiale (1h) où l&#8217;on
            évaluera tes besoins et déterminera tes objectifs, un vidéo
            explicatif de ton programme auquel tu pourras te référer, une
            seconde rencontre (30 min) afin d&#8217;expliquer les principes de
            base liés au mouvement et à la grossesse adaptée à ta situation, une
            troisième rencontre (30 min) afin de réévaluer tes objectifs, un
            vidéo explicatif de ton tout nouveau programme et 3 suivis de 10
            minutes répartis sur la durée de ton forfait.
          </p> */}
          <p>
            Ce forfait est idéal pour les futures ou les nouvelles mamans qui
            veulent une approche à long terme de l&#8217;intégration d&#8217;un
            style de vie plus actif et adapté à leur évolution.
          </p>
          <RV />
        </div>
      </div>
      </div>
<div className="h-screen">
      <h3 id="pelvienne" className="text-2xl font-semibold text-vert pt-14">
        Les forfaits autour de la santé abdominale & pelvienne
      </h3>
      <div className="flex justify-evenly gap-4 p-6">
        <div className=" bg-vert p-6 flex flex-col items-center gap-2 rounded-lg shadow shadow-black hover:shadow-lg hover:shadow-black hover:scale-105">
          <h4 className="text-2xl text-rosekine font-semibold">Premier pas</h4>
          <ul >
            <li>
              <h5 className="font-medium">Rencontre initiale (± 1H)</h5>
              <ul className="list-inside list-disc pb-2">
                <li>Évaluation des besoins</li>
                <li>Détermination des objectifs</li>
                <li>Vidéo explicatif du programme</li>
              </ul>
            </li>
            <li>
              <h5 className="font-medium">Seconde Rencontre (30 min)</h5>
              <ul className="list-inside list-disc pb-2">
                <li>Explication des principes de base de la santé abdominale et pelvienne</li>
              </ul>
            </li>
            <li>
              <h5 className="font-medium">3 Suivis (10 min)</h5>
              <ul className="list-inside list-disc pb-2">
                <li>Répartis sur la durée du forfait</li>
              </ul>
            </li>
          </ul>
          {/* <p>
            Ce forfait comprend une rencontre initiale (1h) où l&#8217;on
            évaluera tes besoins et déterminera tes objectifs, un vidéo
            explicatif de ton programme auquel tu pourras te référer, une
            seconde rencontre (30 min) afin d&#8217;expliquer les principes de
            base de la santé abdominale et pelvienne et 3 autres suivis de 10
            minutes répartis sur la durée de ton forfait.
          </p> */}
          <p>
            Ce forfait est idéal pour ceux et celles qui veulent optimiser sa santé
            abdominale et pelvienne par le biais de l&#8217;exercice et de
            l&#8217;éducation. Que ce soit pour la prévention ou aider à guérir
            certains symptômes (tels que les fuites ou les descentes
            d&#8217;organe) ce programme est pour toi.{" "}
          </p>
          <RV />
        </div>
        <div className=" bg-vert p-6 flex flex-col items-center gap-2 rounded-lg shadow shadow-black hover:shadow-lg hover:shadow-black hover:scale-105">
          <h4 className="text-2xl text-rosekine font-semibold">L&#8217;intégration </h4>
          <p>Ce forfait s&#8217;échelonne sur une période de 12 semaines.</p>
          <ul className="list-inside list-disc pb-4">
            <li>
              Rencontre mensuelle 
            </li>
            <span className="text-sm">(où l&#8217;on évaluera tes besoins et déterminera tes objectifs)</span>
            <li>
              Vidéo explicative de chacun de tes programmes(3)(à laquelle tu pourras te référer)
            </li>
            <li>Série de vidéos (12) sur la santé abdominale et pelvienne</li>
            <li>Suivi hebdomadaire (9) durant la durée de ton forfait</li>
          </ul>
          {/* <p>
            Ce forfait s&#8217;échelonne sur une période de 12 semaines. Il
            comprend une rencontre mensuelle (30min) où l&#8217;on évaluera tes
            besoins et déterminera tes objectifs, un vidéo explicatif de chacun
            de tes programmes (3) auquel tu pourras te référer, une série de
            vidéo (12) sur la santé abdominale et pelvienne et un suivi
            hebdomadaire (9) durant la durée de ton forfait.
          </p> */}
          <p>
            Ce forfait permet de progresser à son rythme afin de constater de réels changements sur sa santé abdominale et pelvienne. Il aide à prévenir et/ou guérir certains symptômes (tels que les fuites ou une descente d&#8217;organe) tout en changeant progressivement certaines habitudes de vie pour un maintien des effets à très long terme.
          </p>
          <RV />
        </div>
      </div>
      </div>
<div className="h-screen">
      <h3 id="50" className="text-2xl font-semibold text-vert pt-14">
        Les forfaits 50+ en mouvement{" "}
      </h3>
      <div className=" flex flex-wrap justify-evenly gap-4 p-6 mb-6">
        <div className="bg-vert p-6 flex flex-col items-center gap-2 rounded-lg shadow shadow-black hover:shadow-lg hover:shadow-black hover:scale-105">
          <h4 className="text-2xl text-rosekine font-semibold">En action</h4>
          <ul className="list-inside list-disc pb-4">
            <li>Rencontre initiale (où l&#8217;on évaluera tes besoins et déterminera tes objectifs)</li>
            <li>Vidéo explicative de ton programme (à laquelle tu pourras te référer)</li>
            <li>6 autres suivis de 10 minutes répartis sur la durée de ton forfait</li>
          </ul>
          {/* <p>
            Ce forfait comprend une rencontre initiale (1h) où l&#8217;on
            évaluera tes besoins et déterminera tes objectifs, un vidéo
            explicatif de ton programme auquel tu pourras te référer et 6 autres
            suivis de 10 minutes répartis sur la durée de ton forfait.
          </p> */}
          <p>
            Ce forfait est idéal pour ceux et celles qui veulent se mette en action tout en ayant un suivi adapté. Il est conçu pour un accompagnement pendant 3 mois.
          </p>
          <RV />
        </div>
        <div className="bg-vert p-6 flex flex-col items-center gap-2 rounded-lg shadow shadow-black hover:shadow-lg hover:shadow-black hover:scale-105">
          <h4 className="text-2xl text-rosekine font-semibold">
            La prise en charge complète
          </h4>
          <ul className="list-inside list-disc pb-4">
            <li>Rencontre initiale (où l&#8217;on évaluera tes besoins et déterminera tes objectifs)</li>
            <li>un entrainement accompagné en direct (vidéo ou en présentiel*) 3x par semaine, et ce, pour une durée de 12 semaines.</li>
            <li>6 autres suivis de 10 minutes répartis sur la durée de ton forfait</li>
          </ul>
       
          <p>
            Ce forfait permet d&#8217;adapter le programme au fur et à mesure de
            ton évolution et briser la monotonie. Il permet un contact humain à
            chaque séance afin de perfectionner l&#8217;exécution des mouvements
            et aider à la motivation.{" "}
          </p>
          <RV />
        </div>
      </div>
      </div>

      <div className="bg-gradient-to-b from-white from-neutral-300 to-white text-2xl p-4 pt-10 pb-10 italic">
        <p>&#39;&#39;Quelle chance de pouvoir atténuer certains malaises et inconforts que la vieillesse m&#8217;a fait découvrir. Merci de partager ton savoir par tes exercices et surtout ton incroyable motivation à les inclure dans mon quotidien afin que je vieillisse plus souple et épanouie.&#39;&#39;</p>
      <p>- Suzanne</p>
      </div>
    </div>
  );
};

export default page;
