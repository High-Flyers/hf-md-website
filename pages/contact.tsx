import { NextPage } from "next";
import BaseText from "../components/utils/base-text";
import MainTitle from "../components/utils/main-title";
import SectionTitle from "../components/utils/section-title";
import Socials from "../components/utils/socials";


const Contact: NextPage<{}> = () => {
    return (
       <section className="container mx-auto p-4 flex flex-col gap-y-6 mx-auto max-w-[700px]">
           <MainTitle name="KONTAKT" /> 
           <BaseText className="text-center">
                Jeśli chcesz nawiązać z nami współpracę lub masz dla nas 
                jakąś ciekawą ofertę, zachęcamy do kontaktu mailowego na adres:
            </BaseText>
            <BaseText className="text-bold underline text-center">highflyers.polsl@gmail.com</BaseText>
            <BaseText className="text-center">
                W razie jakichkolwiek pytań, możecie zawsze do nas napisać 
                w wiadomości prywatnej na naszym oficjalnym fanpagu!
            </BaseText>
            <SectionTitle name="SOCIALS" />
            <BaseText>
                Zapraszamy również na nasze social media, na których możecie dowiedzieć 
                się o nas więcej i śledzić nas na bieżąco!
            </BaseText>
            <Socials />
       </section> 
    )
}

export default Contact;
