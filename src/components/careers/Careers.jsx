



const Careers = () => {
    return (
            <section className="carreras__container">
                <h3 className="carreras__title" >Carreras</h3>
                <div className="carreras__flex" data-aos="fade-down-left" data-aos-duration="2500">
                    <div className="box" data-aos="flip-left">
                        <hr className="box__hr" />
                        <i className="fas fa-hand-holding-water box__icon"></i>
                        <h4 className="box__title">Agua y Saneamiento Ambiental</h4>
                        <p className="box__description">Agua y Saneamiento forma tecnólogos para gestionar el ciclo integral del agua,
                            desde la potabilización y el tratamiento de aguas residuales hasta la recolección y manejo de residuos sólidos, 
                            con un enfoque práctico en el laboratorio.</p>
                    </div>
                    <div className="box" data-aos="flip-left">
                        <hr className="box__hr" />
                        <i className="fas fa-laptop-code box__icon"></i>
                        <h4 className="box__title">Desarrollo de Software</h4>
                        <p className="box__description">La carrera de Desarrollo de Software forma profesionales para crear productos de software de alta calidad, 
                            desde la idea hasta la implementación, gestionando todo el ciclo de vida y utilizando 
                            herramientas actuales para resolver problemas tecnológicos en los sectores estratégicos de Ecuador.</p>
                    </div>
                    <div className="box" data-aos="flip-left">
                        <hr className="box__hr" />
                        <i className="fas fa-network-wired  box__icon"></i>
                        <h4 className="box__title">Redes y Telecomunicaciones</h4>
                        <p className="box__description">La carrera de Tecnología Superior en Redes y Telecomunicaciones en la EPN forma profesionales capacitados 
                            para instalar, configurar y mantener infraestructuras de conectividad modernas, 
                            utilizando medios de transmisión como fibra óptica, radioenlaces y cableado estructurado.</p>
                    </div>
                    <div className="box" data-aos="flip-down">
                        <hr className="box__hr" />
                        <i className="fas fa-robot box__icon"></i>
                        <h4 className="box__title">Electromecánica</h4>
                        <p className="box__description">La carrera de Tecnología Superior en Electromecánica en la EPN forma profesionales expertos en la integración 
                            de sistemas mecánicos y eléctricos para el sector industrial y residencial.</p>
                    </div>
                    <div className="box" data-aos="flip-down">
                        <hr className="box__hr" />
                        <i className="fas fa-couch box__icon"></i>
                        <h4 className="box__title">Madera</h4>
                        <p className="box__description">La carrera de Tecnología Superior en Procesamiento Industrial de la Madera en la EPN 
                            es un programa de formación dual que combina el aprendizaje teórico en las aulas con prácticas reales en empresas del sector.</p>
                    </div>
                    <div className="box" data-aos="flip-down">
                        <hr className="box__hr" />
                        <i className="fas fa-flask box__icon"></i>
                        <h4 className="box__title">Alimentos</h4>
                        <p className="box__description">La carrera de Tecnología Superior en Procesamiento de Alimentos de la EPN forma profesionales 
                            expertos en la transformación técnica de materias primas y la gestión de líneas de producción industrial.</p>
                    </div>
                </div>
            </section>
    )
}

export default Careers