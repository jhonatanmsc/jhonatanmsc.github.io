import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import content from "../../content.json"

export default function Card() {

    return (
        <div className="card-container">
            <div className="card flip-front">
                <div className="face front">
                    <div className="whole-container">
                        <Header email={content.email} github={content.github} linkedin={content.linkdin} />
                        <div className="main-wrap">
                            <div className="main-grid">
                                <div>
                                    <h1 className="welcome">Welcome.</h1>
                                    <div>
                                        My name is <b>Jhonatan Costa</b>, I'm a Software Engineer based in Braga,
                                        Portugal. I have experience with a variety of technologies,
                                        including <b>Python</b>, <b>FastAPI</b>, <b>GCP services</b>, <b>AWS services</b>,
                                        and more. For additional details, please refer to
                                        my <a style={{display: "inline-block"}} target="_blank\" href={content.resumeLink}>
                                            resume
                                        </a>.
                                        <p>I'm passionate about elegant solutions, scalability, performance and
                                            intuitively
                                            implemented code.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <Portfolio projects={content.projects} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}