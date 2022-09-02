import './OverviewCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function OverviewCard({title, count, percentage, icon}) {
    return (
        <div className="col-sm-6 col-lg-3 mb-4">
            <div className='d-flex flex-column overview-card'>
                <div className='d-flex justify-content-between align-items-center'>
                    <span className='text-secondary fw-bold'>{title}</span>
                    <FontAwesomeIcon icon={icon} size='2x' />
                </div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <span className='light-text fw-bold fs-3'>{count}</span>
                    <span className={`green-text fw-bold ${percentage<0?'negative': ''}`}>{percentage}%</span>
                </div>
            </div>
        </div>
    )
}