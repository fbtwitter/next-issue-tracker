import { AddToCard } from "../AddToCard";
import styles from './ProductCard.module.css'

export const ProductCard = () => {
    return (
        <div className={styles.card}>
            <AddToCard/>
        </div>
    );
};