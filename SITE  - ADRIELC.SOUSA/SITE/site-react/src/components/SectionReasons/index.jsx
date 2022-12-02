import './style.css';

const razoes = [
    {
    descricao: 'Nós somos movidos por desafios! Buscamos pessoas que, assim como nós, acreditam no poder da inovação. Se a vida acontece fora do “cofre”, onde as pessoas guardam seu dinheiro, nós pensamos fora da caixa! Acreditamos e entendemos que os obstáculos fortalecem o percurso, pois nos fazem criar novas possibilidades e chegar onde ninguém mais chegou, oferecendo as melhores soluções para os nossos clientes.'
    }
];


export function SectionReasons() {

    return (

        <section id="reasons">
            <h2>Trabalhe Conosco!</h2>

            <div className="reasons-content">
            <h6>Nós somos e planejadores movidos por desafios! Buscamos pessoas que, assim como nós, acreditam no poder da inovação. Se a vida acontece fora do “cofre”, onde as pessoas guardam seu dinheiro, nós pensamos fora da caixa! Acreditamos e entendemos que os obstáculos fortalecem o percurso, pois nos fazem criar novas possibilidades e chegar onde ninguém mais chegou, oferecendo as melhores soluções para os nossos clientes.</h6>


                {razoes.map((item, index) => (
                    <div key={index} className="reason">
                        <p className="reason-value">{ item.valor }</p>
                        <p className="reason-label">{ item.rotulo }</p>
                    </div>
                ))}

            </div>
        </section>

    )

}