import Result from "./Result";
import styles from '../Styles.module.scss'

const Results = ({ resultsData }) => {
  return (
    <div>
      <div id="results" className={styles.results}>
        {resultsData.map((item, i) => (
          <Result
          key={item.word + i}
            word={i}
            Definition={item.definition}
            example={item.example}
            author={item.author}
            thumbsup={item.thumbs_up}
            thumbsdown={item.thumbs_down}
          />
        ))}
      </div>
    </div>
  );
};

export default Results;
