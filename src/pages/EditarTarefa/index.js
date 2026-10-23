import { useParams } from "react-router-dom";
import "./index.css"

export function EditarTarefa(){

    const id = useParams.id;

    return(
        <section>
            id = {id}        
        </section>
    )
}