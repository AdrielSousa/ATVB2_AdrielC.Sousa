import './style.css';

const especialistas = [
    {
        nome: 'Pato Branco ',
        cidade: 'Av. Tupi, 5777 - São Cristóvão, Pato Branco - PR, 85507-000',
    },
    {
        nome:'Francisco Beltrão',
        cidade: 'R. Ten. Camargo, 1815 - Centro, Francisco Beltrão - PR, 85601-610',
    },
    {
        nome: 'Chopinzinho, PR',
        cidade: 'São José, Chopinzinho - PR, 85560-000',
    }
];

export function SectionSpecialists() {
    return (
        <section id="specialists">
            <h2>Onde Nos Encontrar</h2>
            <div className="specialists-content">

                { especialistas.map((item,index) => (
                    <div key={index} className="specialist">
                        <h5>{ item.nome }</h5>
                        <p>{ item.cidade }</p>
                        <p className="specialist-detail">{ item.descricao }</p>
                    </div>
                ))}

            </div>
        </section>
    )
}