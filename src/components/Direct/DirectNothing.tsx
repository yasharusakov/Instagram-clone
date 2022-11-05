import {Link} from "react-router-dom"

const DirectNothing = () => {
    return (
        <div className="direct__chat__nothing">
            <svg aria-label="Direct" color="#262626" fill="#262626" height="96" role="img" viewBox="0 0 96 96" width="96">
                <circle cx="48" cy="48" fill="none" r="47" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="69.286" x2="41.447" y1="33.21" y2="48.804"/>
                <polygon fill="none" points="47.254 73.123 71.376 31.998 24.546 32.002 41.448 48.805 47.254 73.123" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"/>
            </svg>
            <div className="direct__chat__nothing__title">Ваши сообщения</div>
            <div className="direct__chat__nothing__sub-title">Отправляйте личные фото и сообщения другу или группе.</div>
            <Link to="/explore/search" className="direct__chat__nothing__send-message">Отправить сообщения</Link>
        </div>
    )
}

export default DirectNothing