// import "./ChildrenExample.css"

import CardContainer from "./CardContainer";

const ChildrenExample = () => {
    return (
        <section className="">

            {/* <div>
                <h2 className="text-white">Gato</h2>
                <div>
                    <img src="/triston.jpg" alt="" />
                </div>
                <span>Gato tristón</span>
            </div> */}

            <CardContainer title="Gato">
                <ul>
                    <li>wiririri</li>
                    <li>wiriwiri</li>
                    <li>werwerwer</li>
                </ul>
            </CardContainer>

            <CardContainer title="Gato">
                <ul>
                    <li>wiririri</li>
                    <li>wiriwiri</li>
                    <li>werwerwer</li>
                </ul>
            </CardContainer>

            <CardContainer>
                <h2>Lista de cosas por hacer</h2>
                <ul>
                    <li>Repasar listas de React</li>
                    <li>Practicar con APIs</li>
                    <li>Repasar estados en React</li>
                </ul>
            </CardContainer>

            <div>
                <h2>Texto Random</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
                    facilis. Et enim distinctio saepe maxime id repellat mollitia, qui
                    blanditiis aliquid. Veniam nemo nesciunt illo quis dolorum possimus,
                    ea harum?
                </p>
            </div>

        </section>
    );
};
export default ChildrenExample;