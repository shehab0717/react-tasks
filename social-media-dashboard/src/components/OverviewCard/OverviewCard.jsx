import './OverviewCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ThemeContext} from '../../Context/ThemeContext';

export default function OverviewCard({ title, count, percentage, icon }) {
    return (
        <ThemeContext.Consumer>
            {({theme}) =>
                <div className="col-sm-6 col-lg-3 mb-4">
                    <div className={`${theme}-card d-flex flex-column overview-card`}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <span className='text-secondary fw-bold'>{title}</span>
                            <FontAwesomeIcon icon={icon} size='2x' className={`${theme}-text`} />
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <span className={`${theme}-text fw-bold fs-3`}>{count}</span>
                            <span className={`green-text fw-bold ${percentage < 0 ? 'negative' : ''}`}>{percentage}%</span>
                        </div>
                    </div>
                </div>
            }
        </ThemeContext.Consumer>
    )
}