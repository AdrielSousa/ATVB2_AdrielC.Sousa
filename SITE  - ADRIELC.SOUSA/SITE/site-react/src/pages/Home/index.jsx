import { SectionBanner } from '../../components/SectionBanner';
import { SectionReasons } from '../../components/SectionReasons';
import { SectionSpecialists } from '../../components/SectionSpecialists';
import { SectionCards } from '../../components/SectionCards';
import { ImovelContextProvider } from '../../context/ImovelContext';

export function HomePage() {
    return (
        <div id="home-page">
            <div className="container">

                <ImovelContextProvider>
                    <SectionBanner />
                    <SectionCards />
                </ImovelContextProvider>

                <SectionReasons />

                <SectionSpecialists />

            </div>
        </div>
    )
}