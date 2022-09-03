import './FollowersCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {ThemeContext} from '../../Context/ThemeContext';

export default function FollowersCard({ iconClass, totalFollowers, todayFollowers, borderClass }) {
    return (
        <ThemeContext.Consumer>
            {
                ({theme}) =>
                    <div className="col-sm-6 col-lg-3">
                        <div className={`${borderClass} ${theme}-card follower-card text-color text-center py-5 rounded mb-4`}>
                            <FontAwesomeIcon icon={iconClass} size='lg' />
                            <span className='title d-inline-block ms-3'>@blooming</span>
                            <h1 className={`${theme}-text display-2 fw-bold mb-0 mt-4`}>{totalFollowers}</h1>
                            <div className='spaced-word all-caps fw-light'>followers</div>
                            <div className={`green-text fw-bold mt-4 ${todayFollowers < 0 ? 'negative' : ''}`}>{todayFollowers} today</div>
                        </div>
                    </div>
            }
        </ThemeContext.Consumer>
    )
}