import './Global.css';

function Global() {
  return (
    <section className="global">
        <div className='g-description'>
            <h2>Lets go places together</h2>
            <button className='see'>See All</button>
        </div>
        <div className='destination'>
            <img className='globe-img' src="https://previews.123rf.com/images/nezezon/nezezon1409/nezezon140900010/31447915-abstract-computer-graphic-world-map.jpg" alt="Globe" />
        </div>
    </section>
  );
}

export default Global;