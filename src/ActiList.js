const ActiList = ({ acti, handleDelete }) => {
    return ( 
        <div className="acti-list">
            {acti.map((acti) => (
                <div className="acti-preview" key={acti.id}>
                    <h2>{ acti.titre }</h2>
                    <h4>{ "Date:" + acti.date }</h4>
                    <h4>{ "Heure:" + acti.heure }</h4>
                    <h5>{ "Description:"}</h5>
                    <h5>{ acti.description }</h5>
                    <button onClick={() => handleDelete(acti.id)}>Retirer l'activité</button>
                </div>
            ))}
        </div>
     );
}
 
export default ActiList;