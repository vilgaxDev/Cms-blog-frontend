import './SectionTitle.css'

export default function SectionTitle(props) {
    return (
        <div className="section_title">
            <h1>{props.h1}</h1>
        </div>
    )
}