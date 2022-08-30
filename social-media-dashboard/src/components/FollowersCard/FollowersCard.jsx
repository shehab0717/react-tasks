import './FollowersCard.css';

export default function FollowersCard({title, totalFollowers, todayFollowers, borderClass}){
    return (
        <div className="col-sm-6 col-lg-3">
            <div className={borderClass+" follower-card text-center py-5 rounded mb-4"}>
                <div className='title'>{title}</div>
                <h1 className='display-2 fw-bold mb-0 mt-4'>{totalFollowers}</h1>
                <div className='spaced-word all-caps fw-light'>followers</div>
                <div className="text-green fw-bold mt-4">{todayFollowers} today</div>
            </div>
        </div>
    )
}