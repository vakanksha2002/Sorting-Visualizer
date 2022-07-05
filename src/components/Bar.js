import './Bar.css'

const Bars = ({ index, length, colorKey }) => {
    const colors = ['#0000ff', '#dc143c', '#00008b'];

    let barStyle = {
        background: colors[colorKey],
        height: length,
        marginTop: 200 - length,
    };

    return (
        <div className='bar' style={barStyle} >
        </div>
    )
}

export default Bars;