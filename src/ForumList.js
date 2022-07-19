const ForumList = ({ forum, handleDelete }) => {
    return ( 
        <div className="acti-list">
            {forum.map((forum) => (
                <div className="forum-preview" key={forum.id}>
                    <h2>{ forum.titre }</h2>
                    <h4>{ "Auteur:" + forum.auteur }</h4>
                    <h4>{ "Message:" + forum.message }</h4>
                    <button onClick={() => handleDelete(forum.id)}>Retirer l'activité</button>
                </div>
            ))}
        </div>
     );
}
 
export default ForumList;