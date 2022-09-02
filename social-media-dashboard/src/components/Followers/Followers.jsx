import FollowersCard from '../FollowersCard/FollowersCard';
import './Followers.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
 import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCaretUp)

export default function Followers() {
    return (
        <div className="Followers mt-5">
            <div className="container">
                <div className="row">
                    <FollowersCard borderClass='facebook' iconClass='fa-brands fa-facebook' totalFollowers={32432} todayFollowers={711} />
                    <FollowersCard borderClass='twitter' iconClass='fa-brands fa-twitter' totalFollowers={5698} todayFollowers={500} />
                    <FollowersCard borderClass='instagram' iconClass='fa-brands fa-instagram' totalFollowers={8423} todayFollowers={211} />
                    <FollowersCard borderClass='pinterest' iconClass='fa-brands fa-pinterest' totalFollowers={11223} todayFollowers={-20} />
                </div>
            </div>
        </div>
    )
}