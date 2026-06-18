import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import content from "../../content.json"

const copy = {
    en: {
        greeting: 'Welcome.',
        intro: (<>My name is <b>Jhonatan Costa</b>, I'm a Software Engineer based in Braga,
            Portugal. I have experience with a variety of technologies,
            including <b>Python</b>, <b>FastAPI</b>, <b>GCP services</b>, <b>AWS services</b>,
            and more. For additional details, please refer to my
        </>),
        resumeLabel: 'resume',
        projectsTitle: 'Projects',
        resumeFile: 'resume-en.pdf',
        passion: "I'm passionate about elegant solutions, scalability, performance and intuitively implemented code.",
    },
    'pt-br': {
        greeting: 'Bem-vindo.',
        intro: (<>Meu nome é <b>Jhonatan Costa</b>, sou Engenheiro de Software e moro em Braga,
            Portugal. Tenho experiência com diversas tecnologias,
            incluindo <b>Python</b>, <b>FastAPI</b>, <b>serviços GCP</b>{' '}e{' '}<b>serviços AWS</b>{' '}
            e muito mais. Para mais detalhes, consulte meu
        </>),
        resumeLabel: 'currículo',
        projectsTitle: 'Projetos',
        resumeFile: 'resume-pt.pdf',
        passion: 'Sou apaixonado por soluções elegantes, escalabilidade, desempenho e código implementado de forma intuitiva.',
    },
} as const;

interface IProps {
    lang?: 'en' | 'pt-br';
}

export default function Card({ lang = 'en' }: Readonly<IProps>) {
    const t = copy[lang];

    return (
        <div className="card-container">
            <div className="card flip-front">
                <div className="face front">
                    <div className="whole-container">
                        <Header email={content.email} github={content.github} linkedin={content.linkdin} />
                        <div className="main-wrap">
                            <div className="main-grid">
                                <div>
                                    <h1 className="welcome">{t.greeting}</h1>
                                    <div>
                                        {t.intro}{' '}
                                        <a style={{display: "inline-block"}} href={`${process.env.PUBLIC_URL}/resumes/${t.resumeFile}`} download={t.resumeFile}>
                                            {t.resumeLabel}
                                        </a>.
                                        <p>{t.passion}</p>
                                    </div>
                                </div>
                                <div>
                                    <Portfolio title={t.projectsTitle} projects={content.projects} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}