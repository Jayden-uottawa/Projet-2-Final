const ActiList = ({ acti, handleDelete }) => {
    return ( 
        <div className="acti-list">
            {acti.map((acti) => (
                <div className="acti-preview" key={acti.id}>
                    
                    <h2>{ acti.titre }</h2>
                    <h4>{ "Date:  " + acti.date }</h4>
                    <h4>{ "Heure:  " + acti.heure }</h4>
                    <h4>{ "Description:  " + acti.description}</h4>
                    
                </div>
            ))}
        </div>
     );
}
 
export default ActiList;