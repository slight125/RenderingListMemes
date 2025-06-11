import styles from "./Meme.module.scss";

type MemeProps = {
  title: string;
  imageUrl: string;
};

export function Meme({ title, imageUrl }: MemeProps) {
  return (
    <div className={styles.meme}>
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
    </div>
  );
}