import "./phrase.css";

const phrase = ({ phrase }) => {
 return (
    <section className="phrase_container">
        <p>{phrase}</p>
    </section>
    );
};

export default phrase;