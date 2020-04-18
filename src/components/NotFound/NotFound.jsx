import React from "react";
import styles from "./NotFound.module.css"

export default function NotFound(){
    return (
        <div className={styles.display}>
            <h1 className="text-secondary">
                404 Not Found
            </h1>
        </div>
    )
}