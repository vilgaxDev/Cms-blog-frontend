export default function Author(props) {
    return (
        <div className="author">
            <div className="photo">
                <img src={props.authorImage} alt="" />
            </div>
            <div>
                <span className="username">{props.authorUsername}</span>
                <span className="nickname">@{props.authorNickname}</span>
            </div>
        </div>
    )
}