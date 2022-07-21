const ForumList = ({ forum, handleDelete }) => {
    return ( 
        <div className="acti-list">
            {forum.map((forum) => (
                <div className="forum-preview" key={forum.id}>
                    <h2>{ forum.titre }</h2>
                    <p>{ "Auteur:    " + forum.auteur }</p>
                    <p>{ "Message:   " + forum.message }</p>
                </div>
            ))}
        </div>
     );
}
 
export default ForumList;