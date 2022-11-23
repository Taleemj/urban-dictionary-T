import styles from '../Styles.module.scss' 
import thumbsupicon from './thumbsup.png'
import thumbsdownicon from './thumbsdown.png'

const Result = ({ word, Definition, thumbsdown, thumbsup, author, example }) => {
  return (
      <div className={styles.Item}>
        <div className={styles.word}>
          <h3>{word}</h3>
        </div>
        <div className={styles.definition}>
          <p>{Definition}</p>
        </div>
        <div className={styles.examples}>
          <p>{example}</p>
        </div>
        <div className={styles.author}>
          <h4>
            <p>author:</p>{author}
          </h4>
        </div>
        <div className={styles.Likes}>
          <p>
             <img src={thumbsupicon} alt="" /><span>{thumbsup}</span>
          </p>
          <p>
           <img src={thumbsdownicon} alt="" /> <span>{thumbsdown}</span>
          </p>
        </div>
      </div>
  );
};

export default Result