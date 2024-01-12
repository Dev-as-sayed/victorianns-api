import Countdown from 'react-countdown';

const ContestTimer = ({ endDate }) => {
  return (
    <Countdown date={new Date(endDate)} renderer={({ days, hours, minutes, seconds, completed }) => (
      <div className='w-80 bg-slate-400 text-center bg-opacity-40 rounded-lg shadow-2xl text-red-600'>
        {completed ? (
          <span>Contest has ended!</span>
        ) : (
          <div className='text-2xl font-medium py-5'>
            <span>extend: </span>
            {days > 0 && <span>{days}d </span>}
            {hours > 0 && <span>{hours}h </span>}
            {minutes > 0 && <span>{minutes}m </span>}
            {seconds > 0 && <span>{seconds}s </span>}
          </div>
        )}
      </div>
    )} />
  );
};

export default ContestTimer;
