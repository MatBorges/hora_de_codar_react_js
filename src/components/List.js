import Item from "./Item";

function List() {
    return(
        <>
            <ul>
                <Item marca="Mercedes" ano={2022}/>
                <Item marca="BMW" ano={2022}/>
                <Item marca="Porsche" ano={2022}/>
                <Item marca="Volkswagen" ano={2022}/>
            </ul>
        </>
    )
}

export default List;