import RV from "@/components/RV";
import { Services } from "@/components/Services";
import Image from "next/image";
import React from "react";
import { dancingScript } from "../fonts";
// className="text-2xl sm:text-4xl text-gris font-bold" 
const page = () => {
  return (
    <div className="text-center">
      <div className=" relative w-screen">
        <Image
          src="https://res.cloudinary.com/dvowvfxfi/image/upload/v1696963946/openheart_cburqw.webp"
          alt="openheart"
          width={2500}
          height={1500}
        />
        <div className="text-2xl sm:text-6xl text-white font-bold text-left z-10 absolute top-20 left-0 z-10 md:w-1/2 pl-5 pb-2">
          <h2 className={dancingScript.className}>RETROUVES-TOI</h2>
        </div>
      </div>
      <Services />
      <div id="carte" className="flex flex-col justify-center items-center gap-4 p-6 pt-12">
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
      <h3 id="maternite" className="text-2xl font-semibold text-vert">
        Les forfaits autour de la maternité
      </h3>
      <div className="w-screen flex flex-wrap justify-evenly items-center gap-4 p-6">
        <div className="w-80 bg-vert p-6 flex flex-col items-center gap-2 rounded-lg shadow shadow-black hover:shadow-lg hover:shadow-black hover:scale-105">
          <h4 className="text-2xl text-rosekine">L&#8217;essentiel </h4>
          <p>
            Ce forfait comprend une rencontre initiale (1h) où l&#8217;on
            évaluera tes besoins et déterminera tes objectifs, un vidéo
            explicatif de ton programme auquel tu pourras te référer, une
            seconde rencontre (30 min) afin d&#8217;expliquer les principes de
            base liés au mouvement et à la grossesse adaptée à ta situation et 3
            autres suivis de 10 minutes répartis sur la durée de ton forfait.
          </p>
          <p>
            Ce forfait permet d&#8217;adapter ton programme selon les symptômes
            qui peuvent survenir et les changements physiologiques liés à la
            grossesse.{" "}
          </p>
          <RV />
        </div>
        <div className="w-80 bg-vert p-6 flex flex-col items-center gap-2 rounded-lg shadow shadow-black hover:shadow-lg hover:shadow-black hover:scale-105">
          <h4 className="text-2xl text-rosekine">La progression</h4>
          <p>
            Ce forfait comprend une rencontre initiale (1h) où l&#8217;on
            évaluera tes besoins et déterminera tes objectifs, un vidéo
            explicatif de ton programme auquel tu pourras te référer, une
            seconde rencontre (30 min) afin d&#8217;expliquer les principes de
            base liés au mouvement et à la grossesse adaptée à ta situation, une
            troisième rencontre (30 min) afin de réévaluer tes objectifs, un
            vidéo explicatif de ton tout nouveau programme et 3 suivis de 10
            minutes répartis sur la durée de ton forfait.
          </p>
          <p>
            Ce forfait est idéal pour les futures ou les nouvelles mamans qui
            veulent une approche à long terme de l&#8217;intégration d&#8217;un
            style de vie plus actif et adapté à leur évolution.
          </p>
          <RV />
        </div>
      </div>
      <h3 id="pelvienne" className="text-2xl font-semibold text-vert">
        Les forfaits autour de la santé abdominale & pelvienne
      </h3>
      <div className="flex flex-wrap justify-evenly gap-4 p-6">
        <div className="w-80 bg-vert p-6 flex flex-col items-center gap-2 rounded-lg shadow shadow-black hover:shadow-lg hover:shadow-black hover:scale-105">
          <h4 className="text-2xl text-rosekine">Premier pas</h4>
          <p>
            Ce forfait comprend une rencontre initiale (1h) où l&#8217;on
            évaluera tes besoins et déterminera tes objectifs, un vidéo
            explicatif de ton programme auquel tu pourras te référer, une
            seconde rencontre (30 min) afin d&#8217;expliquer les principes de
            base de la santé abdominale et pelvienne et 3 autres suivis de 10
            minutes répartis sur la durée de ton forfait.
          </p>
          <p>
            Ce forfait est idéal pour celles qui veulent optimiser sa santé
            abdominale et pelvienne par le biais de l&#8217;exercice et de
            l&#8217;éducation. Que ce soit pour la prévention ou aider à guérir
            certains symptômes (tels que les fuites ou les descentes
            d&#8217;organe) ce programme est pour toi.{" "}
          </p>
          <RV />
        </div>
        <div className="w-80 bg-vert p-6 flex flex-col items-center gap-2 rounded-lg shadow shadow-black hover:shadow-lg hover:shadow-black hover:scale-105">
          <h4 className="text-2xl text-rosekine">L&#8217;intégration </h4>
          <p>
            Ce forfait s&#8217;échelonne sur une période de 12 semaines. Il
            comprend une rencontre mensuelle (30min) où l&#8217;on évaluera tes
            besoins et déterminera tes objectifs, un vidéo explicatif de chacun
            de tes programmes (3) auquel tu pourras te référer, une série de
            vidéo (12) sur la santé abdominale et pelvienne et un suivi
            hebdomadaire (9) durant la durée de ton forfait.
          </p>
          <p>
            Ce forfait permet de progresser à son rythme pour voir de réel
            changement sur sa santé abdominale et pelvienne. Il aide à prévenir
            ou guérir certains symptômes (tels que les fuites ou les descentes
            d&#8217;organe) tout en changeant progressivement certaines
            habitudes de vie pour un maintien des effets à très long terme.{" "}
          </p>
          <RV />
        </div>
      </div>
      <h3 id="50" className="text-2xl font-semibold text-vert">
        Les forfaits 50+ en mouvement{" "}
      </h3>
      <div className=" flex flex-wrap justify-evenly gap-4 p-6">
        <div className="w-80 bg-vert p-6 flex flex-col items-center gap-2 rounded-lg shadow shadow-black hover:shadow-lg hover:shadow-black hover:scale-105">
          <h4 className="text-2xl text-rosekine">En action</h4>
          <p>
            Ce forfait comprend une rencontre initiale (1h) où l&#8217;on
            évaluera tes besoins et déterminera tes objectifs, un vidéo
            explicatif de ton programme auquel tu pourras te référer et 6 autres
            suivis de 10 minutes répartis sur la durée de ton forfait.
          </p>
          <p>
            Ce forfait est idéal pour ceux qui veulent se mette en action tout
            en aillant un suivi adapté. Il est conçu pour un accompagnement
            pendant 3 mois.{" "}
          </p>
          <RV />
        </div>
        <div className="w-80 bg-vert p-6 flex flex-col items-center gap-2 rounded-lg shadow shadow-black hover:shadow-lg hover:shadow-black hover:scale-105">
          <h4 className="text-2xl text-rosekine">
            La prise en charge complète
          </h4>
          <p>
            Ce forfait comprend une rencontre initiale (1h) où l&#8217;on
            évaluera tes besoins et déterminera tes objectifs. Un entrainement
            accompagné en direct (vidéo ou en présentiel*) 3x par semaine pour
            une durée de 12 semaines.{" "}
          </p>
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
  );
};

export default page;
