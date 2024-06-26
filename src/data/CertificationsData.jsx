import Hackathon from "../imgs/Certificado HACKATHON.webp";
import Expowork from "../imgs/Certificado Expowork.webp";
import Helpdesk from "../imgs/Certificado Help Desk.webp";
import TypeScript from "../imgs/Certificado TypeScript.webp";
import Javascript from "../imgs/Certificado Javascript.webp";
import Responsive from "../imgs/Certificado Responsive.webp";
import CCNAv7Switching from "../imgs/Certificado CCNAv7 Switching.webp";
import CCNAv7Redes from "../imgs/Certificado CCNAv7 Redes.webp";
import CyberOps from "../imgs/Certificado CyberOps.webp";
import CCNAv7Introduction from "../imgs/Certificado Introduccion.webp";
import Seguridad from "../imgs/Certificado Seguridad.webp";
import Python from "../imgs/Certificado Python.webp";

import HackathonSmall from "../imgs/Certificado HACKATHON small.webp";
import ExpoworkSmall from "../imgs/Certificado Expowork small.webp";
import HelpdeskSmall from "../imgs/Certificado Help Desk small.webp";
import TypeScriptSmall from "../imgs/Certificado TypeScript small.webp";
import JavascriptSmall from "../imgs/Certificado Javascript small.webp";
import ResponsiveSmall from "../imgs/Certificado Responsive small.webp";
import CCNAv7SwitchingSmall from "../imgs/Certificado CCNAv7 Switching small.webp";
import CCNAv7RedesSmall from "../imgs/Certificado CCNAv7 Redes small.webp";
import CyberOpsSmall from "../imgs/Certificado CyberOps small.webp";
import CCNAv7IntroductionSmall from "../imgs/Certificado Introduccion small.webp";
import SeguridadSmall from "../imgs/Certificado Seguridad small.webp";
import PythonSmall from "../imgs/Certificado Python small.webp";
import { useTranslation } from "react-i18next";

const CertificationsData = () => {
  const { t } = useTranslation();
  const certifications = [
    {
      id: "1",
      date: `${t(
        "Certifications Section.Certifications.First Certification.Date"
      )} - 2023`,
      company: "Universidad César Vallejo",
      title: `${t(
        "Certifications Section.Certifications.First Certification.Title"
      )}`,
      img: Hackathon,
      smallImg: HackathonSmall,
      url: "https://www.linkedin.com/in/carlos-enrique-oropeza/details/certifications/1710446379869/single-media-viewer/?profileId=ACoAADyQbPoB1hVA1JXn8w_bFPHn-pqBk0a_swk",
    },
    {
      id: "2",
      date: `${t(
        "Certifications Section.Certifications.Second Certification.Date"
      )} - 2023`,
      company: "Universidad César Vallejo",
      title: `${t(
        "Certifications Section.Certifications.Second Certification.Title"
      )}`,
      img: Expowork,
      smallImg: ExpoworkSmall,
      url: "https://www.linkedin.com/in/carlos-enrique-oropeza/details/certifications/1710443835510/single-media-viewer/?profileId=ACoAADyQbPoB1hVA1JXn8w_bFPHn-pqBk0a_swk",
    },
    {
      id: "3",
      date: `${t(
        "Certifications Section.Certifications.Third Certification.Date"
      )} - 2022`,
      company: "Universidad César Vallejo",
      title: "“Asistente de Help Desk”",
      img: Helpdesk,
      smallImg: HelpdeskSmall,
      url: "https://www.linkedin.com/in/carlos-enrique-oropeza/details/certifications/1710444389027/single-media-viewer/?profileId=ACoAADyQbPoB1hVA1JXn8w_bFPHn-pqBk0a_swk",
    },
    {
      id: "4",
      date: `${t(
        "Certifications Section.Certifications.Fourth Certification.Date"
      )} - 2023`,
      company: "Udemy",
      title: "“TypeScript sin fronteras: guía definitiva”",
      img: TypeScript,
      smallImg: TypeScriptSmall,
      url: "https://www.linkedin.com/in/carlos-enrique-oropeza/details/certifications/1710442896703/single-media-viewer/?profileId=ACoAADyQbPoB1hVA1JXn8w_bFPHn-pqBk0a_swk",
    },
    {
      id: "5",
      date: `${t(
        "Certifications Section.Certifications.Fifth Certification.Date"
      )} - 2023`,
      company: "Udemy",
      title: "“Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero”",
      img: Javascript,
      smallImg: JavascriptSmall,
      url: "https://www.linkedin.com/in/carlos-enrique-oropeza/details/certifications/1710442937830/single-media-viewer/?profileId=ACoAADyQbPoB1hVA1JXn8w_bFPHn-pqBk0a_swk",
    },
    {
      id: "6",
      date: `${t(
        "Certifications Section.Certifications.Sixth Certification.Date"
      )} - 2023`,
      company: "freeCodeCamp",
      title: "“Responsive Web Design”",
      img: Responsive,
      smallImg: ResponsiveSmall,
      url: "https://www.linkedin.com/in/carlos-enrique-oropeza/details/certifications/1710483963868/single-media-viewer/?profileId=ACoAADyQbPoB1hVA1JXn8w_bFPHn-pqBk0a_swk",
    },
    {
      id: "7",
      date: `${t(
        "Certifications Section.Certifications.Seventh Certification.Date"
      )} - 2023`,
      company: "Cisco Networking Academy",
      title: "“CCNAv7: Switching, Routing and Wireless Essentials”",
      img: CCNAv7Switching,
      smallImg: CCNAv7SwitchingSmall,
      url: "https://www.linkedin.com/in/carlos-enrique-oropeza/details/certifications/1710994931792/single-media-viewer/?profileId=ACoAADyQbPoB1hVA1JXn8w_bFPHn-pqBk0a_swk",
    },
    {
      id: "8",
      date: `${t(
        "Certifications Section.Certifications.Eighth Certification.Date"
      )} - 2023`,
      company: "Cisco Networking Academy",
      title: "“CCNAv7: Redes empresariales, Seguridad y Automatización”",
      img: CCNAv7Redes,
      smallImg: CCNAv7RedesSmall,
      url: "https://www.linkedin.com/in/carlos-enrique-oropeza/details/certifications/1710995050294/single-media-viewer/?profileId=ACoAADyQbPoB1hVA1JXn8w_bFPHn-pqBk0a_swk",
    },
    {
      id: "9",
      date: `${t(
        "Certifications Section.Certifications.Ninth Certification.Date"
      )} - 2024`,
      company: "Cisco Networking Academy",
      title: "“CyberOps Associate”",
      img: CyberOps,
      smallImg: CyberOpsSmall,
      url: "https://www.linkedin.com/in/carlos-enrique-oropeza/details/certifications/1710995108368/single-media-viewer/?profileId=ACoAADyQbPoB1hVA1JXn8w_bFPHn-pqBk0a_swk",
    },
    {
      id: "10",
      date: `${t(
        "Certifications Section.Certifications.Tenth Certification.Date"
      )} - 2021`,
      company: "Cisco Networking Academy",
      title: "“CCNAv7: Introducción a Redes”",
      img: CCNAv7Introduction,
      smallImg: CCNAv7IntroductionSmall,
      url: "https://www.linkedin.com/in/carlos-enrique-oropeza/details/certifications/1710994762150/single-media-viewer/?profileId=ACoAADyQbPoB1hVA1JXn8w_bFPHn-pqBk0a_swk",
    },
    {
      id: "11",
      date: `${t(
        "Certifications Section.Certifications.Eleventh Certification.Date"
      )} - 2023`,
      company: "Cisco Networking Academy",
      title: "“Introducción a la Seguridad Cibernética”",
      img: Seguridad,
      smallImg: SeguridadSmall,
      url: "https://www.linkedin.com/in/carlos-enrique-oropeza/details/certifications/1710994863428/single-media-viewer/?profileId=ACoAADyQbPoB1hVA1JXn8w_bFPHn-pqBk0a_swk",
    },
    {
      id: "12",
      date: `${t(
        "Certifications Section.Certifications.Twelfth Certification.Date"
      )} - 2021`,
      company: "OpenEDG Python Institute",
      title: "“PCAP: Programming Essentials in Python”",
      img: Python,
      smallImg: PythonSmall,
      url: "https://www.linkedin.com/in/carlos-enrique-oropeza/details/certifications/1710994633016/single-media-viewer/?profileId=ACoAADyQbPoB1hVA1JXn8w_bFPHn-pqBk0a_swk",
    },
  ];
  return { certifications };
};

export default CertificationsData;
