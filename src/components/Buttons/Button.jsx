export default function Button(props) {
    return (
        <a href={props.link} className={props.className}>{props.text}</a>
    )
}